import { APP_ROUTES } from "../router/app.routes";
import Link from "next/link";
const ejesDiagnostico = [
  { src: "/assets/cultura_icon.svg", alt: "Eje 1", label: "Cultura Digital Empresarial" },
  { src: "/assets/tecnologia_icon.svg", alt: "Eje 2", label: "Tecnologia e infraestructura" },
  { src: "/assets/procesos_icon.svg", alt: "Eje 1", label: "Procesos y Automatización" },
  { src: "/assets/datos_icon.svg", alt: "Eje 1", label: "Datos y Analítica" },
  { src: "/assets/experiencia_icon.svg", alt: "Eje 1", label: "Experiencia del Cliente" },
  { src: "/assets/gobernanza_icon.svg", alt: "Eje 1", label: "Gobernanza y sostenibilidad digital" },
  { src: "/assets/presencia_icon.svg", alt: "Eje 1", label: "Presencia en Internet y redes sociales" },
];

export default function Home() {
  return <div className="flex flex-col gap-5 shadow-xl rounded-xl px-34 py-14 items-center justify-center cardsBackground">
    <h1 className="text-2xl font-extrabold text-center text-gray-400 cardsTitle">Ejes de diagnóstico</h1>
    <p className="textGray textRegular">Responde los cuestionarios para generar el diagnostico de tu empresa</p>
    <div className="grid grid-cols-3 gap-5">
      {ejesDiagnostico.map((eje, index) => (
        <div key={index} className="flex flex-row gap-2 items-center justify-center">
          <img className="w-32 shadow-lg rounded-xl" src={eje.src} alt={eje.alt} />
          <p className="textPurplePrimary textRegular">{eje.label}</p>
        </div>
      ))}
    </div>
    <Link href={APP_ROUTES.CUESTIONARIO_CULTURA_DIGITAL} className="buttonPurple1 subTitle text-white py-2 px-20 rounded-xl font-extrabold text-center">
      Iniciar diagnóstico
    </Link>
  </div>;
}
