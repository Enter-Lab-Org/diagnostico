"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { usePorcentajeAvancesStore } from "../../store/porcentajeAvances";
import { Cuestionario } from "../components/Cuestionario";
import { preguntas } from "./preguntas";

const PresenciaRedesSocialesPage = () => {
  const { setPresenciaRedesSociales } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setPresenciaRedesSociales}
    nextRoute={APP_ROUTES.CUENTIONARIOS}
  />;
};

export default PresenciaRedesSocialesPage;

