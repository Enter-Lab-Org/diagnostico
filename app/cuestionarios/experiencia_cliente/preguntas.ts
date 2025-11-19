import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿Qué tan clara es la propuesta de valor y experiencia que desean entregar al cliente?",
    answers: [
      { label: "No existe una propuesta documentada.", value: 1, name: "q1" },
      {
        label: "Hay lineamientos generales pero sin métricas.",
        value: 2,
        name: "q1",
      },
      {
        label: "La propuesta está definida y se comunica internamente.",
        value: 3,
        name: "q1",
      },
      {
        label:
          "La propuesta está documentada, alineada al journey y se revisa continuamente.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question:
      "¿Qué tan consistente es la experiencia del cliente en los distintos canales?",
    answers: [
      {
        label: "Cada canal opera de forma independiente.",
        value: 1,
        name: "q2",
      },
      {
        label: "Existe coordinación básica entre canales.",
        value: 2,
        name: "q2",
      },
      {
        label: "Contamos con procesos omnicanal en la mayoría de interacciones.",
        value: 3,
        name: "q2",
      },
      {
        label: "La experiencia es completamente integrada y personalizada.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Cómo miden la satisfacción y percepción del cliente?",
    answers: [
      { label: "No se mide formalmente.", value: 1, name: "q3" },
      {
        label: "Se aplican encuestas ocasionales.",
        value: 2,
        name: "q3",
      },
      {
        label: "Se monitorean indicadores como NPS o CSAT de forma periódica.",
        value: 3,
        name: "q3",
      },
      {
        label: "La voz del cliente se mide en tiempo real con acciones correctivas.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question:
      "¿Qué tan preparados están los equipos para gestionar la experiencia del cliente?",
    answers: [
      {
        label: "No existen roles o capacitación específica.",
        value: 1,
        name: "q4",
      },
      {
        label: "Algunos equipos reciben formación puntual.",
        value: 2,
        name: "q4",
      },
      {
        label: "Existe un equipo responsable con procesos definidos.",
        value: 3,
        name: "q4",
      },
      {
        label: "Hay gobierno CX con líderes, analítica y planes de acción.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿Se conectan los resultados de experiencia con indicadores de negocio?",
    answers: [
      {
        label: "No se relacionan los indicadores.",
        value: 1,
        name: "q5",
      },
      {
        label: "Solo algunos proyectos vinculan métricas de negocio.",
        value: 2,
        name: "q5",
      },
      {
        label: "La mayoría de iniciativas tienen KPI de impacto.",
        value: 3,
        name: "q5",
      },
      {
        label: "Existe un tablero integral que une métricas CX con resultados financieros.",
        value: 4,
        name: "q5",
      },
    ],
  },
];

