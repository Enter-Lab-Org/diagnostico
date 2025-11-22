import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question: "¿La empresa tiene presencia en, al menos, una red social?",
    answers: [
      {
        label: "No, pero la empresa está considerando tener presencia en redes sociales.",
        value: 1,
        name: "q1",
      },
      {
        label: "No, debido a que la actividad de la empresa no requiere de presencia en redes sociales.",
        value: 2,
        name: "q1",
      },
      {
        label: "Sí, pero solo en redes sociales poco relevantes para su sector.",
        value: 3,
        name: "q1",
      },
      {
        label: "Sí, en una o varias redes sociales relevantes para su sector.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question: "¿Se dispone de una estrategia de marketing definida en redes sociales?",
    answers: [
      {
        label: "La empresa no cuenta con una estrategia clara, pero está considerando desarrollar una.",
        value: 1,
        name: "q2",
      },
      {
        label: "La empresa no considera necesario para su actividad desarrollar una estrategia de marketing en redes sociales.",
        value: 2,
        name: "q2",
      },
      {
        label: "Sí, pero la estrategia no está actualizada o no es efectiva.",
        value: 3,
        name: "q2",
      },
      {
        label: "Sí, la empresa dispone de una estrategia bien definida y la actualizan de manera constante.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question: "¿La organización monitorea de manera regular su presencia y actividad en redes sociales?",
    answers: [
      {
        label: "La empresa no tiene presencia en redes sociales.",
        value: 1,
        name: "q3",
      },
      {
        label: "No, la empresa no supervisa de manera regular su presencia y actividad en redes sociales.",
        value: 2,
        name: "q3",
      },
      {
        label: "Sí, pero solo de manera ocasional.",
        value: 3,
        name: "q3",
      },
      {
        label: "Sí, la empresa monitoriza y supervisa de manera constante su presencia y actividad en redes sociales.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question: "¿La compañía interactúa de manera activa con su audiencia en redes sociales?",
    answers: [
      {
        label: "La empresa no tiene presencia en redes sociales.",
        value: 1,
        name: "q4",
      },
      {
        label: "La empresa no interactúa de manera activa con su audiencia en redes sociales.",
        value: 2,
        name: "q4",
      },
      {
        label: "Sí, pero solo de manera ocasional.",
        value: 3,
        name: "q4",
      },
      {
        label: "Sí, la empresa interactúa de manera constante y responden a las consultas y comentarios de su audiencia.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question: "¿La empresa utiliza herramientas de análisis y seguimiento de métricas en redes sociales?",
    answers: [
      {
        label: "La empresa no tiene presencia en redes sociales.",
        value: 1,
        name: "q5",
      },
      {
        label: "No utiliza herramientas de análisis y seguimiento.",
        value: 2,
        name: "q5",
      },
      {
        label: "Sí, pero solo de manera ocasional.",
        value: 3,
        name: "q5",
      },
      {
        label: "Sí, utiliza herramientas de análisis y seguimiento de manera constante.",
        value: 4,
        name: "q5",
      },
    ],
  },
  {
    question: "¿Se utiliza publicidad en redes sociales como parte de su estrategia de marketing?",
    answers: [
      {
        label: "No, actualmente toda nuestra publicidad se realiza a través de medios tradicionales y no digitales.",
        value: 1,
        name: "q6",
      },
      {
        label: "La empresa no utiliza publicidad en redes sociales, pero están considerando hacerlo.",
        value: 2,
        name: "q6",
      },
      {
        label: "Sí, pero su publicidad no es efectiva o no la utilizan de manera constante.",
        value: 3,
        name: "q6",
      },
      {
        label: "Sí, utiliza publicidad en redes sociales de manera constante y efectiva.",
        value: 4,
        name: "q6",
      },
    ],
  },
  {
    question: "¿Se dispone en la empresa de una política clara de uso de redes sociales para sus trabajadores?",
    answers: [
      {
        label: "La empresa no considera necesario tener una política clara de uso de redes sociales para sus trabajadores.",
        value: 1,
        name: "q7",
      },
      {
        label: "No, la empresa no tiene una política clara, pero está considerando desarrollar una.",
        value: 2,
        name: "q7",
      },
      {
        label: "Sí, tiene una política, pero únicamente la conocen algunos departamentos.",
        value: 3,
        name: "q7",
      },
      {
        label: "Sí, la empresa tiene una política clara y la comunican de manera efectiva a sus trabajadores.",
        value: 4,
        name: "q7",
      },
    ],
  },
];

