"use client";

import { API_BASE_URL } from "@/app/lib/api/config";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SectionCuestionario } from "./components/SectionCuestionario";
import { ResultadosCuestionarios, ResultadosResponse } from "./types";

const ResultadosPage = () => {
    const params = useParams<{ id: string | string[] }>();
    const empresaId = Array.isArray(params?.id) ? params.id[0] : params?.id;

    const [data, setData] = useState<ResultadosCuestionarios[]>([]);
    const [resumenGlobal, setResumenGlobal] = useState<Pick<
        ResultadosResponse,
        "nivelGlobalCorto" | "puntajeTotal" | "descripcionNivelGlobal" | "colorNivelGlobal"
    > | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!empresaId) return;

        const fetchResultados = async () => {
            try {
                setLoading(true);
                const res = await fetch(
                    `${API_BASE_URL}/diagnosticos/empresa/${empresaId}/resultados`
                );
                if (!res.ok) {
                    throw new Error(`Error al obtener resultados: ${res.status}`);
                }
                const json: ResultadosResponse = await res.json();
                setData(json.cuestionarios);
                setResumenGlobal({
                    nivelGlobalCorto: json.nivelGlobalCorto,
                    puntajeTotal: json.puntajeTotal,
                    descripcionNivelGlobal: json.descripcionNivelGlobal,
                    colorNivelGlobal: json.colorNivelGlobal,
                });
            } catch (err) {
                setError(err instanceof Error ? err.message : "Error desconocido");
            } finally {
                setLoading(false);
            }
        };

        fetchResultados();
    }, [empresaId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <p className="text-secondary-purple text-lg">Cargando resultados...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center py-20">
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6">
            {resumenGlobal && (
                <div className="rounded-xl border-2 border-primary-purple bg-white p-6 flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <span className="text-secondary-purple font-bold text-lg">
                            Nivel global de digitalización:
                        </span>
                        <span
                            className="px-4 py-1 rounded-full text-white font-semibold text-base"
                            style={{ backgroundColor: resumenGlobal.colorNivelGlobal }}
                        >
                            {resumenGlobal.nivelGlobalCorto}
                        </span>
                        <span className="text-secondary-purple font-bold text-2xl ml-2">
                            {resumenGlobal.puntajeTotal}%
                        </span>
                    </div>
                    <p className="textLight textGray text-sm max-w-3xl">
                        {resumenGlobal.descripcionNivelGlobal}
                    </p>
                </div>
            )}

            {data.map((cuestionario: ResultadosCuestionarios) => (
                <SectionCuestionario
                    key={cuestionario.id}
                    objetoCalificacion={cuestionario.objetoCalificacion}
                    title={cuestionario.title}
                    color={cuestionario.color}
                    percentage={cuestionario.percentage}
                    icon={cuestionario.icon}
                    description={cuestionario.description}
                    nivel={cuestionario.nivel}
                    nivelCorto={cuestionario.nivelCorto}
                    colorHex={cuestionario.colorHex}
                    interpretacion={cuestionario.interpretacion}
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
