import { APP_ROUTES } from "@/app/router/app.routes";
import Link from "next/link";

export const FormLogin = () => {
    return (
        <div className="flex flex-col bg-blue-50 rounded-xl">
            <div className="grid grid-cols-2">
                {/* Formulario de login*/}
                <div className="flex flex-col align-center justify-center items-center p-14">
                    <img className="w-32" src="assets/logo.svg" alt="logo" />
                    <form className="flex flex-col gap-4 w-full mt-10">
                        <input type="email" placeholder="Email" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                        <input type="password" placeholder="Contraseña" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" />
                        <button type="submit" className="buttonPurple2 subTitle cursor-pointer text-white p-2 rounded-xl border-2 w-full font-extrabold botonDiagnostico bounceButton">Iniciar sesión</button>
                        <Link href="/recuperar-contrasena" className="text-gray-500 text-sm font-extrabold text-center underline">Olvide mi contraseña</Link>
                    </form>
                </div>
                {/* Seccion Registro */}
                <div className="flex flex-col bg-gray-300 rounded-xl align-center justify-center items-center p-14 gap-9">
                    <h1 className="subTitle textPurple text-2xl font-extrabold text-center">Empieza tu diagnóstico</h1>
                    <p className="textRegular">
                        Aute ad irure sit esse reprehenderit commodo eiusmod officia enim laboris. Labore in amet ipsum mollit ut. Dolore dolor est magna veniam non minim enim exercitation anim anim fugiat enim culpa. In exercitation quis nisi aute laborum do. Aute cupidatat in proident incididunt consectetur Lorem elit aute velit incididunt velit.
                    </p>
                    <Link href={APP_ROUTES.REGISTRO_LOGIN} className="subTitle textPurple cursor-pointer botonDiagnosticoLine text-blue-900  p-2 w-full font-extrabold text-center bounceButton">Registrate</Link>
                </div>
            </div>
        </div>
    );
}

