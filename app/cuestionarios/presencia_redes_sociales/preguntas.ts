import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿Qué tan definida está la estrategia de presencia digital y redes sociales?",
    answers: [
      { label: "No existe una estrategia formal.", value: 1, name: "q1" },
      {
        label: "La estrategia se basa en acciones puntuales.",
        value: 2,
        name: "q1",
      },
      {
        label: "Existe un plan anual con objetivos e indicadores.",
        value: 3,
        name: "q1",
      },
      {
        label: "La estrategia se revisa constantemente y se alinea al negocio.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question:
      "¿Con qué frecuencia monitorean las conversaciones y menciones de la marca?",
    answers: [
      { label: "No se monitorea la presencia en redes.", value: 1, name: "q2" },
      {
        label: "Se revisa manualmente de forma eventual.",
        value: 2,
        name: "q2",
      },
      {
        label: "Se utilizan herramientas de listening con reportes periódicos.",
        value: 3,
        name: "q2",
      },
      {
        label: "El monitoreo es continuo con alertas y análisis de sentimiento.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Qué nivel de coordinación existe entre marketing, servicio al cliente y ventas en los canales digitales?",
    answers: [
      {
        label: "Cada área gestiona sus canales sin coordinación.",
        value: 1,
        name: "q3",
      },
      {
        label: "Existe coordinación puntual para campañas o contingencias.",
        value: 2,
        name: "q3",
      },
      {
        label: "Hay un calendario compartido y protocolos unificados.",
        value: 3,
        name: "q3",
      },
      {
        label:
          "La gestión es omnicanal con responsabilidades claras y métricas comunes.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question:
      "¿Cómo evalúan el desempeño de los contenidos digitales?",
    answers: [
      {
        label: "Solo miden métricas básicas como likes o seguidores.",
        value: 1,
        name: "q4",
      },
      {
        label: "Analizan engagement y crecimiento de forma mensual.",
        value: 2,
        name: "q4",
      },
      {
        label: "Vinculan los resultados con objetivos de posicionamiento o leads.",
        value: 3,
        name: "q4",
      },
      {
        label: "Cuentan con atribución multicanal y optimizan basado en datos.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿Qué capacidades tienen para gestionar crisis o comentarios negativos en línea?",
    answers: [
      {
        label: "No existen protocolos definidos.",
        value: 1,
        name: "q5",
      },
      {
        label: "Se responde caso por caso sin lineamientos.",
        value: 2,
        name: "q5",
      },
      {
        label: "Hay guías de respuesta y responsables designados.",
        value: 3,
        name: "q5",
      },
      {
        label:
          "Existe un playbook integral con monitoreo 24/7 y escenarios de crisis.",
        value: 4,
        name: "q5",
      },
    ],
  },
];

