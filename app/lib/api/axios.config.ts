import axios from 'axios';
import { API_BASE_URL } from './config';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // Cambiar a true si necesitas enviar cookies
});

// Interceptor para manejar errores globalmente
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      const message = error.response.data?.message || error.response.data?.error || 'Error en la petición';
      return Promise.reject(new Error(message));
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      return Promise.reject(new Error('No se pudo conectar con el servidor'));
    } else {
      // Algo pasó al configurar la petición
      return Promise.reject(new Error(error.message || 'Error desconocido'));
    }
  }
);

