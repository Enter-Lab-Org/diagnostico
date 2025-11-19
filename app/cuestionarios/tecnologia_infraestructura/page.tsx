"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const TecnologiaInfraestructuraPage = () => {
  const { setTecnologiaInfraestructura } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setTecnologiaInfraestructura}
    nextRoute={APP_ROUTES.CUESTIONARIO_PROCESOS_AUTOMATIZACION}
  />;
};

export default TecnologiaInfraestructuraPage;

