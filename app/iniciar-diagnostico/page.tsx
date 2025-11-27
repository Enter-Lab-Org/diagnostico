import { APP_ROUTES } from "../router/app.routes";
import Link from "next/link";
const ejesDiagnostico = [
  { src: "/assets/cultura_icon.svg", alt: "Eje 1", label: "Cultura Digital Empresarial", complete: true },
  { src: "/assets/tecnologia_icon.svg", alt: "Eje 2", label: "Tecnologia e infraestructura", complete: false },
  { src: "/assets/procesos_icon.svg", alt: "Eje 1", label: "Procesos y Automatización", complete: false },
  { src: "/assets/datos_icon.svg", alt: "Eje 1", label: "Datos y Analítica", complete: false },
  { src: "/assets/experiencia_icon.svg", alt: "Eje 1", label: "Experiencia del Cliente", complete: false },
  { src: "/assets/gobernanza_icon.svg", alt: "Eje 1", label: "Gobernanza y sostenibilidad digital", complete: false },
  { src: "/assets/presencia_icon.svg", alt: "Eje 1", label: "Presencia en Internet y redes sociales", complete: false },
];

export default function Home() {
  return <div className="flex flex-col gap-5 shadow-xl rounded-xl px-6 md:px-34 py-14 items-center justify-center cardsBackground">
    <h1 className="text-2xl font-extrabold text-center text-gray-400 cardsTitle">Ejes de diagnóstico</h1>
    <p className="textGray textRegular">Responde los cuestionarios para generar el diagnostico de tu empresa</p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
      {ejesDiagnostico.map((eje, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-2 items-center justify-center ">
          <img
            className={`w-32 shadow-lg rounded-xl ${eje.complete && "shadow-[#4f4995]"}`}
            src={eje.src}
            alt={eje.alt}
          />
          <p className={`textCenter textPurplePrimary textRegular ${eje.complete ? "text-green-500" : "text-gray-500"}`}>{eje.label}</p>
        </div>
      ))}
    </div>
    <Link href={APP_ROUTES.CUESTIONARIO_CULTURA_DIGITAL} className="buttonPurple1 subTitle text-white py-2 px-4 md:px-20 rounded-xl font-extrabold text-center">
      Iniciar diagnóstico
    </Link>
  </div>;
}
