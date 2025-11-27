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
    <div className="flex flex-col px-6 md:px-24">
      <h1 className="mainTitle">Autodiagnóstico</h1>
    </div>
    <div className="flex flex-col md:flex-row md:gap-4 my-5 px-6 md:px-24">
      <div className="flex flex-col md:gap-2 order-2 md:order-1">
        <p className="greyText textItalic">
          <span className="textRegular"><strong>Bienvenido a EnterLab</strong></span> donde la tecnología de última generación y la innovación se unen para impulsar el crecimiento y la transformación de empresas, gobiernos e instituciones.<br/>
          Descubre cómo podemos ayudarte a alcanzar tus objetivos mediante soluciones personalizadas y capacitación de vanguardia.
        </p>
      </div>
      <div className="flex flex-col gap-2 order-1 md:order-2">
        <img className="w-5xl" src="assets/mesa_de_trabajo_1.svg" alt="Autodiagnóstico" />
      </div>
    </div>
    <GradientContainer>
      <h2 className="text-white text-2xl font-bold text-center boxTitle">Ejes de diagnóstico digital</h2>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 justify-center">
        {ejes.map((ejes) => (
          <EjesCard key={ejes.imageUrl} content={ejes.content} imageUrl={ejes.imageUrl} />
        ))}
      </div>
    </GradientContainer>
    <div className="flex flex-row gap-4 justify-center my-5">
      {/* TODO: Agregar context para revisar si el usuario está logueado */}
      <Link href={APP_ROUTES.LOGIN} className="text-white  p-2 rounded-lg px-5 font-extrabold text-center botonDiagnostico bounceButton">
        Iniciar diagnóstico
      </Link>
    </div>`
  </>
}
