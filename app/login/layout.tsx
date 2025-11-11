import { GradientContainer } from "../common/components/GradientContainer";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <GradientContainer>
            {children}
        </GradientContainer>
    );
}

export default layout;