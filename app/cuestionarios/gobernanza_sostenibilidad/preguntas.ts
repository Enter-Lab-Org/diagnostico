import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿La organización cuenta con una estructura de gobernanza digital definida?",
    answers: [
      { label: "No existe una estructura formal.", value: 1, name: "q1" },
      {
        label: "Hay roles asignados pero sin funciones claras.",
        value: 2,
        name: "q1",
      },
      {
        label: "Existe un comité digital con agenda periódica.",
        value: 3,
        name: "q1",
      },
      {
        label:
          "La gobernanza digital está alineada al plan corporativo y tiene indicadores.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question:
      "¿Qué tan integrados están los criterios de sostenibilidad en las iniciativas digitales?",
    answers: [
      {
        label: "No se consideran aspectos de sostenibilidad.",
        value: 1,
        name: "q2",
      },
      {
        label: "Solo se consideran en proyectos específicos.",
        value: 2,
        name: "q2",
      },
      {
        label: "Se evalúan impactos ambientales y sociales en cada caso de uso.",
        value: 3,
        name: "q2",
      },
      {
        label:
          "Los criterios ESG forman parte del modelo de priorización y gobierno digital.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Existen políticas y normas internas actualizadas para el uso responsable de la tecnología?",
    answers: [
      {
        label: "No se cuenta con políticas documentadas.",
        value: 1,
        name: "q3",
      },
      {
        label: "Las políticas existen pero están desactualizadas.",
        value: 2,
        name: "q3",
      },
      {
        label: "Las políticas se revisan anualmente y se comunican al personal.",
        value: 3,
        name: "q3",
      },
      {
        label:
          "Las políticas incluyen mecanismos de cumplimiento y auditoría continua.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question:
      "¿Qué nivel de transparencia existe respecto al avance de la agenda digital?",
    answers: [
      {
        label: "No se reporta el avance a la organización.",
        value: 1,
        name: "q4",
      },
      {
        label: "La información se comparte solo con la alta dirección.",
        value: 2,
        name: "q4",
      },
      {
        label: "Existen reportes periódicos a las áreas involucradas.",
        value: 3,
        name: "q4",
      },
      {
        label:
          "Los resultados se comunican a toda la organización y grupos de interés.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿Se realizan evaluaciones de riesgo y cumplimiento para proyectos digitales?",
    answers: [
      {
        label: "No se evalúan riesgos específicos.",
        value: 1,
        name: "q5",
      },
      {
        label: "Solo se evalúan riesgos en proyectos mayores.",
        value: 2,
        name: "q5",
      },
      {
        label: "Existe un proceso estándar de evaluación y mitigación.",
        value: 3,
        name: "q5",
      },
      {
        label: "Las evaluaciones incluyen planes de continuidad y seguimiento ESG.",
        value: 4,
        name: "q5",
      },
    ],
  },
];

