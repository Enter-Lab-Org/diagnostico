"use client";

import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const CalidadCiberseguridadPage = () => {
  const { setCalidadCiberseguridad } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setCalidadCiberseguridad}

  />;
};

export default CalidadCiberseguridadPage;

