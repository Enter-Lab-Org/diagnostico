"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { usePorcentajeAvancesStore } from "../../store/porcentajeAvances";
import { Cuestionario } from "../components/Cuestionario";
import { preguntas } from "./preguntas";

const PageCulturaDigital = () => {
    const { setCulturaDigital } = usePorcentajeAvancesStore();
    return (
        <Cuestionario
            preguntas={preguntas}
            setPorcentajeAvances={setCulturaDigital}
            nextRoute={APP_ROUTES.CUESTIONARIO_TECNOLOGIA_INFRAESTRUCTURA}
        />
    );
}

export default PageCulturaDigital;