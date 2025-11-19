"use client";
import { Cuestionario } from "../components/Cuestionario";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";
import { preguntas } from "./preguntas";

const PageCulturaDigital = () => {
    const { setCulturaDigital } = usePorcentajeAvancesStore();
    return (
        <Cuestionario
            preguntas={preguntas}
            setPorcentajeAvances={setCulturaDigital}
        />
    );
}

export default PageCulturaDigital;