const ResgistroPage = () => {
    return (
        <div className="flex flex-col bg-gray-200-50 rounded-xl shadow-xl w-full mx-auto p-12 gap-5 text-gray-500">
            <h1 className=" text-2xl font-extrabold text-center">Perfil de empresas</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p>Commodo veniam nisi id sint ipsum adipisicing nulla ut quis consequat. Consectetur adipisicing aliquip adipisicing ullamco. Consectetur aute voluptate veniam consequat aute. Dolore ut duis amet anim dolore ex tempor commodo dolor excepteur dolore.</p>
            <div className="flex flex-row gap-5">
                <button className=" text-violet-400 p-2 rounded-xl border-violet-400 border-2 w-full font-extrabold">Registrar nueva empresa</button>
                <button className=" text-violet-400 p-2 rounded-xl border-violet-400 border-2 w-full font-extrabold">Empresas registradas</button>
            </div>
        </div>
    );
}

export default ResgistroPage;