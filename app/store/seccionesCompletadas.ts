import { CategoriaCuestionario, CuestionarioRespuesta, diagnosticosService } from "@/app/lib/api/diagnosticos.service";
import { create } from "zustand";

type SeccionesCompletadasStore = {
  cultura_digital: boolean;
  tecnologia_infraestructura: boolean;
  procesos_automatizacion: boolean;
  datos_analitica: boolean;
  experiencia_cliente: boolean;
  gobernanza_sostenibilidad: boolean;
  presencia_redes_sociales: boolean;
  calidad_ciberseguridad: boolean;
  setCulturaDigital: (cultura_digital: boolean) => void;
  setTecnologiaInfraestructura: (tecnologia_infraestructura: boolean) => void;
  setProcesosAutomatizacion: (procesos_automatizacion: boolean) => void;
  setDatosAnalitica: (datos_analitica: boolean) => void;
  setExperienciaCliente: (experiencia_cliente: boolean) => void;
  setGobernanzaSostenibilidad: (gobernanza_sostenibilidad: boolean) => void;
  setPresenciaRedesSociales: (presencia_redes_sociales: boolean) => void;
  setCalidadCiberseguridad: (calidad_ciberseguridad: boolean) => void;
  cargarDesdeAPI: (empresaId: string) => Promise<void>;
};

// Mapeo de categorías a propiedades del store
const categoriaToStoreKey: Record<CategoriaCuestionario, keyof Pick<SeccionesCompletadasStore, 'calidad_ciberseguridad' | 'cultura_digital' | 'datos_analitica' | 'experiencia_cliente' | 'gobernanza_sostenibilidad' | 'presencia_redes_sociales' | 'procesos_automatizacion' | 'tecnologia_infraestructura'>> = {
  [CategoriaCuestionario.CALIDAD_CIBERSEGURIDAD]: 'calidad_ciberseguridad',
  [CategoriaCuestionario.CULTURA_DIGITAL]: 'cultura_digital',
  [CategoriaCuestionario.DATOS_ANALITICA]: 'datos_analitica',
  [CategoriaCuestionario.EXPERIENCIA_CLIENTE]: 'experiencia_cliente',
  [CategoriaCuestionario.GOBERNANZA_SOSTENIBILIDAD]: 'gobernanza_sostenibilidad',
  [CategoriaCuestionario.PRESENCIA_REDES_SOCIALES]: 'presencia_redes_sociales',
  [CategoriaCuestionario.PROCESOS_AUTOMATIZACION]: 'procesos_automatizacion',
  [CategoriaCuestionario.TECNOLOGIA_INFRAESTRUCTURA]: 'tecnologia_infraestructura',
};

export const useSeccionesCompletadasStore = create<SeccionesCompletadasStore>()(
  (set) => ({
    cultura_digital: false,
    tecnologia_infraestructura: false,
    procesos_automatizacion: false,
    datos_analitica: false,
    experiencia_cliente: false,
    gobernanza_sostenibilidad: false,
    presencia_redes_sociales: false,
    calidad_ciberseguridad: false,
    setCulturaDigital: (cultura_digital: boolean) => set({ cultura_digital }),
    setTecnologiaInfraestructura: (tecnologia_infraestructura: boolean) =>
      set({ tecnologia_infraestructura }),
    setProcesosAutomatizacion: (procesos_automatizacion: boolean) =>
      set({ procesos_automatizacion }),
    setDatosAnalitica: (datos_analitica: boolean) => set({ datos_analitica }),
    setExperienciaCliente: (experiencia_cliente: boolean) =>
      set({ experiencia_cliente }),
    setGobernanzaSostenibilidad: (gobernanza_sostenibilidad: boolean) =>
      set({ gobernanza_sostenibilidad }),
    setPresenciaRedesSociales: (presencia_redes_sociales: boolean) =>
      set({ presencia_redes_sociales }),
    setCalidadCiberseguridad: (calidad_ciberseguridad: boolean) =>
      set({ calidad_ciberseguridad }),
    
    cargarDesdeAPI: async (empresaId: string) => {
      try {
        const cuestionarios = await diagnosticosService.findAll(empresaId);
        
        // Inicializar todos los valores en false
        const updates: Partial<SeccionesCompletadasStore> = {
          calidad_ciberseguridad: false,
          cultura_digital: false,
          datos_analitica: false,
          experiencia_cliente: false,
          gobernanza_sostenibilidad: false,
          presencia_redes_sociales: false,
          procesos_automatizacion: false,
          tecnologia_infraestructura: false,
        };
        
        // Actualizar según el estado de completado
        cuestionarios.forEach((cuestionario: CuestionarioRespuesta) => {
          const storeKey = categoriaToStoreKey[cuestionario.categoria];
          if (storeKey && cuestionario.completado) {
            updates[storeKey] = true;
          }
        });
        
        set(updates);
      } catch (error) {
        console.error('Error al cargar secciones completadas desde API:', error);
      }
    },
  })
);
