import Link from "next/link";
import { GradientContainer } from "./common/components/GradientContainer";
import { EjesCard } from "./iniciar-diagnostico/components/EjesCard";
import { APP_ROUTES } from "./router/app.routes";

const ejes = [
  {
    content: "Eje 1",
    imageUrl: "assets/mesa_de_trabajo_3.svg"
  },
  {
    content: "Eje 2",
    imageUrl: "assets/mesa_de_trabajo_4.svg"
  },
  {
    content: "Eje 3",
    imageUrl: "assets/mesa_de_trabajo_5.svg"
  },
  {
    content: "Eje 4",
    imageUrl: "assets/mesa_de_trabajo_6.svg"
  },
  {
    content: "Eje 5",
    imageUrl: "assets/mesa_de_trabajo_7.svg"
  },
  {
    content: "Eje 6",
    imageUrl: "assets/mesa_de_trabajo_8.svg"
  },
  {
    content: "Eje 7",
    imageUrl: "assets/mesa_de_trabajo_9.svg"
  },


]

export default function IniciarDiagnostico() {
  return <>
    <div className="flex flex-row gap-4 my-5 px-24">
      <div className="flex flex-col gap-2">
        <h1>Autodiagnóstico</h1>
        <p>
          Velit nostrud excepteur nulla sit. Et eiusmod adipisicing quis duis irure do fugiat quis duis tempor pariatur ullamco dolor enim. Reprehenderit ullamco tempor amet magna in pariatur ipsum elit pariatur sit dolore.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <img className="w-5xl" src="assets/mesa_de_trabajo_1.svg" alt="Autodiagnóstico" />
      </div>
    </div>
    <GradientContainer>
      <h1 className="text-white text-2xl font-bold text-center">Estos son los ejes que constituyen el cuestionario</h1>
      <div className="grid  grid-cols-5 gap-3">
        {ejes.map((ejes) => (
          <EjesCard key={ejes.imageUrl} content={ejes.content} imageUrl={ejes.imageUrl} />
        ))}
      </div>
    </GradientContainer>
    <div className="flex flex-row gap-4 justify-center my-5">
      {/* TODO: Agregar context para revisar si el usuario está logueado */}
      <Link href={APP_ROUTES.LOGIN} className="text-white  p-2 rounded-lg bg-blue-900 px-5 font-extrabold text-center">
        Iniciar diagnóstico
      </Link>
    </div>`
  </>
}
