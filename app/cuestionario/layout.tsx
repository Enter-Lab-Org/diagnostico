const CuestionarioLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col rounded-xl shadow-xl w-full mx-auto p-12 gap-5 text-gray-500">
            <h1 className="text-2xl font-extrabold text-center text-gray-400">Ejes de diagnóstico</h1>
            {children}
        </div>
    );
}

export default CuestionarioLayout;
