"use client";

import { APP_ROUTES } from "@/app/router/app.routes";
import { usePathname } from "next/navigation";
import { StatusSidebar } from "./components/StatusSidebar";

const cuestionariosData: Record<string, { title: string; description: string }> = {
  [APP_ROUTES.CUESTIONARIO_CULTURA_DIGITAL]: {
    title: "Cultura Digital Empresarial",
    description: "Evalúa el nivel de adopción y madurez de la cultura digital dentro de la organización, incluyendo la transformación de mentalidades, procesos y prácticas hacia la digitalización."
  },
  [APP_ROUTES.CUESTIONARIO_TECNOLOGIA_INFRAESTRUCTURA]: {
    title: "Tecnología e Infraestructura",
    description: "Analiza las capacidades tecnológicas, infraestructura digital y recursos técnicos disponibles para soportar las operaciones y estrategias digitales de la empresa."
  },
  [APP_ROUTES.CUESTIONARIO_PROCESOS_AUTOMATIZACION]: {
    title: "Procesos y Automatización",
    description: "Mide el grado de documentación, estandarización y automatización de los procesos operativos, así como la eficiencia y calidad de los mismos."
  },
  [APP_ROUTES.CUESTIONARIO_DATOS_ANALITICA]: {
    title: "Datos y Analítica",
    description: "Examina la estrategia de gestión de datos, calidad de la información, capacidades analíticas y uso de datos para la toma de decisiones estratégicas."
  },
  [APP_ROUTES.CUESTIONARIO_EXPERIENCIA_CLIENTE]: {
    title: "Experiencia del Cliente",
    description: "Evalúa la claridad de la propuesta de valor, consistencia omnicanal, medición de satisfacción y preparación de los equipos para gestionar la experiencia del cliente."
  },
  [APP_ROUTES.CUESTIONARIO_GOBERNANZA_SOSTENIBILIDAD]: {
    title: "Gobernanza y Sostenibilidad Digital",
    description: "Analiza los marcos de gobernanza digital, políticas de sostenibilidad, responsabilidad social y prácticas éticas en el uso de tecnologías digitales."
  },
  [APP_ROUTES.CUESTIONARIO_PRESENCIA_REDES]: {
    title: "Presencia en Internet y Redes Sociales",
    description: "Mide la estrategia digital, presencia online, gestión de redes sociales y capacidad de generar engagement y valor a través de canales digitales."
  },
  [APP_ROUTES.CUESTIONARIO_CALIDAD_CIBERSEGURIDAD]: {
    title: "Gestión de la Calidad y Ciberseguridad",
    description: "Evalúa el sistema de gestión de calidad, políticas de ciberseguridad, gestión de vulnerabilidades y capacidad de respuesta ante incidentes de seguridad."
  }
};

const CuestionarioLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const cuestionario = cuestionariosData[pathname] || { 
    title: "Cuestionario", 
    description: "Selecciona una de las opciones disponibles" 
  };

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
            <h3 className="cuestionariosTitle mt-4">{cuestionario.title}</h3>
            <p className="cuestionariosDesc mt-4 mb-2 ">{cuestionario.description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuestionarioLayout;
