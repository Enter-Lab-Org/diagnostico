"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const ProcesosAutomatizacionPage = () => {
  const { setProcesosAutomatizacion } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setProcesosAutomatizacion}
    nextRoute={APP_ROUTES.CUESTIONARIO_DATOS_ANALITICA}
  />;
};

export default ProcesosAutomatizacionPage;

