import { diagnosticosService } from '@/app/lib/api/diagnosticos.service';

/**
 * Obtiene o crea un diagnóstico para la empresa actual
 * @param empresaId ID de la empresa
 * @returns ID del diagnóstico
 */
export async function obtenerOCrearDiagnostico(empresaId: string): Promise<string> {
  try {
    // Buscar diagnósticos existentes para esta empresa
    const diagnosticos = await diagnosticosService.findAll(empresaId);
    
    // Buscar un diagnóstico no completado
    const diagnosticoIncompleto = diagnosticos.find(d => !d.completado);
    
    if (diagnosticoIncompleto) {
      return diagnosticoIncompleto.id;
    }
    
    // Si no hay diagnóstico incompleto, crear uno nuevo
    const nuevoDiagnostico = await diagnosticosService.create({ empresaId });
    return nuevoDiagnostico.id;
  } catch (error) {
    console.error('Error al obtener o crear diagnóstico:', error);
    throw error;
  }
}

/**
 * Inicializa el diagnóstico en localStorage
 * Se asegura de que exista empresaId y diagnosticoId en localStorage
 */
export async function inicializarDiagnostico(empresaId?: string): Promise<void> {
  // Si se proporciona empresaId, guardarlo
  if (empresaId) {
    localStorage.setItem('empresaId', empresaId);
  } else {
    // Si no se proporciona, intentar obtenerlo de localStorage
    empresaId = localStorage.getItem('empresaId') || undefined;
  }
  
  if (!empresaId) {
    throw new Error('No se encontró empresaId. Por favor, selecciona una empresa primero.');
  }
  
  // Verificar si ya existe un diagnosticoId en localStorage
  let diagnosticoId = localStorage.getItem('diagnosticoId');
  
  if (diagnosticoId) {
    // Verificar que el diagnóstico existe y no está completado
    try {
      const diagnostico = await diagnosticosService.findOne(diagnosticoId);
      
      // Si el diagnóstico está completado o pertenece a otra empresa, crear uno nuevo
      if (diagnostico.completado || diagnostico.empresaId !== empresaId) {
        diagnosticoId = await obtenerOCrearDiagnostico(empresaId);
        localStorage.setItem('diagnosticoId', diagnosticoId);
      }
    } catch (error) {
      // Si el diagnóstico no existe, crear uno nuevo
      diagnosticoId = await obtenerOCrearDiagnostico(empresaId);
      localStorage.setItem('diagnosticoId', diagnosticoId);
    }
  } else {
    // No hay diagnosticoId, crear uno nuevo
    diagnosticoId = await obtenerOCrearDiagnostico(empresaId);
    localStorage.setItem('diagnosticoId', diagnosticoId);
  }
}
