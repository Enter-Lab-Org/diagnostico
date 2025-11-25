import { ResultadosCuestionarios } from "./types";
/* 
  cultura_icon.svg
  datos_icon.svg
  experiencia_icon.svg
  gobernanza_icon.svg
  presencia_icon.svg
  procesos_icon.svg
  tecnologia_icon.svg
*/

export const ejemploMock: ResultadosCuestionarios[] = [
  {
    id: 1,
    title: "Tecnología e infraestructura",
    color: "green",
    percentage: 77,
    icon: "tecnologia_icon.svg",
    description:
      "Ya cuentas con cierta infraestructura tecnológica que te abrirá el camino para la digitalización de tu empresa, ahora puedes mejorar aplicando nuevas herramientas que ayuden a tu negocio a ser más eficiente",
    objetoCalificacion: [
      {
        id: 1,
        color: "yellow",
        title: "Objeto de calificación 1",
        description:
          "El primer paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
      {
        id: 2,
        color: "green",
        title: "Objeto de calificación 2",
        description:
          "El segundo paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
      {
        id: 3,
        color: "orange",
        title: "Objeto de calificación 3",
        description:
          "El tercer paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
      {
        id: 4,
        color: "yellow",
        title: "Objeto de calificación 4",
        description:
          "El cuarto paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
    ],
  },
  {
    id: 2,
    title: "Datos y Analítica",
    color: "orange",
    percentage: 50,
    icon: "datos_icon.svg",
    description:
      "Ya cuentas con cierta infraestructura tecnológica que te abrirá el camino para la digitalización de tu empresa, ahora puedes mejorar aplicando nuevas herramientas que ayuden a tu negocio a ser más eficiente",
    objetoCalificacion: [
      {
        id: 1,
        color: "yellow",
        title: "Objeto de calificación 1",
        description:
          "El primer paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
      {
        id: 2,
        color: "green",
        title: "Objeto de calificación 2",
        description:
          "El segundo paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
      {
        id: 3,
        color: "orange",
        title: "Objeto de calificación 3",
        description:
          "El tercer paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
      {
        id: 4,
        color: "yellow",
        title: "Objeto de calificación 4",
        description:
          "El cuarto paso para digitalizarte e incorporar nuevas tecnologías es que tu negocio disponga de una conexión a internet.",
      },
    ],
  },
];
