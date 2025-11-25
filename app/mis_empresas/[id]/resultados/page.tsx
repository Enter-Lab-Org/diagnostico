"use client";

import { SectionCuestionario } from "./components/SectionCuestionario";
import { ejemploMock } from "./ejemplo.mock";
import { ResultadosCuestionarios } from "./types";


const ResultadosPage = ({ params }: { params: { id: string } }) => {
    const data = ejemploMock;
    return (
        <div>
            {data.map((cuestionario: ResultadosCuestionarios, idx: number) => (
                <SectionCuestionario
                    key={cuestionario.id}
                    objetoCalificacion={cuestionario.objetoCalificacion}
                    title={cuestionario.title}
                    color={cuestionario.color}
                    percentage={cuestionario.percentage}
                    icon={cuestionario.icon}
                    description={cuestionario.description}
                    id={cuestionario.id}
                />
            ))}
        </div>
    );
};

export default ResultadosPage;

