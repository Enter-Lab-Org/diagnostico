"use client";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const DatosAnaliticaPage = () => {
  const { setDatosAnalitica } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setDatosAnalitica}
  />;
};

export default DatosAnaliticaPage;

