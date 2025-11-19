import { FieldValues, UseFormRegister } from "react-hook-form";

export type AnswerOptionType = {
  value: number;
  label: string;
  name: string;
};

export interface QuestionData {
  question: string;
  answers: AnswerOptionType[];
}

export interface QuestionType extends QuestionData {
  register: UseFormRegister<FieldValues>;
  nextStepButton: React.ReactNode;
}
