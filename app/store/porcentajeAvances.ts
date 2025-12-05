import { CategoriaCuestionario, CuestionarioRespuesta, diagnosticosService } from "@/app/lib/api/diagnosticos.service";
import { create } from "zustand";

type Store = {
  calidad_ciberseguridad: number;
  cultura_digital: number;
  datos_analitica: number;
  experiencia_cliente: number;
  gobernanza_sostenibilidad: number;
  presencia_redes_sociales: number;
  procesos_automatizacion: number;
  tecnologia_infraestructura: number;
  
  setCulturaDigital: (cultura_digital: number) => void;
  setTecnologiaInfraestructura: (tecnologia_infraestructura: number) => void;
  setProcesosAutomatizacion: (procesos_automatizacion: number) => void;
  setDatosAnalitica: (datos_analitica: number) => void;
  setExperienciaCliente: (experiencia_cliente: number) => void;
  setGobernanzaSostenibilidad: (gobernanza_sostenibilidad: number) => void;
  setPresenciaRedesSociales: (presencia_redes_sociales: number) => void;
  setCalidadCiberseguridad: (calidad_ciberseguridad: number) => void;
  cargarDesdeAPI: (empresaId: string) => Promise<void>;
};

// Mapeo de categorías a propiedades del store
const categoriaToStoreKey: Record<CategoriaCuestionario, keyof Pick<Store, 'calidad_ciberseguridad' | 'cultura_digital' | 'datos_analitica' | 'experiencia_cliente' | 'gobernanza_sostenibilidad' | 'presencia_redes_sociales' | 'procesos_automatizacion' | 'tecnologia_infraestructura'>> = {
  [CategoriaCuestionario.CALIDAD_CIBERSEGURIDAD]: 'calidad_ciberseguridad',
  [CategoriaCuestionario.CULTURA_DIGITAL]: 'cultura_digital',
  [CategoriaCuestionario.DATOS_ANALITICA]: 'datos_analitica',
  [CategoriaCuestionario.EXPERIENCIA_CLIENTE]: 'experiencia_cliente',
  [CategoriaCuestionario.GOBERNANZA_SOSTENIBILIDAD]: 'gobernanza_sostenibilidad',
  [CategoriaCuestionario.PRESENCIA_REDES_SOCIALES]: 'presencia_redes_sociales',
  [CategoriaCuestionario.PROCESOS_AUTOMATIZACION]: 'procesos_automatizacion',
  [CategoriaCuestionario.TECNOLOGIA_INFRAESTRUCTURA]: 'tecnologia_infraestructura',
};

export const usePorcentajeAvancesStore = create<Store>()((set, get) => ({
  calidad_ciberseguridad: 0,
  cultura_digital: 0,
  datos_analitica: 0,
  experiencia_cliente: 0,
  gobernanza_sostenibilidad: 0,
  presencia_redes_sociales: 0,
  procesos_automatizacion: 0,
  tecnologia_infraestructura: 0,

  setCalidadCiberseguridad: (calidad_ciberseguridad: number) =>
    set({ calidad_ciberseguridad }),
  setCulturaDigital: (cultura_digital: number) => set({ cultura_digital }),
  setDatosAnalitica: (datos_analitica: number) => set({ datos_analitica }),
  setExperienciaCliente: (experiencia_cliente: number) =>
    set({ experiencia_cliente }),
  setGobernanzaSostenibilidad: (gobernanza_sostenibilidad: number) =>
    set({ gobernanza_sostenibilidad }),
  setPresenciaRedesSociales: (presencia_redes_sociales: number) =>
    set({ presencia_redes_sociales }),
  setProcesosAutomatizacion: (procesos_automatizacion: number) =>
    set({ procesos_automatizacion }),
  setTecnologiaInfraestructura: (tecnologia_infraestructura: number) =>
    set({ tecnologia_infraestructura }),
  
  cargarDesdeAPI: async (empresaId: string) => {
    try {
      const cuestionarios = await diagnosticosService.findAll(empresaId);
      
      // Inicializar todos los valores en 0
      const updates: Partial<Store> = {
        calidad_ciberseguridad: 0,
        cultura_digital: 0,
        datos_analitica: 0,
        experiencia_cliente: 0,
        gobernanza_sostenibilidad: 0,
        presencia_redes_sociales: 0,
        procesos_automatizacion: 0,
        tecnologia_infraestructura: 0,
      };
      
      // Actualizar según el estado de completado
      cuestionarios.forEach((cuestionario: CuestionarioRespuesta) => {
        const storeKey = categoriaToStoreKey[cuestionario.categoria];
        if (storeKey && cuestionario.completado) {
          updates[storeKey] = 100;
        }
      });
      
      set(updates);
    } catch (error) {
      console.error('Error al cargar porcentajes desde API:', error);
    }
  },
}));
