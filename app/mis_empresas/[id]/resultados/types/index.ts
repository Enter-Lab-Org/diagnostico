export type ResultadosCuestionarios = {
  id: number;
  title: string;
  color: string;
  percentage: number;
  icon: string;
  description: string;
  nivel: string;
  nivelCorto: string;
  colorHex: string;
  interpretacion: string;
  objetoCalificacion: ObjetoCalificacion[];
};

export type ObjetoCalificacion = {
  id: number;
  color: string;
  title: string;
  description: string;
};

export type ResultadosResponse = {
  empresa: { id: string; razonSocial: string };
  nivelGlobal: string;
  nivelGlobalCorto: string;
  puntajeTotal: number;
  descripcionNivelGlobal: string;
  colorNivelGlobal: string;
  cuestionarios: ResultadosCuestionarios[];
};
