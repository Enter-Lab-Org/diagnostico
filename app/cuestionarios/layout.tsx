"use client";

import { ProtectedRoute } from "@/app/common/components/ProtectedRoute";
import { empresasService } from "@/app/lib/api/empresas.service";
import { APP_ROUTES } from "@/app/router/app.routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
    description: "Seleccionar herramientas escalables, seguras y acordes al tamaño de la empresa.Adoptar soluciones en la nube reduce costos y mejora la accesibilidad."
  },
  [APP_ROUTES.CUESTIONARIO_DATOS_ANALITICA]: {
    title: "Datos y Analítica",
    description: "La automatización reduce errores y libera tiempo para tareas estratégicas.Herramientas accesibles: Google Workspace, Airtable, Power Automate, Trello."
  },
  [APP_ROUTES.CUESTIONARIO_EXPERIENCIA_CLIENTE]: {
    title: "Experiencia del Cliente",
    description: "Los datos son el nuevo capital empresarial.Analizarlos permite tomar decisiones basadas en evidencia."
  },
  [APP_ROUTES.CUESTIONARIO_GOBERNANZA_SOSTENIBILIDAD]: {
    title: "Gobernanza y Sostenibilidad Digital",
    description: "El cliente digital busca rapidez, claridad y atención personalizada.Analizar la experiencia del usuario (UX) permite fidelizar y diferenciarse."
  },
  [APP_ROUTES.CUESTIONARIO_PRESENCIA_REDES]: {
    title: "Presencia en Internet y Redes Sociales",
    description: "La transformación digital debe sostenerse con políticas internas, métricas claras y ética en el uso de datos."
  }
};

const CuestionarioLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [empresaNombre, setEmpresaNombre] = useState<string>("");

  useEffect(() => {
    const loadEmpresa = async () => {
      try {
        const empresaId = localStorage.getItem("empresaId");
        if (!empresaId) {
          setEmpresaNombre("Empresa no seleccionada");
          return;
        }

        const empresa = await empresasService.findOne(empresaId);
        setEmpresaNombre(empresa.razonSocial);
      } catch (error) {
        console.error("Error al cargar la empresa seleccionada:", error);
        setEmpresaNombre("Empresa no encontrada");
      }
    };

    loadEmpresa();
  }, []);

  const cuestionario = cuestionariosData[pathname] || {
    title: "Cuestionario",
    description: "Selecciona una de las opciones disponibles"
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col rounded-xl shadow-xl w-full mx-auto p-12 gap-5 text-gray-500 bg-white">
        <div className="grid grid-cols-6 gap-4 items-center justify-center">
          <h1 className="order-2 md:order-1 cardsTitle col-span-6 md:col-span-4 md:col-start-2 text-2xl font-extrabold text-center text-gray-400">Ejes de diagnóstico</h1>
          <Link href={APP_ROUTES.INICIAR_DIAGNOSTICO} className="order-1 md:order-2 col-span-6 md:col-span-1 text-gray-300 text-sm border-gray-300 border-2 rounded-xl text-center align-middle justify-center p-2 botnCerrarCuestionario">Cerrar cuestionario</Link>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span className="text-gray-400">Empresa</span>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-gray-700">{empresaNombre || "Cargando empresa..."}</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-600">{cuestionario.title}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
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
    </ProtectedRoute>
  );
}

export default CuestionarioLayout;
