"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { usePorcentajeAvancesStore } from "../../store/porcentajeAvances";
import { Cuestionario } from "../components/Cuestionario";
import { preguntas } from "./preguntas";

const DatosAnaliticaPage = () => {
  const { setDatosAnalitica } = usePorcentajeAvancesStore();
  return <Cuestionario
    preguntas={preguntas}
    setPorcentajeAvances={setDatosAnalitica}
    nextRoute={APP_ROUTES.CUESTIONARIO_EXPERIENCIA_CLIENTE}
  />;
};

export default DatosAnaliticaPage;

