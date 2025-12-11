"use client";

import { API_BASE_URL } from "@/app/lib/api/config";
import { useParams } from "next/navigation";
import { SectionCuestionario } from "./components/SectionCuestionario";
import { ejemploMock } from "./ejemplo.mock";
import { ResultadosCuestionarios } from "./types";

const ResultadosPage = () => {
    const params = useParams<{ id: string | string[] }>();
    const empresaId = Array.isArray(params?.id) ? params.id[0] : params?.id;
    const data = ejemploMock;

    return (
        <div className="flex flex-col gap-6">
            {data.map((cuestionario: ResultadosCuestionarios) => (
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

            <div className="flex justify-center py-6">
                <a
                    href={`${API_BASE_URL}/diagnosticos/empresa/${empresaId}/pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#7c4fa3] px-8 py-3 text-lg font-semibold text-white shadow hover:bg-[#6d4392] focus:outline-none focus:ring-2 focus:ring-[#7c4fa3] focus:ring-offset-2"
                >
                    Imprimir diagnóstico
                </a>
            </div>
        </div>
    );
};

export default ResultadosPage;

