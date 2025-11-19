import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿Existe una estrategia formal para la gestión y gobernanza de datos?",
    answers: [
      { label: "No se cuenta con una estrategia definida.", value: 1, name: "q1" },
      {
        label: "Hay lineamientos generales pero no están documentados.",
        value: 2,
        name: "q1",
      },
      {
        label: "Existe una política de datos aplicada en las áreas clave.",
        value: 3,
        name: "q1",
      },
      {
        label: "La estrategia está institucionalizada y se revisa periódicamente.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question:
      "¿Qué tan confiable es la calidad de los datos que se usan para la toma de decisiones?",
    answers: [
      { label: "La calidad es desconocida o inconsistente.", value: 1, name: "q2" },
      {
        label: "Se realizan validaciones solo cuando se detectan errores.",
        value: 2,
        name: "q2",
      },
      {
        label: "Existen controles programados de calidad de datos.",
        value: 3,
        name: "q2",
      },
      {
        label: "La calidad se monitorea en tiempo real con reglas automatizadas.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Qué capacidades de analítica están disponibles actualmente?",
    answers: [
      {
        label: "Solo se realizan reportes manuales y descriptivos.",
        value: 1,
        name: "q3",
      },
      {
        label: "Se generan dashboards automatizados con datos históricos.",
        value: 2,
        name: "q3",
      },
      {
        label: "Se aplican análisis predictivos en áreas específicas.",
        value: 3,
        name: "q3",
      },
      {
        label: "Se combinan analítica descriptiva, predictiva y prescriptiva.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question:
      "¿Qué nivel de autoservicio de datos tienen los equipos de negocio?",
    answers: [
      {
        label: "Dependemos 100% del área de TI para obtener datos.",
        value: 1,
        name: "q4",
      },
      {
        label: "Algunos usuarios consultan datos mediante plantillas fijas.",
        value: 2,
        name: "q4",
      },
      {
        label: "Los analistas acceden a herramientas de BI con capacitaciones.",
        value: 3,
        name: "q4",
      },
      {
        label: "Cualquier área puede explorar datos seguros mediante catálogos.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿Se mide el impacto de las iniciativas de datos y analítica en los indicadores de negocio?",
    answers: [
      {
        label: "No se realiza medición posterior.",
        value: 1,
        name: "q5",
      },
      {
        label: "Solo se miden iniciativas estratégicas.",
        value: 2,
        name: "q5",
      },
      {
        label: "La mayoría de los proyectos reportan beneficios cuantificados.",
        value: 3,
        name: "q5",
      },
      {
        label: "Existe un modelo de valor que vincula cada iniciativa con KPIs.",
        value: 4,
        name: "q5",
      },
    ],
  },
];

