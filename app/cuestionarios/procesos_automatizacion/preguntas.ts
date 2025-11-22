import { QuestionData } from "../types";

export const preguntas: QuestionData[] = [
  {
    question:
      "¿La empresa cuenta con un sistema de gestión empresarial (ERP) para digitalizar y optimizar los procesos internos?",
    answers: [
      {
        label: "No, y no se tiene prevista su implementación en el futuro cercano.",
        value: 1,
        name: "q1",
      },
      {
        label: "No, pero se está en proceso de implementación a medio plazo.",
        value: 2,
        name: "q1",
      },
      {
        label:
          "Sí, pero no se utiliza de manera adecuada ya que los usuarios continúan utilizando hojas de cálculo.",
        value: 3,
        name: "q1",
      },
      {
        label: "Sí, está implementado y se utiliza regularmente.",
        value: 4,
        name: "q1",
      },
    ],
  },
  {
    question:
      "¿Se han digitalizado los procesos de compras a proveedores dentro de la empresa?",
    answers: [
      {
        label:
          "No, y no se tiene prevista su digitalización en el futuro cercano.",
        value: 1,
        name: "q2",
      },
      {
        label: "No, pero la empresa está en proceso de su digitalización.",
        value: 2,
        name: "q2",
      },
      {
        label:
          "Sí, pero se utilizan herramientas generales que no están adaptadas a las necesidades de la empresa. Muchos de los procesos continúan en papel y hojas de cálculo.",
        value: 3,
        name: "q2",
      },
      {
        label:
          "Sí, se han digitalizado y se utilizan herramientas específicas para la gestión del aprovisionamiento en la cadena de suministro.",
        value: 4,
        name: "q2",
      },
    ],
  },
  {
    question:
      "¿Se ha implementado un sistema de gestión de relaciones con los clientes (CRM) para mejorar la atención al cliente?",
    answers: [
      {
        label:
          "No, y la empresa no tiene prevista su implementación en el futuro cercano.",
        value: 1,
        name: "q3",
      },
      {
        label: "No, pero la empresa está en proceso de implementación.",
        value: 2,
        name: "q3",
      },
      {
        label:
          "Sí, pero no todos los usuarios de la empresa actualizan la información en la plataforma",
        value: 3,
        name: "q3",
      },
      {
        label:
          "Sí, se está implementado y se utiliza regularmente para mejorar la atención al cliente.",
        value: 4,
        name: "q3",
      },
    ],
  },
  {
    question:
      "¿Se utilizan sistemas de gestión de almacenes (SGA) para controlar los procesos logísticos de la empresa?",
    answers: [
      {
        label:
          "No, y la empresa no tiene prevista su implementación en el futuro cercano.",
        value: 1,
        name: "q4",
      },
      {
        label: "No, pero la empresa está en proceso de implementación.",
        value: 2,
        name: "q4",
      },
      {
        label:
          "Sí, pero no todos los usuarios utilizan la herramienta, lo que provoca tener diferentes fuentes de información.",
        value: 3,
        name: "q4",
      },
      {
        label:
          "Sí, se utilizan y se ha mejorado la eficiencia en los procesos logísticos.",
        value: 4,
        name: "q4",
      },
    ],
  },
  {
    question:
      "¿La empresa utiliza herramientas de gestión de proyectos (WorkForce) para optimizar la gestión del tiempo y recursos?",
    answers: [
      {
        label:
          "No, y la empresa no tiene previsto su implementación en el futuro cercano.",
        value: 1,
        name: "q5",
      },
      {
        label: "No, pero la empresa está en proceso de implementación.",
        value: 2,
        name: "q5",
      },
      {
        label:
          "Sí, pero actualmente existen usuarios que continúan utilizando la planificación de tareas en hojas de cálculo y papel.",
        value: 3,
        name: "q5",
      },
      {
        label:
          "Sí, se utilizan y se ha mejorado la gestión del tiempo y recursos de los proyectos.",
        value: 4,
        name: "q5",
      },
    ],
  },
  {
    question:
      "¿Se ha implementado un sistema de gestión de contenidos (CMS) para el sitio web de la empresa?",
    answers: [
      {
        label:
          "No, y la empresa no tiene previsto su implementación en el futuro cercano.",
        value: 1,
        name: "q6",
      },
      {
        label: "No, pero la empresa está en proceso de implementación.",
        value: 2,
        name: "q6",
      },
      {
        label:
          "Sí, pero está pendiente definir e implementar un protocolo de actualización de contenidos.",
        value: 3,
        name: "q6",
      },
      {
        label:
          "Sí, está implementado y se utiliza regularmente para la gestión del sitio web.",
        value: 4,
        name: "q6",
      },
    ],
  },
  {
    question:
      "¿Se utilizan herramientas de análisis de datos para mejorar los procesos empresariales?",
    answers: [
      {
        label:
          "No, y la empresa no tiene previsto su implementación en el futuro cercano.",
        value: 1,
        name: "q7",
      },
      {
        label: "No, pero la empresa está en proceso de implementación.",
        value: 2,
        name: "q7",
      },
      {
        label:
          "Sí, pero aún no se tienen suficientes datos para poder empezar a tomar decisiones.",
        value: 3,
        name: "q7",
      },
      {
        label:
          "Sí, se utilizan y se ha mejorado la toma de decisiones basadas en datos.",
        value: 4,
        name: "q7",
      },
    ],
  },
  {
    question:
      "¿Se ha implementado un sistema de gestión de recursos humanos (HRM) para optimizar los procesos de recursos humanos?",
    answers: [
      {
        label:
          "No se ha implementado un sistema de HRM y la empresa no considera su implementación en el futuro cercano.",
        value: 1,
        name: "q8",
      },
      {
        label:
          "No se ha implementado un sistema de HRM, pero la empresa está considerando su implementación en un futuro cercano.",
        value: 2,
        name: "q8",
      },
      {
        label:
          "Sí, se ha implementado un sistema de HRM, pero aún no se encuentra todo el personal de la empresa incluido en el sistema.",
        value: 3,
        name: "q8",
      },
      {
        label:
          "Sí, se ha implementado un sistema de HRM y ha mejorado significativamente la eficiencia y eficacia de los procesos de recursos humanos.",
        value: 4,
        name: "q8",
      },
    ],
  },
];
