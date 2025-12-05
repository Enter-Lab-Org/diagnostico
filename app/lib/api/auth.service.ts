import { apiClient } from './axios.config';
import { API_ENDPOINTS } from './config';

export interface LoginRequest {
  email: string;
  password: string;
}

// User interface matching the backend User model (without password)
export interface User {
  id: string;
  email: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  curp?: string | null;
  sexo: string;
  fechaNacimiento: string;
  entidadFederativaNacimiento: string;
  municipioResidencia: string;
  entidadFederativaResidencia: string;
  calle: string;
  numeroExterior: string;
  numeroInterior?: string | null;
  codigoPostal: string;
  whatsapp: string;
  perfil: string;
  areaConocimiento: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface RegisterRequest {
  email: string;
  password: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  curp?: string;
  sexo: 'MASCULINO' | 'FEMENINO' | 'PREFIERO_NO_MENCIONARLO';
  fechaNacimiento: string;
  entidadFederativaNacimiento: string;
  municipioResidencia: string;
  entidadFederativaResidencia: string;
  calle: string;
  numeroExterior: string;
  numeroInterior?: string;
  codigoPostal: string;
  whatsapp: string;
  perfil: 'ESTUDIANTE_SUPERIOR_UNIVERSITARIO' | 'CONSULTOR' | 'ESTUDIANTE' | 'EMPRENDEDOR' | 'EMPLEADO' | 'DUENO' | 'OTRO';
  areaConocimiento: string;
}

export interface RegisterResponse {
  access_token: string;
  user: User;
}

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    return response.data;
  },

  async register(data: RegisterRequest): Promise<RegisterResponse> {
    const response = await apiClient.post<RegisterResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );
    return response.data;
  },
};

