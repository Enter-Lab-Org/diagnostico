import { apiClient } from './axios.config';
import { API_ENDPOINTS } from './config';

export type TamanoEmpresa = 'MICRO' | 'PEQUENA' | 'MEDIANA' | 'GRANDE';

export interface CreateEmpresaRequest {
  razonSocial: string;
  rfc: string;
  tamano: TamanoEmpresa;
  actividad: string;
  pais: string;
  estado: string;
  municipio: string;
  userId: string;
}

export interface Empresa {
  id: string;
  razonSocial: string;
  rfc: string;
  tamano: TamanoEmpresa;
  actividad: string;
  pais: string;
  estado: string;
  municipio: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export const empresasService = {
  async create(data: CreateEmpresaRequest): Promise<Empresa> {
    const response = await apiClient.post<Empresa>(
      API_ENDPOINTS.EMPRESAS.CREATE,
      data
    );
    return response.data;
  },

  async findAll(userId?: string): Promise<Empresa[]> {
    const params = userId ? { userId } : {};
    const response = await apiClient.get<Empresa[]>(
      API_ENDPOINTS.EMPRESAS.FIND_ALL,
      { params }
    );
    return response.data;
  },

  async findOne(id: string): Promise<Empresa> {
    const response = await apiClient.get<Empresa>(
      `${API_ENDPOINTS.EMPRESAS.FIND_ALL}/${id}`
    );
    return response.data;
  },

  async findByUserId(userId: string): Promise<Empresa[]> {
    const response = await apiClient.get<Empresa[]>(
      `${API_ENDPOINTS.EMPRESAS.FIND_BY_USER_ID}/${userId}`
    );
    return response.data;
  },

  async update(id: string, data: Partial<CreateEmpresaRequest>): Promise<Empresa> {
    const response = await apiClient.patch<Empresa>(
      `${API_ENDPOINTS.EMPRESAS.FIND_ALL}/${id}`,
      data
    );
    return response.data;
  },

  async remove(id: string): Promise<Empresa> {
    const response = await apiClient.delete<Empresa>(
      `${API_ENDPOINTS.EMPRESAS.FIND_ALL}/${id}`
    );
    return response.data;
  },
};

