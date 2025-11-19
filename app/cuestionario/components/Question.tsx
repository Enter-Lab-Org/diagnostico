"use client";
import { useState } from "react";
import { QuestionType } from "../types";


export const Question = ({ question, answers }: QuestionType) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0);

    const handleChange = (value: number) => {
        setSelectedAnswer(value);
    };

    return (
        <div className="flex flex-col gap-4 p-6">
            <h2 className="text-primary-purple text-xl font-extrabold">
                {question}
            </h2>

            <div className="flex flex-col gap-3">
                {answers.map((answer) => (
                    <label
                        key={answer.value}
                        className="flex items-start gap-3 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="question-option"
                            value={answer.value}
                            checked={selectedAnswer === answer.value}
                            onChange={() => handleChange(answer.value)}
                            className="mt-1 w-4 h-4 text-primary-purple accent-primary-purple cursor-pointer"
                        />
                        <span className="text-gray-400 text-regular">
                            {answer.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}

