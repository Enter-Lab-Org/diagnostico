import Link from "next/link";
import { APP_ROUTES } from "../router/app.routes";


const PerfilEmpresasPage = () => {
    return (

        <div className="flex flex-col gap-5 text-gray-400">
            
            <div className="flex flex-col md:flex-row gap-9 justify-center items-center">
                <Link href={APP_ROUTES.PERFIL_EMPRESAS} className="subTitle textPurple botonPurpleLine text-center p-2 px-4 md:px-24">Registrar nueva empresa</Link>
                <Link href={APP_ROUTES.EMPRESAS_REGISTRADAS} className="subTitle textPurple botonPurpleLine p-2 border-2 px-4 md:px-24">Empresas registradas</Link>
            </div>
        </div>
    );
}

export default PerfilEmpresasPage;