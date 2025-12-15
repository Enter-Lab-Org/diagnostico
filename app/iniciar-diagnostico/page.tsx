"use client";

import { ProtectedRoute } from "@/app/common/components/ProtectedRoute";
import { diagnosticosService } from "@/app/lib/api/diagnosticos.service";
import { usePorcentajeAvancesStore } from "@/app/store/porcentajeAvances";
import { useSeccionesCompletadasStore } from "@/app/store/seccionesCompletadas";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { APP_ROUTES } from "../router/app.routes";

function IniciarDiagnosticoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isInitializing, setIsInitializing] = useState(false);
  const cargarPorcentajes = usePorcentajeAvancesStore((state) => state.cargarDesdeAPI);
  const cargarSecciones = useSeccionesCompletadasStore((state) => state.cargarDesdeAPI);
  const cultura_digital = useSeccionesCompletadasStore((state) => state.cultura_digital);
  const tecnologia_infraestructura = useSeccionesCompletadasStore((state) => state.tecnologia_infraestructura);
  const procesos_automatizacion = useSeccionesCompletadasStore((state) => state.procesos_automatizacion);
  const datos_analitica = useSeccionesCompletadasStore((state) => state.datos_analitica);
  const experiencia_cliente = useSeccionesCompletadasStore((state) => state.experiencia_cliente);
  const gobernanza_sostenibilidad = useSeccionesCompletadasStore((state) => state.gobernanza_sostenibilidad);
  const presencia_redes_sociales = useSeccionesCompletadasStore((state) => state.presencia_redes_sociales);

  const ejesDiagnostico = [
    { href: APP_ROUTES.CUESTIONARIO_CULTURA_DIGITAL, src: "/assets/cultura_icon.svg", alt: "Eje 1", label: "Cultura Digital Empresarial", complete: cultura_digital },
    { href: APP_ROUTES.CUESTIONARIO_TECNOLOGIA_INFRAESTRUCTURA, src: "/assets/tecnologia_icon.svg", alt: "Eje 2", label: "Tecnologia e infraestructura", complete: tecnologia_infraestructura },
    { href: APP_ROUTES.CUESTIONARIO_PROCESOS_AUTOMATIZACION, src: "/assets/procesos_icon.svg", alt: "Eje 1", label: "Procesos y Automatización", complete: procesos_automatizacion },
    { href: APP_ROUTES.CUESTIONARIO_DATOS_ANALITICA, src: "/assets/datos_icon.svg", alt: "Eje 1", label: "Datos y Analítica", complete: datos_analitica },
    { href: APP_ROUTES.CUESTIONARIO_EXPERIENCIA_CLIENTE, src: "/assets/experiencia_icon.svg", alt: "Eje 1", label: "Experiencia del Cliente", complete: experiencia_cliente },
    { href: APP_ROUTES.CUESTIONARIO_GOBERNANZA_SOSTENIBILIDAD, src: "/assets/gobernanza_icon.svg", alt: "Eje 1", label: "Gobernanza y sostenibilidad digital", complete: gobernanza_sostenibilidad },
    { href: APP_ROUTES.CUESTIONARIO_PRESENCIA_REDES, src: "/assets/presencia_icon.svg", alt: "Eje 1", label: "Presencia en Internet y redes sociales", complete: presencia_redes_sociales },
  ];

  const allCompleted = [
    cultura_digital,
    tecnologia_infraestructura,
    procesos_automatizacion,
    datos_analitica,
    experiencia_cliente,
    gobernanza_sostenibilidad,
    presencia_redes_sociales,
  ].every(Boolean);

  const handleIniciarDiagnostico = () => {
    const empresaId = searchParams.get("empresaId") ?? (typeof window !== "undefined" ? localStorage.getItem("empresaId") : null);

    if (!empresaId) {
      router.push(APP_ROUTES.REGISTRO_EMPRESAS);
      return;
    }

    const targetRoute = allCompleted
      ? `${APP_ROUTES.MIS_EMPRESAS}/${empresaId}/resultados`
      : APP_ROUTES.CUENTIONARIOS;

    router.push(targetRoute);
  };

  useEffect(() => {
    const initializeDiagnostico = async () => {
      const empresaId = searchParams.get('empresaId');

      if (!empresaId) {
        router.push(APP_ROUTES.REGISTRO_EMPRESAS);
        return;
      }

      // Guardar empresaId en localStorage
      localStorage.setItem('empresaId', empresaId);

      try {
        setIsInitializing(true);

        // Buscar cuestionarios existentes para esta empresa
        const cuestionarios = await diagnosticosService.findAll(empresaId);

        // Si no hay cuestionarios, crearlos
        if (cuestionarios.length === 0) {
          await diagnosticosService.create({ empresaId });
        }

        // Cargar los stores desde la API
        await Promise.all([
          cargarPorcentajes(empresaId),
          cargarSecciones(empresaId),
        ]);

        console.log('Cuestionarios inicializados para empresa:', empresaId);
      } catch (error) {
        console.error('Error al inicializar cuestionarios:', error);
        alert(`Error al inicializar los cuestionarios: ${error instanceof Error ? error.message : 'Error desconocido'}`);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeDiagnostico();
  }, [searchParams, cargarPorcentajes, cargarSecciones, router]);

  return (
    <div className="flex flex-col gap-5 shadow-xl rounded-xl px-6 md:px-34 py-14 items-center justify-center cardsBackground">
      <h1 className="text-2xl font-extrabold text-center text-gray-400 cardsTitle">Ejes de diagnóstico</h1>
      <p className="textGray textRegular">Responde los cuestionarios para generar el diagnostico de tu empresa</p>
      {isInitializing ? (
        <p className="text-gray-500 text-sm">Inicializando diagnóstico...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {ejesDiagnostico.map((eje, index) => (
              <Link href={eje.href} key={index} className="flex flex-col md:flex-row gap-2 items-center justify-center ">
                <img
                  className={`w-32 shadow-lg rounded-xl cursor-pointer hover:shadow-[#4f4995]  ${eje.complete && "borderComplete"}`}
                  src={eje.src}
                  alt={eje.alt}
                />
                <p className={`textCenter textPurplePrimary textRegular ${eje.complete ? "text-green-500" : "text-gray-500"}`}>{eje.label}</p>
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={handleIniciarDiagnostico}
            className="buttonPurple1 subTitle text-white py-2 px-4 md:px-20 rounded-xl font-extrabold text-center"
          >
            {allCompleted ? "Ver resultados" : "Iniciar diagnóstico"}
          </button>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <ProtectedRoute>
      <Suspense fallback={<div className="flex flex-col gap-5 shadow-xl rounded-xl px-6 md:px-34 py-14 items-center justify-center cardsBackground">
        <p className="text-gray-500 text-sm">Cargando...</p>
      </div>}>
        <IniciarDiagnosticoContent />
      </Suspense>
    </ProtectedRoute>
  );
}
