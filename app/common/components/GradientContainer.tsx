interface GradientContainerProps {
    children: React.ReactNode;
}
export const GradientContainer = ({ children }: GradientContainerProps) => {
    return (
        <div className="rounded-3xl bg-linear-to-r from-cyan-300 to-blue-950 py-6 px-24 flex flex-col gap-5 align-center justify-center">
            {children}
        </div>
    );
}

