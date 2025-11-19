import { Cuestionario } from "../components/Cuestionario";
import { preguntas } from "./preguntas";

const PageCulturaDigital = () => {
    return (
        <Cuestionario preguntas={preguntas} />
    );
}

export default PageCulturaDigital;