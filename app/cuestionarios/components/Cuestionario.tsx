"use client";

import { getCategoriaFromRoute } from "@/app/cuestionarios/utils/categoria-mapper";
import { inicializarDiagnostico } from "@/app/cuestionarios/utils/diagnostico-helper";
import { calculatePercentage } from "@/app/helpers";
import { diagnosticosService, GuardarRespuestasDto } from "@/app/lib/api/diagnosticos.service";
import { usePathname, useRouter } from "next/navigation";
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
  const pathname = usePathname();
  const [currentStep, setCurrentStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues,
  } = useForm();

  // Inicializar diagnóstico al cargar el componente
  useEffect(() => {
    const init = async () => {
      try {
        await inicializarDiagnostico();
      } catch (error) {
        console.error('Error al inicializar diagnóstico:', error);
        alert(`Error al inicializar el diagnóstico: ${error instanceof Error ? error.message : 'Error desconocido'}`);
      } finally {
        setIsInitializing(false);
      }
    };

    init();
  }, []);

  const handleFormSubmit = async (data: FieldValues) => {
    if (onSubmit) {
      onSubmit(data);
      return;
    }
    
    // Guardar respuestas en la API
    await guardarRespuestasEnAPI(data);
  };

  const guardarRespuestasEnAPI = async (data: FieldValues) => {
    try {
      setIsSaving(true);
      
      // Obtener empresaId del localStorage
      const empresaId = localStorage.getItem('empresaId');
      
      if (!empresaId) {
        console.error('No se encontró empresaId en localStorage');
        alert('Error: No se encontró la empresa. Por favor, selecciona una empresa primero.');
        return;
      }

      // Obtener la categoría del cuestionario actual
      const categoria = getCategoriaFromRoute(pathname);
      if (!categoria) {
        console.error('No se pudo determinar la categoría del cuestionario');
        alert('Error: No se pudo determinar la categoría del cuestionario.');
        return;
      }

      // Transformar las respuestas del formulario al formato de la API
      const respuestas: GuardarRespuestasDto['respuestas'] = preguntas.map((pregunta, index) => {
        const numeroPregunta = index + 1;
        const respuestaKey = `q${numeroPregunta}`;
        const valorSeleccionado = parseInt(data[respuestaKey] as string, 10);
        
        // Encontrar la respuesta seleccionada para obtener el texto
        const respuestaSeleccionada = pregunta.answers.find(
          (answer) => answer.value === valorSeleccionado
        );

        return {
          numeroPregunta,
          preguntaTexto: pregunta.question,
          valorSeleccionado,
          textoRespuesta: respuestaSeleccionada?.label || '',
        };
      });

      const guardarRespuestasDto: GuardarRespuestasDto = {
        categoria,
        respuestas,
      };

      // Guardar respuestas en la API usando empresaId
      await diagnosticosService.guardarRespuestas(empresaId, guardarRespuestasDto);
      
      console.log('Respuestas guardadas exitosamente');
      setIsFinished(true);
    } catch (error) {
      console.error('Error al guardar respuestas:', error);
      alert(`Error al guardar las respuestas: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    } finally {
      setIsSaving(false);
    }
  };

  const SubmitButton = useMemo(
    () => (
      <button
        onClick={async () => {
          const isValid = await trigger(`q${currentStep + 1}`);
          if (!isValid) {
            return;
          }
          
          // Obtener todos los valores del formulario
          const formData = getValues();
          
          // Validar que todas las preguntas estén respondidas
          const todasRespondidas = preguntas.every((_, index) => {
            const respuestaKey = `q${index + 1}`;
            return formData[respuestaKey] !== undefined && formData[respuestaKey] !== null;
          });

          if (!todasRespondidas) {
            alert('Por favor, responde todas las preguntas antes de finalizar.');
            return;
          }

          // Guardar respuestas
          await handleFormSubmit(formData);
        }}
        type="button"
        disabled={isSaving}
        className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSaving ? 'Guardando...' : 'Finalizar'}
      </button>
    ),
    [currentStep, trigger, getValues, preguntas, isSaving]
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
        className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple cursor-pointer"
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
      className="px-20 py-3 rounded-xl font-extrabold bg-primary-purple text-white hover:bg-secondary-purple cursor-pointer"
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


  if (isInitializing) {
    return (
      <div className="flex flex-col gap-4 p-6 items-center justify-center">
        <p className="text-gray-500">Inicializando cuestionario...</p>
      </div>
    );
  }

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

