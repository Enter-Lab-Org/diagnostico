import { ObjetoCalificacion } from "../types";

interface AccordionProps {
    item: ObjetoCalificacion;
    toggleAccordion: (id: number) => void;
    getColorClass: (color: string) => string;
    expandedItems: number[];
}

export const Accordeon = ({ item, toggleAccordion, getColorClass, expandedItems }: AccordionProps) => {
    return (
        <div
            key={item.id}
            className="border border-primary-purple rounded-lg bg-white"
        >
            <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-4 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <div
                        className={`w-3 h-3 rounded-full ${getColorClass(item.color)}`}
                    ></div>
                    <span className="textRegular text-secondary-purple font-medium">
                        {item.title}
                    </span>
                </div>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${expandedItems.includes(item.id) ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {expandedItems.includes(item.id) && (
                <div className="px-4 pb-4 pt-2 border border-gray-100">
                    <div className="flex flex-col gap-4 mt-4">
                        <p className="textLight textGray text-sm leading-relaxed"
                        >
                            {item.description}
                        </p>

                    </div>
                </div>
            )}
        </div>
    );
}

