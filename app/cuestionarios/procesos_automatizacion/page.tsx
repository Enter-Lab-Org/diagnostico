"use client";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const ProcesosAutomatizacionPage = () => {
  const { setProcesosAutomatizacion } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setProcesosAutomatizacion}
  />;
};

export default ProcesosAutomatizacionPage;

