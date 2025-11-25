"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { usePorcentajeAvancesStore } from "../../store/porcentajeAvances";
import { Cuestionario } from "../components/Cuestionario";
import { preguntas } from "./preguntas";

const GobernanzaSostenibilidadPage = () => {
  const { setGobernanzaSostenibilidad } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setGobernanzaSostenibilidad}
    nextRoute={APP_ROUTES.CUESTIONARIO_PRESENCIA_REDES}
  />;
};

export default GobernanzaSostenibilidadPage;

