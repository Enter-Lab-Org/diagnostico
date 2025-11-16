import Link from "next/link";
import { APP_ROUTES } from "../router/app.routes";


const PerfilEmpresasPage = () => {
    return (

        <div className="flex flex-col gap-5 text-gray-400">
            <h1 className=" text-2xl font-extrabold text-center">Perfil de empresas</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p>Commodo veniam nisi id sint ipsum adipisicing nulla ut quis consequat. Consectetur adipisicing aliquip adipisicing ullamco. Consectetur aute voluptate veniam consequat aute. Dolore ut duis amet anim dolore ex tempor commodo dolor excepteur dolore.</p>
            <div className="flex flex-row gap-9 justify-center items-center">
                <Link href={APP_ROUTES.PERFIL_EMPRESAS} className="text-center p-2 rounded-xl border-indigo-900 text-indigo-900 border-2 px-24 font-extrabold">Registrar nueva empresa</Link>
                <button className="p-2 rounded-xl border-indigo-900 text-indigo-900 border-2 px-24 font-extrabold">Empresas registradas</button>
            </div>
        </div>
    );
}

export default PerfilEmpresasPage;