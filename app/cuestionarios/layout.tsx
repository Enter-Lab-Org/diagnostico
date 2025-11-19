import { StatusSidebar } from "./components/StatusSidebar";

const CuestionarioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col rounded-xl shadow-xl w-full mx-auto p-12 gap-5 text-gray-500 bg-white">
      <div className="grid grid-cols-6 gap-4">
        <h1 className="cardsTitle col-span-4 col-start-2 text-2xl font-extrabold text-center text-gray-400">Ejes de diagnóstico</h1>
        <button className="text-gray-300 text-sm border-gray-300 border-2 rounded-xl text-center">Cerrar cuestionario</button>
      </div>
      <div className="flex flex-row gap-5">
        <StatusSidebar />
        <div className="flex flex-col">
          <p className="mb-6 textGray textRegular">Selecciona una de las opciones disponibles</p>
          <div className="boxCuestionarios p-4">
            <h3 className="cuestionariosTitle mt-4">--Nombre del cuestionario en cuestion--</h3>
            <p className="cuestionariosDesc mt-4 mb-2 ">--Descripcion del cuestionario, ya esta en el excel--</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuestionarioLayout;
