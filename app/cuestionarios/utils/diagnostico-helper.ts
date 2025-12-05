import { diagnosticosService } from '@/app/lib/api/diagnosticos.service';

/**
 * Inicializa los cuestionarios para la empresa actual
 * Crea todos los cuestionarios si no existen
 * @param empresaId ID de la empresa
 */
export async function inicializarCuestionarios(empresaId: string): Promise<void> {
  try {
    // Buscar cuestionarios existentes para esta empresa
    const cuestionarios = await diagnosticosService.findAll(empresaId);
    
    // Si no hay cuestionarios, crearlos
    if (cuestionarios.length === 0) {
      await diagnosticosService.create({ empresaId });
    }
  } catch (error) {
    console.error('Error al inicializar cuestionarios:', error);
    throw error;
  }
}

/**
 * Inicializa el diagnóstico en localStorage
 * Se asegura de que exista empresaId y que los cuestionarios estén creados
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
  
  // Inicializar los cuestionarios para esta empresa
  await inicializarCuestionarios(empresaId);
}
