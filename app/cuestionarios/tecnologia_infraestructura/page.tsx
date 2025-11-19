"use client";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const TecnologiaInfraestructuraPage = () => {
  const { setTecnologiaInfraestructura } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setTecnologiaInfraestructura}
  />;
};

export default TecnologiaInfraestructuraPage;

