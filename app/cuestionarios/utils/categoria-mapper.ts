import { CategoriaCuestionario } from '@/app/lib/api/diagnosticos.service';
import { APP_ROUTES } from '@/app/router/app.routes';

/**
 * Mapea las rutas de cuestionarios a las categorías de la API
 */
export const routeToCategoria: Record<string, CategoriaCuestionario> = {
  [APP_ROUTES.CUESTIONARIO_CULTURA_DIGITAL]: CategoriaCuestionario.CULTURA_DIGITAL,
  [APP_ROUTES.CUESTIONARIO_TECNOLOGIA_INFRAESTRUCTURA]: CategoriaCuestionario.TECNOLOGIA_INFRAESTRUCTURA,
  [APP_ROUTES.CUESTIONARIO_PROCESOS_AUTOMATIZACION]: CategoriaCuestionario.PROCESOS_AUTOMATIZACION,
  [APP_ROUTES.CUESTIONARIO_DATOS_ANALITICA]: CategoriaCuestionario.DATOS_ANALITICA,
  [APP_ROUTES.CUESTIONARIO_EXPERIENCIA_CLIENTE]: CategoriaCuestionario.EXPERIENCIA_CLIENTE,
  [APP_ROUTES.CUESTIONARIO_GOBERNANZA_SOSTENIBILIDAD]: CategoriaCuestionario.GOBERNANZA_SOSTENIBILIDAD,
  [APP_ROUTES.CUESTIONARIO_PRESENCIA_REDES]: CategoriaCuestionario.PRESENCIA_REDES_SOCIALES,
};

/**
 * Obtiene la categoría del cuestionario basado en la ruta actual
 */
export function getCategoriaFromRoute(route: string): CategoriaCuestionario | null {
  return routeToCategoria[route] || null;
}
