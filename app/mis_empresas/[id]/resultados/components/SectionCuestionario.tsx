import { ResultadosCuestionarios } from "../types";

export const SectionCuestionario = ({ objetoCalificacion, title, color, percentage, icon, description, nivelCorto, colorHex }: ResultadosCuestionarios) => {

    const getColorClass = (color: string) => {
        const colorClass: Record<string, string> = {
            "yellow": "bg-yellow-400",
            "green": "bg-green-500",
            "orange": "bg-orange-500",
            "purple": "bg-purple-400",
        };

        return colorClass[color] || "bg-yellow-400";
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
                        {nivelCorto && (
                            <span
                                className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                                style={{ backgroundColor: colorHex }}
                            >
                                {nivelCorto}
                            </span>
                        )}
                    </div>
                    <h1 className="mainTitle mb-4">{title}</h1>
                    <p className="textLight textGray text-base max-w-3xl">
                        {description}
                    </p>
                </div>
            </div>

            {/* Recommendations List */}
            <ul className="flex flex-col gap-2">
                {objetoCalificacion.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                        <div className={`mt-1.5 w-3 h-3 shrink-0 rounded-full ${getColorClass(item.color)}`} />
                        <span className="textRegular text-secondary-purple">{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
