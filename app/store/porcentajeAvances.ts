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
};

export const usePorcentajeAvancesStore = create<Store>()((set) => ({
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
}));
