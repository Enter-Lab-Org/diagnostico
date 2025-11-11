const RegistroLoginPage = () => {
    return (
        <div className="mx-60 flex flex-col bg-blue-50 rounded-xl align-center justify-center items-center p-14">
            <img className="w-32" src="/assets/logo.svg" alt="logo" />
            <div className="flex flex-col gap-5">
                <form className="flex flex-col gap-4 w-80 mt-6">
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                    />
                    <input
                        type="email"
                        placeholder="Correo"
                        className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                    />
                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                    />
                    <button
                        type="submit"
                        className="bg-blue-900 text-white p-2 rounded-xl border-blue-900 border-2 w-full font-extrabold mt-3"
                    >
                        Crear cuenta
                    </button>
                </form>
                <p className="text-gray-400 text-xs font-extrabold text-center underline">Cancelar</p>
            </div>
        </div>
    );
}

export default RegistroLoginPage;