import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿Qué porcentaje de los procesos críticos está documentado y estandarizado?",
    answers: [
      { label: "No existe documentación formal.", value: 1, name: "q1" },
      { label: "Solo algunos procesos están descritos.", value: 2, name: "q1" },
      {
        label: "La mayoría de los procesos críticos cuentan con guías.",
        value: 3,
        name: "q1",
      },
      {
        label: "Todos los procesos clave están estandarizados y auditados.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question: "¿Qué tan extendida está la automatización de procesos operativos?",
    answers: [
      { label: "No existe automatización.", value: 1, name: "q2" },
      {
        label: "Solo hay automatizaciones aisladas.",
        value: 2,
        name: "q2",
      },
      {
        label: "Varias áreas utilizan automatización de forma coordinada.",
        value: 3,
        name: "q2",
      },
      {
        label: "La automatización es transversal y monitoreada con KPIs.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Se cuenta con indicadores para medir la eficiencia y calidad de los procesos?",
    answers: [
      {
        label: "No se miden indicadores.",
        value: 1,
        name: "q3",
      },
      {
        label: "Algunos indicadores se miden de forma manual.",
        value: 2,
        name: "q3",
      },
      {
        label: "Existe un tablero operativo actualizado periódicamente.",
        value: 3,
        name: "q3",
      },
      {
        label: "Se monitorea en tiempo real con alertas para correcciones.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question:
      "¿Qué nivel de integración existe entre los sistemas que soportan los procesos?",
    answers: [
      {
        label: "Cada área usa herramientas independientes.",
        value: 1,
        name: "q4",
      },
      {
        label: "Hay integraciones manuales o mediante exportaciones.",
        value: 2,
        name: "q4",
      },
      {
        label: "Los sistemas principales están conectados mediante APIs.",
        value: 3,
        name: "q4",
      },
      {
        label: "Existe una arquitectura integrada con orquestadores o BPM.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿Qué tan frecuente es la revisión y mejora continua de los procesos automatizados?",
    answers: [
      {
        label: "Nunca se revisan después de implementados.",
        value: 1,
        name: "q5",
      },
      {
        label: "Solo se revisan cuando ocurre un problema.",
        value: 2,
        name: "q5",
      },
      {
        label: "Se revisan anualmente con participación de las áreas.",
        value: 3,
        name: "q5",
      },
      {
        label: "Se monitorean continuamente con ciclos cortos de mejora.",
        value: 4,
        name: "q5",
      },
    ],
  },
];

