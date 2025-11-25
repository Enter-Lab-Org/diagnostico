export type ResultadosCuestionarios = {
  id: number;
  title: string;
  color: string;
  percentage: number;
  icon: string;
  description: string;
  objetoCalificacion: ObjetoCalificacion[];
};

export type ObjetoCalificacion = {
  id: number;
  color: string;
  title: string;
  description: string;
};
