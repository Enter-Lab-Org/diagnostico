import { Question } from "./components/Question";
import { preguntas } from "./cultura_digital/preguntas";

const PageCuestionario = () => (
    <div className="flex flex-col bg-[#fbfbfb] rounded-xl p-5 shadow-[4px_4px_8px_0_rgba(0,0,0,0.1)] w-full">
        <h1 className="text-primary-purple text-2xl font-extrabold text-center M">Cultura Digital Empresarial</h1>
        <p className="text-gray-400 text-sm">El cambio empieza por las personas.</p>
        <p className="text-gray-400 text-sm italic">
            Un liderazgo digital implica fomentar aprendizaje y desarrollo continuo, trabajo colaborativo en la innovación.
        </p>
        <div className="flex flex-col gap-5">
            {preguntas.map((pregunta, index) => (
                <Question key={pregunta.question + index} question={pregunta.question} answers={pregunta.answers} />
            ))}
        </div>

    </div>
);

export default PageCuestionario;