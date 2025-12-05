const RegistroLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-gray-200-50 rounded-xl shadow-xl w-full mx-auto p-12 gap-5 text-gray-500 cardsBackground">
            <h1 className=" text-2xl font-extrabold text-center cardsTitle">Perfil de empresas</h1>
            <p className="textRegular textGray">En esta sección puedes medir el nivel de digitalización de una empresa u organización en la que participes, con el objetivo de poder plantear una ruta de capacitación y digitalización, de manera estructurada.</p>
            <p className="textRegular textGray">Cada dos meses podrás hacer un test para una misma empresa. Puedes agregar diferentes empresas u organizaciones en las que participes.</p>
            {children}
        </div>
    );
}

export default RegistroLayout;