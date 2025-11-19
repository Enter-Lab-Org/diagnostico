"use client";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const PresenciaRedesSocialesPage = () => {
  const { setPresenciaRedesSociales } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setPresenciaRedesSociales}
  />;
};

export default PresenciaRedesSocialesPage;

