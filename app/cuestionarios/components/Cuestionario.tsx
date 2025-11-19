"use client";

import { useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { QuestionForm } from "./Question";
import type { QuestionData } from "../types";

type CuestionarioProps = {
  preguntas: QuestionData[];
  onSubmit?: (data: FieldValues) => void;
};

export const Cuestionario = ({ preguntas, onSubmit }: CuestionarioProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const handleFormSubmit = (data: FieldValues) => {
    if (onSubmit) {
      onSubmit(data);
      return;
    }
    console.log(data);
  };

  const SubmitButton = useMemo(
    () => (
      <button
        type="submit"
        className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple"
      >
        Finalizar
      </button>
    ),
    []
  );

  const renderNextStepButton = () => (
    <button
      type="button"
      className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple"
      onClick={async () => {
        const isValid = await trigger(`q${currentStep + 1}`);
        if (!isValid) {
          return;
        }
        if (currentStep < preguntas.length - 1) {
          setCurrentStep((prev) => prev + 1);
        }
      }}
    >
      Continuar
    </button>
  );

  const steps = preguntas.map((pregunta, idx) => (
    <QuestionForm
      key={pregunta.question + idx}
      question={pregunta.question}
      answers={pregunta.answers}
      register={register}
      nextStepButton={
        currentStep === preguntas.length - 1 ? SubmitButton : renderNextStepButton()
      }
    />
  ));

  if (!preguntas.length) {
    return <p className="text-sm text-gray-400">No hay preguntas disponibles.</p>;
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {errors[`q${currentStep + 1}`] && (
        <p className="text-red-500">
          {(errors[`q${currentStep + 1}`]?.message as string) ?? "Selecciona una opción"}
        </p>
      )}
      {steps[currentStep]}
    </form>
  );
};

