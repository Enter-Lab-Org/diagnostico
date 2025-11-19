import { StatusSidebar } from "./components/StatusSidebar";

const CuestionarioLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col rounded-xl shadow-xl w-full mx-auto p-12 gap-5 text-gray-500 bg-white">
            <h1 className="text-2xl font-extrabold text-center text-gray-400">Ejes de diagnóstico</h1>
            <button className="text-gray-300 text-sm border-gray-300 border-2 rounded-xl p-2 text-center">Cerrar cuestionario</button>
            <p className="flex flex-col gap-5">Selecciona una de las opciones disponibles</p>
            <div className="flex flex-row gap-5">
                <StatusSidebar />
                {children}
            </div>
        </div>
    );
}

export default CuestionarioLayout;
