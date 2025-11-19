import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿Cuál es el nivel de madurez de su sistema de gestión de la calidad?",
    answers: [
      {
        label: "No existe un sistema formal de gestión de calidad.",
        value: 1,
        name: "q1",
      },
      {
        label: "Hay procedimientos básicos sin métricas.",
        value: 2,
        name: "q1",
      },
      {
        label: "El sistema está documentado y se audita periódicamente.",
        value: 3,
        name: "q1",
      },
      {
        label: "El sistema está certificado y mejora continuamente con datos.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question:
      "¿Qué políticas de ciberseguridad están implementadas y vigentes?",
    answers: [
      {
        label: "No se cuenta con políticas formales.",
        value: 1,
        name: "q2",
      },
      {
        label: "Existen políticas básicas pero poco difundidas.",
        value: 2,
        name: "q2",
      },
      {
        label: "Las políticas están actualizadas y se comunican al personal.",
        value: 3,
        name: "q2",
      },
      {
        label:
          "Las políticas incluyen controles técnicos, capacitación y monitoreo continuo.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Cómo gestionan las vulnerabilidades y parches de los sistemas críticos?",
    answers: [
      {
        label: "Solo se actúa cuando se detecta un incidente.",
        value: 1,
        name: "q3",
      },
      {
        label: "Se aplican parches de forma manual sin periodicidad.",
        value: 2,
        name: "q3",
      },
      {
        label: "Existe un cronograma de actualización y herramientas de escaneo.",
        value: 3,
        name: "q3",
      },
      {
        label:
          "Se cuenta con gestión automatizada de vulnerabilidades y reportes ejecutivos.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question:
      "¿Qué tan preparada está la organización para responder a incidentes de seguridad?",
    answers: [
      {
        label: "No existe un plan de respuesta.",
        value: 1,
        name: "q4",
      },
      {
        label: "Hay un plan básico sin pruebas.",
        value: 2,
        name: "q4",
      },
      {
        label: "Se cuenta con un plan probado y roles definidos.",
        value: 3,
        name: "q4",
      },
      {
        label:
          "El plan se prueba regularmente con simulacros y se coordina con terceros.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿Se capacita al personal en temas de calidad y ciberseguridad?",
    answers: [
      {
        label: "No se realizan capacitaciones.",
        value: 1,
        name: "q5",
      },
      {
        label: "Se ofrecen charlas introductorias esporádicas.",
        value: 2,
        name: "q5",
      },
      {
        label: "Existe un plan anual de formación obligatoria.",
        value: 3,
        name: "q5",
      },
      {
        label:
          "La capacitación es continua, segmentada por roles y evaluada con métricas.",
        value: 4,
        name: "q5",
      },
    ],
  },
];

