"use client";

import { usePorcentajeAvancesStore } from "@/app/store/porcentajeAvances";
import { useSeccionesCompletadasStore } from "@/app/store/seccionesCompletadas";
import { useEffect, useState } from "react";

const cuestionariosConfig = [
  { id: "1", name: "Cultura Digital Empresarial", key: "cultura_digital" as const },
  { id: "2", name: "Tecnología e infraestructura", key: "tecnologia_infraestructura" as const },
  { id: "3", name: "Procesos y Automatización", key: "procesos_automatizacion" as const },
  { id: "4", name: "Datos y Analítica", key: "datos_analitica" as const },
  { id: "5", name: "Experiencia del Cliente", key: "experiencia_cliente" as const },
  { id: "6", name: "Gobernanza y sostenibilidad digital", key: "gobernanza_sostenibilidad" as const },
  { id: "7", name: "Presencia en Redes Sociales", key: "presencia_redes_sociales" as const },
  { id: "8", name: "Gestión de la Calidad y Ciberseguridad", key: "calidad_ciberseguridad" as const },
];

export default function CuestionariosStatusPage() {
  const seccionesCompletadas = useSeccionesCompletadasStore();
  const porcentajeAvances = usePorcentajeAvancesStore();
  const cargarPorcentajes = usePorcentajeAvancesStore((state) => state.cargarDesdeAPI);
  const cargarSecciones = useSeccionesCompletadasStore((state) => state.cargarDesdeAPI);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Obtener empresaId del localStorage
        const empresaId = localStorage.getItem('empresaId');

        if (!empresaId) {
          setError('No se encontró empresaId. Por favor, selecciona una empresa primero.');
          setIsLoading(false);
          return;
        }

        // Cargar los datos desde la API
        await Promise.all([
          cargarPorcentajes(empresaId),
          cargarSecciones(empresaId),
        ]);

      } catch (err) {
        console.error('Error al cargar datos desde la API:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar los datos');
      } finally {
        setIsLoading(false);
      }
    };

    cargarDatos();
  }, [cargarPorcentajes, cargarSecciones]);


  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-6 min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7B549E]"></div>
        <p className="text-gray-600">Cargando estado de los cuestionarios...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-6 min-h-[400px]">
        <div className="text-red-500 text-lg font-semibold">Error</div>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#7B549E] text-white rounded-lg hover:bg-[#6a4a8a] transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }


}
