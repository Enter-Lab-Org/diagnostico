export interface AnswerOptionType {
    value: number;
    label: string;
}

export interface QuestionType {
    question: string;
    answers: AnswerOptionType[];
}