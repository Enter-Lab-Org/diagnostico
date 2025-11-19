"use client";

import { QuestionType } from "../types";



export const QuestionForm = ({ question, answers, register, nextStepButton }: QuestionType) => {

    return (
        <div className="flex flex-col gap-4 p-6">
            <h2 className="cuestionariosQuestion">
                {question}
            </h2>

            <div className="flex flex-col gap-3" >
                {answers.map((answer) => (
                    <label
                        key={answer.value}
                        className="flex items-start gap-3 cursor-pointer"
                    >
                        <input
                            className="mt-1 w-4 h-4 text-primary-purple accent-primary-purple cursor-pointer"
                            type="radio"
                            {...register(answer.name, { required: true })}
                            value={answer.value}
                        />
                        <span className="text-gray-400 text-regular">
                            {answer.label}
                        </span>
                    </label>
                ))}
            </div>
            <div className="flex justify-end">
                {nextStepButton}
            </div>
        </div>
    );
}

