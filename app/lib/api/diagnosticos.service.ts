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

export interface CuestionarioRespuesta {
  id: string;
  empresaId: string;
  categoria: CategoriaCuestionario;
  completado: boolean;
  puntajeObtenido: number | null;
  puntajeMaximo: number | null;
  fechaInicio: string;
  fechaCompletado: string | null;
  createdAt: string;
  updatedAt: string;
  respuestas?: RespuestaIndividual[];
  empresa?: any;
}

export interface EmpresaConCuestionarios {
  empresa: any;
  cuestionarios: CuestionarioRespuesta[];
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
  empresaId: string;
  completado: boolean;
  porcentajeProgreso: number;
  cuestionariosCompletados: number;
  totalCuestionarios: number;
  puntajeTotal: number | null;
  nivelMadurez: string | null;
  cuestionarios: Array<{
    categoria: CategoriaCuestionario;
    completado: boolean;
    puntajeObtenido: number | null;
    puntajeMaximo: number | null;
    fechaCompletado: string | null;
  }>;
}

export const diagnosticosService = {
  async create(data: CreateDiagnosticoDto): Promise<CuestionarioRespuesta[]> {
    const response = await apiClient.post<CuestionarioRespuesta[]>(
      API_ENDPOINTS.DIAGNOSTICOS.CREATE,
      data
    );
    return response.data;
  },

  async findAll(empresaId?: string): Promise<CuestionarioRespuesta[]> {
    const params = empresaId ? { empresaId } : {};
    const response = await apiClient.get<CuestionarioRespuesta[]>(
      API_ENDPOINTS.DIAGNOSTICOS.FIND_ALL,
      { params }
    );
    return response.data;
  },

  async findByEmpresa(empresaId: string): Promise<EmpresaConCuestionarios> {
    const response = await apiClient.get<EmpresaConCuestionarios>(
      API_ENDPOINTS.DIAGNOSTICOS.FIND_BY_EMPRESA(empresaId)
    );
    return response.data;
  },

  async getProgreso(empresaId: string): Promise<ProgresoDiagnostico> {
    const response = await apiClient.get<ProgresoDiagnostico>(
      API_ENDPOINTS.DIAGNOSTICOS.GET_PROGRESO(empresaId)
    );
    return response.data;
  },

  async guardarRespuestas(
    empresaId: string,
    data: GuardarRespuestasDto
  ): Promise<CuestionarioRespuesta> {
    const response = await apiClient.patch<CuestionarioRespuesta>(
      API_ENDPOINTS.DIAGNOSTICOS.GUARDAR_RESPUESTAS(empresaId),
      data
    );
    return response.data;
  },

  async remove(empresaId: string): Promise<{ message: string }> {
    const response = await apiClient.delete<{ message: string }>(
      API_ENDPOINTS.DIAGNOSTICOS.REMOVE(empresaId)
    );
    return response.data;
  },
};
