"use client";

import { calculatePercentage } from "@/app/helpers";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import type { QuestionData } from "../types";
import { FinalCuestionario } from "./FinalCuestionario";
import { QuestionForm } from "./Question";

type CuestionarioProps = {
  preguntas: QuestionData[];
  onSubmit?: (data: FieldValues) => void;
  setPorcentajeAvances: (porcentaje: number) => void;
  nextRoute?: string;
};

export const Cuestionario = ({ preguntas, onSubmit, setPorcentajeAvances, nextRoute }: CuestionarioProps) => {
  const { push } = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
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
        onClick={async () => {
          const isValid = await trigger(`q${currentStep + 1}`);
          if (!isValid) {
            return;
          }
          setIsFinished(true);
        }}
        type="button"
        className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple"
      >
        Finalizar
      </button>
    ),
    [currentStep, trigger]
  );

  const NextRouteButton = useMemo(
    () => (
      <button
        onClick={() => {
          if (nextRoute) {
            setPorcentajeAvances(100);
            push(nextRoute);
          }
        }}
        type="button"
        className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple"
      >
        Continuar
      </button>
    ),
    [nextRoute, setPorcentajeAvances, push]
  );

  useEffect(() => {
    setPorcentajeAvances(calculatePercentage(currentStep, preguntas.length));
  }, [currentStep, preguntas.length, setPorcentajeAvances]);

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


  if (isFinished) {
    return <FinalCuestionario nextStepButton={NextRouteButton} />;
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

