"use client";

import { calculatePercentage } from "@/app/helpers";
import { useMemo } from "react";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";

interface StatusItem {
    id: string;
    name: string;
    percentage?: number;
    isActive?: boolean;
}

export const StatusSidebar = () => {
    const {
        calidad_ciberseguridad,
        cultura_digital,
        datos_analitica,
        experiencia_cliente,
        gobernanza_sostenibilidad,
        presencia_redes_sociales,
        procesos_automatizacion,
        tecnologia_infraestructura
    } = usePorcentajeAvancesStore();

    const total = useMemo(() =>
        calculatePercentage(cultura_digital, 100) + calculatePercentage(tecnologia_infraestructura, 100) + calculatePercentage(procesos_automatizacion, 100) + calculatePercentage(datos_analitica, 100) + calculatePercentage(experiencia_cliente, 100) + calculatePercentage(gobernanza_sostenibilidad, 100) + calculatePercentage(presencia_redes_sociales, 100) + calculatePercentage(calidad_ciberseguridad, 100),
        [
            cultura_digital,
            tecnologia_infraestructura,
            procesos_automatizacion,
            datos_analitica,
            experiencia_cliente,
            gobernanza_sostenibilidad,
            presencia_redes_sociales,
            calidad_ciberseguridad
        ]);

    const statusItems: StatusItem[] = [
        { id: "1", name: "Cultura Digital Empresarial", percentage: cultura_digital, isActive: true },
        { id: "2", name: "Tecnología e infraestructura", percentage: tecnologia_infraestructura },
        { id: "3", name: "Procesos y Automatización", percentage: procesos_automatizacion },
        { id: "4", name: "Datos y Analítica", percentage: datos_analitica },
        { id: "5", name: "Experiencia del Cliente", percentage: experiencia_cliente },
        { id: "6", name: "Gobernanza y sostenibilidad digital", percentage: gobernanza_sostenibilidad },
        { id: "7", name: "Presencia en Redes Sociales", percentage: presencia_redes_sociales },
        { id: "8", name: "Gestión de la Calidad y Ciberseguridad", percentage: calidad_ciberseguridad },
    ];
    return (
        <div className="flex flex-col w-fit">
            <span className="text-sm text-[#7B549E] ml-4">Total: {total}%</span>
            {statusItems.map((item, index) => (
                <div key={item.id} className="flex items-center relative">
                    {/* Vertical line connecting dots */}
                    {index < statusItems.length - 1 && (
                        <div
                            className={`absolute left-[7px] top-[14px] w-0.5 h-8 ${item.isActive ? 'bg-[#66CCFF]' : 'bg-gray-300'
                                }`}
                            style={{ zIndex: 0 }}
                        />
                    )}

                    {/* Dot */}
                    <div
                        className={`relative z-10 w-4 h-4 rounded-full ${item.isActive
                            ? 'bg-[#66CCFF]'
                            : 'bg-gray-300'
                            }`}
                    />

                    {/* Text and percentage */}
                    <div className="ml-4 flex-1 flex items-center justify-between">
                        <span
                            className={`text-sm ${item.isActive
                                ? 'text-[#7B549E] underline font-medium'
                                : 'text-[#7B549E] opacity-60'
                                }`}
                        >
                            {item.name}
                        </span>
                        {item.isActive && item.percentage !== undefined && (
                            <span className="text-sm text-[#7B549E] ml-4">
                                {item.percentage}%
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

