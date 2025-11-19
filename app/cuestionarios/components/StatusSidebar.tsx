"use client";

import { calculatePercentage } from "@/app/helpers";
import { APP_ROUTES } from "@/app/router/app.routes";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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

const initialStateStatusItems: StatusItem[] = [
    { id: "1", name: "Cultura Digital Empresarial", percentage: 0, status: StatusEnum.COMPLETED },
    { id: "2", name: "Tecnología e infraestructura", percentage: 0, status: StatusEnum.IN_PROGRESS },
    { id: "3", name: "Procesos y Automatización", percentage: 0, status: StatusEnum.NOT_STARTED },
    { id: "4", name: "Datos y Analítica", percentage: 0, status: StatusEnum.NOT_STARTED },
    { id: "5", name: "Experiencia del Cliente", percentage: 0, status: StatusEnum.NOT_STARTED },
    { id: "6", name: "Gobernanza y sostenibilidad digital", percentage: 0, status: StatusEnum.NOT_STARTED },
    { id: "7", name: "Presencia en Redes Sociales", percentage: 0, status: StatusEnum.NOT_STARTED },
    { id: "8", name: "Gestión de la Calidad y Ciberseguridad", percentage: 0, status: StatusEnum.NOT_STARTED },
];

export const StatusSidebar = () => {
    const storeSeccionesCompletadas = usePorcentajeAvancesStore();

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
        calculatePercentage(8, 8), []);

    const [statusItems, setStatusItems] = useState<StatusItem[]>(initialStateStatusItems);


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
                        {item.status && item.percentage !== undefined && (
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

