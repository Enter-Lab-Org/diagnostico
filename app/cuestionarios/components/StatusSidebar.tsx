"use client";

import { calculatePercentage } from "@/app/helpers";
import { useMemo } from "react";
import { usePorcentajeAvancesStore } from "../store/porcentajeAvances";

interface StatusItem {
    id: string;
    name: string;
    percentage?: number;
    status?: StatusEnum;
}
enum StatusEnum {
    COMPLETED = "COMPLETED",
    IN_PROGRESS = "IN_PROGRESS",
    NOT_STARTED = "NOT_STARTED",
}

const cuestionariosConfig = [
    { id: "1", name: "Cultura Digital Empresarial", key: "cultura_digital" as const },
    { id: "2", name: "Tecnología e infraestructura", key: "tecnologia_infraestructura" as const },
    { id: "3", name: "Procesos y Automatización", key: "procesos_automatizacion" as const },
    { id: "4", name: "Datos y Analítica", key: "datos_analitica" as const },
    { id: "5", name: "Experiencia del Cliente", key: "experiencia_cliente" as const },
    { id: "6", name: "Gobernanza y sostenibilidad digital", key: "gobernanza_sostenibilidad" as const },
    { id: "7", name: "Presencia en Redes Sociales", key: "presencia_redes_sociales" as const },
    { id: "8", name: "Gestión de la Calidad y Ciberseguridad", key: "calidad_ciberseguridad" as const },
];

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

    const porcentajesMap = {
        cultura_digital,
        tecnologia_infraestructura,
        procesos_automatizacion,
        datos_analitica,
        experiencia_cliente,
        gobernanza_sostenibilidad,
        presencia_redes_sociales,
        calidad_ciberseguridad
    };

    const getStatusFromPercentage = (percentage: number): StatusEnum => {
        if (percentage === 100) {
            return StatusEnum.COMPLETED;
        } else if (percentage > 0) {
            return StatusEnum.IN_PROGRESS;
        }
        return StatusEnum.NOT_STARTED;
    };

    const statusItems = useMemo(() => {
        return cuestionariosConfig.map((config) => {
            const percentage = porcentajesMap[config.key];
            const status = getStatusFromPercentage(percentage);
            
            return {
                id: config.id,
                name: config.name,
                percentage,
                status
            };
        });
    }, [
        cultura_digital,
        tecnologia_infraestructura,
        procesos_automatizacion,
        datos_analitica,
        experiencia_cliente,
        gobernanza_sostenibilidad,
        presencia_redes_sociales,
        calidad_ciberseguridad
    ]);

    const total = useMemo(() => {
        const porcentajes = [
            calidad_ciberseguridad,
            cultura_digital,
            datos_analitica,
            experiencia_cliente,
            gobernanza_sostenibilidad,
            presencia_redes_sociales,
            procesos_automatizacion,
            tecnologia_infraestructura
        ];
        const completados = porcentajes.filter(p => p === 100).length;
        return calculatePercentage(completados, 8);
    }, [
        calidad_ciberseguridad,
        cultura_digital,
        datos_analitica,
        experiencia_cliente,
        gobernanza_sostenibilidad,
        presencia_redes_sociales,
        procesos_automatizacion,
        tecnologia_infraestructura
    ]);


    const getStatusStyle = (status?: StatusEnum) => {
        switch (status) {
            case StatusEnum.COMPLETED:
                return 'bg-[#30e693]';
            case StatusEnum.IN_PROGRESS:
                return 'bg-[#66CCFF]';
            case StatusEnum.NOT_STARTED:
                return 'bg-gray-300';
        }
    }
    return (
        <div className="flex flex-col w-fit">
            <span className="text-sm text-[#7B549E] ml-4">Total: {total}%</span>
            {statusItems.map((item, index) => (
                <div key={item.id} className="flex items-center relative">
                    {/* Vertical line connecting dots */}
                    {index < statusItems.length - 1 && (
                        <div
                            className={`absolute left-[7px] top-[14px] w-0.5 h-8 ${getStatusStyle(item.status)
                                }`}
                            style={{ zIndex: 0 }}
                        />
                    )}

                    {/* Dot */}
                    <div
                        className={`relative z-10 w-4 h-4 rounded-full ${getStatusStyle(item.status)}`}

                    />

                    {/* Text and percentage */}
                    <div className="ml-4 flex-1 flex items-center justify-between">
                        <span
                            className={`text-sm ${item.status
                                ? 'text-[#7B549E] underline font-medium'
                                : 'text-[#7B549E] opacity-60'
                                }`}
                        >
                            {item.name}
                        </span>
                        {item.percentage !== undefined && (
                            <span className="text-sm text-[#7B549E] ml-4">
                                {Math.round(item.percentage)}%
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

