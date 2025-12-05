import { apiClient } from './axios.config';
import { API_ENDPOINTS } from './config';

export enum CategoriaCuestionario {
  CALIDAD_CIBERSEGURIDAD = 'CALIDAD_CIBERSEGURIDAD',
  CULTURA_DIGITAL = 'CULTURA_DIGITAL',
  DATOS_ANALITICA = 'DATOS_ANALITICA',
  EXPERIENCIA_CLIENTE = 'EXPERIENCIA_CLIENTE',
  GOBERNANZA_SOSTENIBILIDAD = 'GOBERNANZA_SOSTENIBILIDAD',
  PRESENCIA_REDES_SOCIALES = 'PRESENCIA_REDES_SOCIALES',
  PROCESOS_AUTOMATIZACION = 'PROCESOS_AUTOMATIZACION',
  TECNOLOGIA_INFRAESTRUCTURA = 'TECNOLOGIA_INFRAESTRUCTURA',
}

export interface RespuestaDto {
  numeroPregunta: number;
  preguntaTexto: string;
  valorSeleccionado: number;
  textoRespuesta: string;
}

export interface GuardarRespuestasDto {
  categoria: CategoriaCuestionario;
  respuestas: RespuestaDto[];
}

export interface CreateDiagnosticoDto {
  empresaId: string;
}

export interface Diagnostico {
  id: string;
  empresaId: string;
  fechaInicio: string;
  fechaFinalizacion: string | null;
  completado: boolean;
  puntajeTotal: number | null;
  nivelMadurez: string | null;
  cuestionarios: CuestionarioRespuesta[];
  createdAt: string;
  updatedAt: string;
}

export interface CuestionarioRespuesta {
  id: string;
  diagnosticoId: string;
  categoria: CategoriaCuestionario;
  completado: boolean;
  puntajeObtenido: number | null;
  puntajeMaximo: number | null;
  porcentaje: number | null;
  fechaCompletado: string | null;
  respuestas: RespuestaIndividual[];
}

export interface RespuestaIndividual {
  id: string;
  cuestionarioRespuestaId: string;
  numeroPregunta: number;
  preguntaTexto: string;
  valorSeleccionado: number;
  textoRespuesta: string;
}

export interface ProgresoDiagnostico {
  diagnosticoId: string;
  completado: boolean;
  porcentajeProgreso: number;
  cuestionariosCompletados: number;
  totalCuestionarios: number;
  cuestionarios: Array<{
    categoria: CategoriaCuestionario;
    completado: boolean;
    porcentaje: number | null;
    fechaCompletado: string | null;
  }>;
}

export const diagnosticosService = {
  async create(data: CreateDiagnosticoDto): Promise<Diagnostico> {
    const response = await apiClient.post<Diagnostico>(
      API_ENDPOINTS.DIAGNOSTICOS.CREATE,
      data
    );
    return response.data;
  },

  async findAll(empresaId?: string): Promise<Diagnostico[]> {
    const params = empresaId ? { empresaId } : {};
    const response = await apiClient.get<Diagnostico[]>(
      API_ENDPOINTS.DIAGNOSTICOS.FIND_ALL,
      { params }
    );
    return response.data;
  },

  async findOne(id: string): Promise<Diagnostico> {
    const response = await apiClient.get<Diagnostico>(
      API_ENDPOINTS.DIAGNOSTICOS.FIND_ONE(id)
    );
    return response.data;
  },

  async getProgreso(id: string): Promise<ProgresoDiagnostico> {
    const response = await apiClient.get<ProgresoDiagnostico>(
      API_ENDPOINTS.DIAGNOSTICOS.GET_PROGRESO(id)
    );
    return response.data;
  },

  async guardarRespuestas(
    diagnosticoId: string,
    data: GuardarRespuestasDto
  ): Promise<CuestionarioRespuesta> {
    const response = await apiClient.patch<CuestionarioRespuesta>(
      API_ENDPOINTS.DIAGNOSTICOS.GUARDAR_RESPUESTAS(diagnosticoId),
      data
    );
    return response.data;
  },

  async remove(id: string): Promise<Diagnostico> {
    const response = await apiClient.delete<Diagnostico>(
      API_ENDPOINTS.DIAGNOSTICOS.FIND_ONE(id)
    );
    return response.data;
  },
};
