"use client";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const GobernanzaSostenibilidadPage = () => {
  const { setGobernanzaSostenibilidad } = usePorcentajeAvancesStore();
  return <Cuestionario preguntas={preguntas} setPorcentajeAvances={setGobernanzaSostenibilidad} />;
};

export default GobernanzaSostenibilidadPage;

