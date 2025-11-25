"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { usePorcentajeAvancesStore } from "../../store/porcentajeAvances";
import { Cuestionario } from "../components/Cuestionario";
import { preguntas } from "./preguntas";

const ExperienciaClientePage = () => {
  const { setExperienciaCliente } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setExperienciaCliente}
    nextRoute={APP_ROUTES.CUESTIONARIO_GOBERNANZA_SOSTENIBILIDAD}
  />;
};

export default ExperienciaClientePage;

