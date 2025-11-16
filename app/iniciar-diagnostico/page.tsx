import { APP_ROUTES } from "../router/app.routes";
import Link from "next/link";
const ejesDiagnostico = [
  { src: "/assets/mesa_de_trabajo_3.svg", alt: "Eje 1", label: "Cultura Digital Empresarial" },
  { src: "/assets/mesa_de_trabajo_4.svg", alt: "Eje 2", label: "Presencia en Internet y Redes Sociales" },
  { src: "/assets/mesa_de_trabajo_7.svg", alt: "Eje 1", label: "Adopción de Tecnologías Emergentes" },
  { src: "/assets/mesa_de_trabajo_9.svg", alt: "Eje 1", label: "Digitalización de Procesos y Empresariales" },
  { src: "/assets/mesa_de_trabajo_10.svg", alt: "Eje 1", label: "Evaluación de Competencia Digital de Trabajadores" },
  { src: "/assets/mesa_de_trabajo_5.svg", alt: "Eje 1", label: "Gestión de la Información y Toma de Decisiones" },
  { src: "/assets/mesa_de_trabajo_6.svg", alt: "Eje 1", label: "Canales de Venta Online Y Experiencia del Usuario" },
  { src: "/assets/mesa_de_trabajo_8.svg", alt: "Eje 1", label: "Gestión de Calidad y Ciberseguridad" },
  { src: "/assets/mesa_de_trabajo_11.svg", alt: "Eje 1", label: "Inversion en Tecnología" },
  { src: "/assets/mesa_de_trabajo_12.svg", alt: "Eje 1", label: "Proteccion de datos y Propiedad Intelectual" },
];

export default function Home() {
  return <div className="flex flex-col gap-5 shadow-xl rounded-xl px-34 py-14 items-center justify-center">
    <h1 className="text-2xl font-extrabold text-center text-gray-400">Ejes de diagnóstico</h1>
    <p className="text-gray-400">Responde los cuestionarios para generar el diagnostico de tu empresa</p>
    <div className="grid grid-cols-3 gap-5">
      {ejesDiagnostico.map((eje, index) => (
        <div key={index} className="flex flex-row gap-2 items-center justify-center">
          <img className="w-32 shadow-lg rounded-xl" src={eje.src} alt={eje.alt} />
          <p className="text-indigo-700">{eje.label}</p>
        </div>
      ))}
    </div>
    <Link href={APP_ROUTES.CUESTIONARIO} className="bg-indigo-500 text-white py-2 px-20 rounded-xl font-extrabold text-center">
      Iniciar diagnóstico
    </Link>
  </div>;
}
