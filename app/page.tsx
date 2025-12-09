import Link from "next/link";
import { GradientContainer } from "./common/components/GradientContainer";
import { EjesCard } from "./iniciar-diagnostico/components/EjesCard";
import { APP_ROUTES } from "./router/app.routes";

const ejes = [
  {
    content: "Cultura digital empresarial",
    imageUrl: "assets/cultura_icon.svg",
    tooltipText: "Evalúa si el cambio digital está impulsado por las personas, con liderazgo que promueve aprendizaje continuo, colaboración y confianza para innovar."
  },
  {
    content: "Tecnologia e infraestructura",
    imageUrl: "assets/tecnologia_icon.svg",
    tooltipText: "Mide qué tan adecuadas son las herramientas y la infraestructura (seguras, escalables y acordes al tamaño), así como el aprovechamiento de soluciones en la nube para mejorar accesibilidad y costos."
  },
  {
    content: "Procesos y Automatización",
    imageUrl: "assets/procesos_icon.svg",
    tooltipText: "Revisa el nivel de estandarización y automatización de procesos para reducir errores, ganar eficiencia y liberar tiempo para tareas estratégicas. Herramientas accesibles: Google Workspace, Airtable, Power Automate, Trello."
  },
  {
    content: "Datos y Analítica",
    imageUrl: "assets/datos_icon.svg",
    tooltipText: "Analiza la capacidad de la empresa para capturar, organizar y usar datos de forma útil, convirtiéndolos en decisiones basadas en evidencia."
  },
  {
    content: "Experiencia del Cliente",
    imageUrl: "assets/experiencia_icon.svg",
    tooltipText: "Evalúa la calidad de la experiencia del usuario/cliente en canales digitales: rapidez, claridad, consistencia y personalización para fidelizar y diferenciarse."
  },
  {
    content: "Gobernanza y sostenibilidad digital",
    imageUrl: "assets/gobernanza_icon.svg",
    tooltipText: "Mide si existen políticas, métricas y prácticas claras para gestionar lo digital con ética, responsabilidad y buen uso de los datos."
  },
  {
    content: "Presencia en Internet y redes sociales",
    imageUrl: "assets/presencia_icon.svg",
    tooltipText: "Revisa la solidez de la estrategia en redes: objetivos, coherencia de contenidos, gestión de comunidad y calidad de las interacciones."
  },


]

export default function IniciarDiagnostico() {
  return <>
    <div className="flex flex-col px-6 md:px-24">
      <h1 className="mainTitle">Autodiagnóstico de madurez digital de empresas</h1>
    </div>
    <div className="flex flex-col md:flex-row md:gap-4 my-5 px-6 md:px-24">
      <div className="flex md:w-7/12 flex-col md:gap-2 order-2 md:order-1">
        <p className="greyText text-justify textLight">
          <span className="textRegular"></span>
          Bienvenido a esta plataforma en la que a través de preguntas sencillas, divididas en 7 ejes, podrás conocer cuál es el estado de digitalización de tu empresa.<br/><br/>
          El objetivo de este autodiagnóstico es que puedas conocer dónde estás actualmente y algunas recomendaciones estratégicas de cómo incluir tecnología en tu empresa. Si quieres conocer más sobre lo que es la transformación digital y cómo integrarla, conoce nuestra Guía básica de transformación digital para empresas aquí (link a la página de descarga de la guía).<br/><br/>
          Cada una de los 7 ejes contiene preguntas sencillas, <strong>que no te tomarán más de 15 </strong>, que podrán orientarte para conocer más sobre el proceso de transformación digital en tu empresa.<br/><br/>
          ¿Cómo funciona el autodiagnóstico?<br/>
          Una vez que registres tu empresa de la que quieres conocer el estado de madurez digital, podrás acceder las preguntas y podrás seleccionar solo una respuesta por pregunta, o la que más se acerque a la realidad que vive tu organización.      
        </p>
      </div>
      <div className="flex md:w-5/12 flex-col gap-2 order-1 md:order-2">
        <img className="w-5xl" src="assets/mesa_de_trabajo_1.svg" alt="Autodiagnóstico" />
      </div>
    </div>
    <GradientContainer>
      <h2 className="text-white text-2xl font-bold text-center boxTitle">Ejes de diagnóstico digital</h2>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 justify-center">
        {ejes.map((ejes) => (
          <EjesCard key={ejes.imageUrl} content={ejes.content} imageUrl={ejes.imageUrl} tooltipText={ejes.tooltipText}/>
        ))}
      </div>
    </GradientContainer>
    <div className="flex flex-row gap-4 justify-center my-5">
      {/* TODO: Agregar context para revisar si el usuario está logueado */}
      <Link href={APP_ROUTES.REGISTRO_EMPRESAS} className="text-white  p-2 rounded-lg px-5 font-extrabold text-center botonDiagnostico bounceButton">
        Iniciar Autodiagnóstico
      </Link>
    </div>`
  </>
}
