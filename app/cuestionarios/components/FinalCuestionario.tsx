export const FinalCuestionario = ({ nextStepButton }: { nextStepButton: React.ReactNode }) => {
    return (
        <div className="flex flex-col gap-4 p-6">
            <h2 className="cuestionariosQuestion">
                Gracias por tus respuestas, continua los ejes de diagnóstico pendientes para obtener  tu analisis completo.
            </h2>

            <div className="flex flex-row gap-3 items-center justify-center" >
                <img
                    alt="success_icon"
                    className="w-50 h-full"
                    src="/assets/success.svg" />
            </div>
            <div className="flex justify-center">
                {nextStepButton}
            </div>
        </div>
    );
}

