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
} as const;






