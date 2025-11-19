import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿Cómo describirías el estado actual de la infraestructura tecnológica (redes, servidores y dispositivos) en tu organización?",
    answers: [
      {
        label: "Infraestructura obsoleta o con fallas frecuentes.",
        value: 1,
        name: "q1",
      },
      {
        label: "Infraestructura básica con mantenimiento reactivo.",
        value: 2,
        name: "q1",
      },
      {
        label: "Infraestructura modernizada parcialmente y con monitoreo.",
        value: 3,
        name: "q1",
      },
      {
        label: "Infraestructura moderna, redundante y monitoreada en tiempo real.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question:
      "¿Cuentan con un inventario actualizado de activos tecnológicos y su ciclo de vida?",
    answers: [
      { label: "No existe inventario documentado.", value: 1, name: "q2" },
      {
        label: "Inventario parcial y desactualizado.",
        value: 2,
        name: "q2",
      },
      {
        label: "Inventario completo pero actualizado manualmente.",
        value: 3,
        name: "q2",
      },
      {
        label: "Inventario automatizado con alertas de renovación.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Qué tan frecuentes son las acciones de mantenimiento preventivo y actualizaciones?",
    answers: [
      {
        label: "Solo se actúa cuando ocurre una falla.",
        value: 1,
        name: "q3",
      },
      {
        label: "Mantenimiento eventual sin plan definido.",
        value: 2,
        name: "q3",
      },
      {
        label: "Existe un plan anual de mantenimiento.",
        value: 3,
        name: "q3",
      },
      {
        label: "Mantenimiento continuo basado en indicadores y contratos.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question: "¿Qué nivel de adopción de servicios en la nube tienen?",
    answers: [
      {
        label: "No utilizamos servicios en la nube.",
        value: 1,
        name: "q4",
      },
      {
        label: "Solo usamos servicios en la nube para pruebas o pilotos.",
        value: 2,
        name: "q4",
      },
      {
        label: "Tenemos una estrategia híbrida con cargas productivas.",
        value: 3,
        name: "q4",
      },
      {
        label: "La nube es la plataforma principal para la mayoría de servicios.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿Existe un presupuesto anual definido para modernizar y escalar la infraestructura?",
    answers: [
      { label: "No hay presupuesto asignado.", value: 1, name: "q5" },
      {
        label: "Se asigna presupuesto solo cuando surge la necesidad.",
        value: 2,
        name: "q5",
      },
      {
        label: "Hay un presupuesto básico que cubre renovaciones prioritarias.",
        value: 3,
        name: "q5",
      },
      {
        label:
          "Existe un plan plurianual con presupuesto garantizado y priorización clara.",
        value: 4,
        name: "q5",
      },
    ],
  },
];

