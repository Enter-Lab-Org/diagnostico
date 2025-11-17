const RegistroLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-gray-200-50 rounded-xl shadow-xl w-full mx-auto p-12 gap-5 text-gray-500 cardsBackground">
            {children}
        </div>
    );
}

export default RegistroLayout;