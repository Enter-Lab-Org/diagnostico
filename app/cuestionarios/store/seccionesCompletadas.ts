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
  })
);
