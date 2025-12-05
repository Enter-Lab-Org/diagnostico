export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  EMPRESAS: {
    CREATE: '/empresas',
    FIND_ALL: '/empresas',
    FIND_BY_USER_ID: '/empresas/user',
  },
  DIAGNOSTICOS: {
    CREATE: '/diagnosticos',
    FIND_ALL: '/diagnosticos',
    FIND_BY_EMPRESA: (empresaId: string) => `/diagnosticos/empresa/${empresaId}`,
    GET_PROGRESO: (empresaId: string) => `/diagnosticos/empresa/${empresaId}/progreso`,
    GUARDAR_RESPUESTAS: (empresaId: string) => `/diagnosticos/empresa/${empresaId}/respuestas`,
    REMOVE: (empresaId: string) => `/diagnosticos/empresa/${empresaId}`,
  },
} as const;






