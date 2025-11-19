"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const PresenciaRedesSocialesPage = () => {
  const { setPresenciaRedesSociales } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setPresenciaRedesSociales}
    nextRoute={APP_ROUTES.CUESTIONARIO_CALIDAD_CIBERSEGURIDAD}
  />;
};

export default PresenciaRedesSocialesPage;

