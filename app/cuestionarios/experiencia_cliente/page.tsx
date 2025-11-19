"use client";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const ExperienciaClientePage = () => {
  const { setExperienciaCliente } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setExperienciaCliente}
  />;
};

export default ExperienciaClientePage;

