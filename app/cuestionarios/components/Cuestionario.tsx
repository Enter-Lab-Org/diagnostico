"use client";

import { useEffect, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { QuestionForm } from "./Question";
import type { QuestionData } from "../types";
import { calculatePercentage } from "@/app/helpers";
import { useRouter } from "next/navigation";

type CuestionarioProps = {
  preguntas: QuestionData[];
  onSubmit?: (data: FieldValues) => void;
  setPorcentajeAvances: (porcentaje: number) => void;
  nextRoute?: string;
};

export const Cuestionario = ({ preguntas, onSubmit, setPorcentajeAvances, nextRoute }: CuestionarioProps) => {
  const { push } = useRouter();
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
        onClick={() => {
          if (nextRoute) {
            setPorcentajeAvances(100);
            push(nextRoute);
          }
        }}
        type="submit"
        className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple"
      >
        Finalizar
      </button>
    ),
    [nextRoute, setPorcentajeAvances, push]
  );

  useEffect(() => {
    setPorcentajeAvances(calculatePercentage(currentStep, preguntas.length));
  }, [currentStep]);

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

