import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from './config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Interceptor para agregar el token de autenticación a las peticiones
apiClient.interceptors.request.use(
  (config) => {
    // Solo agregar el token si existe en localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores globalmente
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      const data = error.response.data as any;
      
      // NestJS generalmente devuelve errores en formato { message, statusCode } o { message }
      let message = 'Error en la petición';
      
      if (typeof data === 'string') {
        message = data;
      } else if (data?.message) {
        // Puede ser un string o un array de strings (validación)
        message = Array.isArray(data.message) 
          ? data.message.join(', ') 
          : data.message;
      } else if (data?.error) {
        message = data.error;
      }
      
      return Promise.reject(new Error(message));
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      return Promise.reject(new Error('No se pudo conectar con el servidor. Verifica que la API esté ejecutándose.'));
    } else {
      // Algo pasó al configurar la petición
      return Promise.reject(new Error(error.message || 'Error desconocido'));
    }
  }
);

