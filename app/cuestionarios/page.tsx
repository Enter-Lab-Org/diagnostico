"use client";

import { APP_ROUTES } from "@/app/router/app.routes";
import { useSeccionesCompletadasStore } from "@/app/store/seccionesCompletadas";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const cuestionariosConfig = [
  { id: "1", name: "Cultura Digital Empresarial", key: "cultura_digital" as const, route: APP_ROUTES.CUESTIONARIO_CULTURA_DIGITAL },
  { id: "2", name: "Tecnología e infraestructura", key: "tecnologia_infraestructura" as const, route: APP_ROUTES.CUESTIONARIO_TECNOLOGIA_INFRAESTRUCTURA },
  { id: "3", name: "Procesos y Automatización", key: "procesos_automatizacion" as const, route: APP_ROUTES.CUESTIONARIO_PROCESOS_AUTOMATIZACION },
  { id: "4", name: "Datos y Analítica", key: "datos_analitica" as const, route: APP_ROUTES.CUESTIONARIO_DATOS_ANALITICA },
  { id: "5", name: "Experiencia del Cliente", key: "experiencia_cliente" as const, route: APP_ROUTES.CUESTIONARIO_EXPERIENCIA_CLIENTE },
  { id: "6", name: "Gobernanza y sostenibilidad digital", key: "gobernanza_sostenibilidad" as const, route: APP_ROUTES.CUESTIONARIO_GOBERNANZA_SOSTENIBILIDAD },
  { id: "7", name: "Presencia en Redes Sociales", key: "presencia_redes_sociales" as const, route: APP_ROUTES.CUESTIONARIO_PRESENCIA_REDES },
];

export default function CuestionariosStatusPage() {
  const router = useRouter();
  const [empresaId] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("empresaId");
  });
  const cargarSecciones = useSeccionesCompletadasStore(
    (state) => state.cargarDesdeAPI
  );

  useEffect(() => {
    const checkCuestionarios = async () => {
      if (!empresaId) {
        router.push(APP_ROUTES.INICIAR_DIAGNOSTICO);
        return;
      }

      try {
        await cargarSecciones(empresaId);
        const estadoActual = useSeccionesCompletadasStore.getState();

        const siguienteIncompleto = cuestionariosConfig.find(
          (config) => !estadoActual[config.key]
        );

        if (siguienteIncompleto) {
          router.push(siguienteIncompleto.route);
          return;
        }

        router.push(`${APP_ROUTES.MIS_EMPRESAS}/${empresaId}/resultados`);
      } catch (error) {
        console.error("Error al cargar secciones completadas:", error);
        router.push(APP_ROUTES.INICIAR_DIAGNOSTICO);
      }
    };

    checkCuestionarios();
  }, [cargarSecciones, empresaId, router]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7B549E]"></div>
      <p className="text-gray-600">Redirigiendo al siguiente cuestionario...</p>
    </div>
  );
}
