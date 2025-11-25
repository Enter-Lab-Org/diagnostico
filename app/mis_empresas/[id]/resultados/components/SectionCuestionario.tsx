import { useState } from "react";
import { Accordeon } from "./Accordeon";
import { ResultadosCuestionarios } from "../types";



export const SectionCuestionario = ({ objetoCalificacion, title, color, percentage, icon, description }: ResultadosCuestionarios) => {

    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    const toggleAccordion = (id: number) => {
        setExpandedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const getColorClass = (color: string) => {
        const colorClass = {
            "yellow": "bg-yellow-400",
            "green": "bg-green-500",
            "orange": "bg-orange-500",
        } as const;

        return colorClass[color as keyof typeof colorClass] || "bg-yellow-400";
    };

    return (
        <div className="flex flex-col gap-8 py-8">
            <hr className="border-primary-purple border-2" />
            {/* Header Section with Progress and Icon */}
            <div className="flex items-start gap-6">
                {/* Icon Container */}
                <div className="shrink-0">
                    <div className="w-24 h-24 rounded-lg border-2 border-primary-purple flex items-center justify-center bg-white">
                        <img className="shadow-sm" src={`/assets/${icon}`} alt="tecnologia_icon" />
                    </div>
                </div>

                {/* Progress and Title Section */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-4 h-4 rounded-full ${getColorClass(color)}`}></div>
                        <span className="text-4xl font-bold text-secondary-purple">{percentage}%</span>
                    </div>
                    <h1 className="mainTitle mb-4">{title}</h1>
                    <p className="textLight textGray text-base max-w-3xl">
                        {description}
                    </p>
                </div>
            </div>

            {/* Accordion Items */}
            <div className="flex flex-col gap-4">
                {objetoCalificacion.map((item) => (
                    <Accordeon key={item.id}
                        item={item}
                        toggleAccordion={toggleAccordion}
                        getColorClass={getColorClass}
                        expandedItems={expandedItems}
                    />

                ))}
            </div>
        </div>
    );
}