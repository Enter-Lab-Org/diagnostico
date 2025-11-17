import Link from "next/link";
import { GradientContainer } from "./common/components/GradientContainer";
import { EjesCard } from "./iniciar-diagnostico/components/EjesCard";
import { APP_ROUTES } from "./router/app.routes";

const ejes = [
  {
    content: "Cultura digital empresarial",
    imageUrl: "assets/cultura_icon.svg"
  },
  {
    content: "Tecnologia e infraestructura",
    imageUrl: "assets/tecnologia_icon.svg"
  },
  {
    content: "Procesos y Automatización",
    imageUrl: "assets/procesos_icon.svg"
  },
  {
    content: "Datos y Analítica",
    imageUrl: "assets/datos_icon.svg"
  },
  {
    content: "Experiencia del Cliente",
    imageUrl: "assets/experiencia_icon.svg"
  },
  {
    content: "Gobernanza y sostenibilidad digital",
    imageUrl: "assets/gobernanza_icon.svg"
  },
  {
    content: "Presencia en Internet y redes sociales",
    imageUrl: "assets/presencia_icon.svg"
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
