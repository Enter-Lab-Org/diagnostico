"use client";
interface StatusItem {
    id: string;
    name: string;
    percentage?: number;
    isActive?: boolean;
}

const statusItems: StatusItem[] = [
    { id: "1", name: "Cultura Digital Empresarial", percentage: 0, isActive: true },
    { id: "2", name: "Tecnología e infraestructura" },
    { id: "3", name: "Procesos y Automatización" },
    { id: "4", name: "Datos y Analítica" },
    { id: "5", name: "Experiencia del Cliente" },
    { id: "6", name: "Gobernanza y sostenibilidad digital" },
    { id: "7", name: "Presencia en Redes Sociales" },
    { id: "8", name: "Gestión de la Calidad y Ciberseguridad" },
];

export const StatusSidebar = () => {
    return (
        <div className="flex flex-col w-fit">
            {statusItems.map((item, index) => (
                <div key={item.id} className="flex items-center relative">
                    {/* Vertical line connecting dots */}
                    {index < statusItems.length - 1 && (
                        <div 
                            className={`absolute left-[7px] top-[14px] w-0.5 h-8 ${
                                item.isActive ? 'bg-[#66CCFF]' : 'bg-gray-300'
                            }`}
                            style={{ zIndex: 0 }}
                        />
                    )}
                    
                    {/* Dot */}
                    <div 
                        className={`relative z-10 w-4 h-4 rounded-full ${
                            item.isActive 
                                ? 'bg-[#66CCFF]' 
                                : 'bg-gray-300'
                        }`}
                    />
                    
                    {/* Text and percentage */}
                    <div className="ml-4 flex-1 flex items-center justify-between">
                        <span 
                            className={`text-sm ${
                                item.isActive 
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

