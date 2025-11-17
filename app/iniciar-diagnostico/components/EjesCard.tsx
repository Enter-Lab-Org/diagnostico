interface EjesCardProps {
    content: string | React.ReactNode;
    imageUrl: string;
}
export const EjesCard = ({ content, imageUrl }: EjesCardProps) => {
    return (
        <div className="flex flex-col gap-2  bg-blue-50 p-4 rounded-xl align-center justify-center items-center">
            <img className="w-32" src={imageUrl} alt="Eje 1" />
            <p className="text-sm text-center ejesCards--Text">
                {content}
            </p>
        </div>
    );
}

