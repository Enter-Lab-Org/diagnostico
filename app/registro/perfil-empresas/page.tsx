const PerfilEmpresasPage = () => {
    return (
        <div className="flex flex-col gap-5 text-gray-400">
            <h1 className=" text-2xl font-extrabold text-center">Perfil de empresas</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p>Commodo veniam nisi id sint ipsum adipisicing nulla ut quis consequat. Consectetur adipisicing aliquip adipisicing ullamco. Consectetur aute voluptate veniam consequat aute. Dolore ut duis amet anim dolore ex tempor commodo dolor excepteur dolore.</p>
            <div className="grid grid-cols-3 gap-5">
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                <input type="text" placeholder="Nombre de la empresa" className="col-span-3 w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                <div className="flex items-center col-span-1">
                    <input
                        type="checkbox"
                        id="empresas-nacionales"
                        className="mr-2 accent-violet-400"
                    />
                    <label htmlFor="empresas-nacionales" className="font-medium ">
                        Empresas de prueba **
                    </label>
                </div>
                <button className="bg-violet-400 text-white p-2 rounded-xl border-violet-400 border-2 w-full font-extrabold">Continuar</button>
            </div>
            <p className="text-sm text-gray-400">Los campos con ** son obligatorios</p>
            <p className="text-sm text-gray-400">&quot;**&quot; Auto rellena los campos, pero el seultado final sera temporal</p>
            
        </div>
    );
}

export default PerfilEmpresasPage;