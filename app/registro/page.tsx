import Link from "next/link";
import { APP_ROUTES } from "../router/app.routes";


const PerfilEmpresasPage = () => {
    return (

        <div className="flex flex-col gap-5 text-gray-400">
            <h1 className=" text-2xl font-extrabold text-center cardsTitle">Perfil de empresas</h1>
            <p  className="textRegular textGray">En esta sección puedes medir el nivel de digitalización de una empresa u organización en la que participes, con el objetivo de poder plantear una ruta de capacitación y digitalización, de manera estructurada.</p>
            <p  className="textRegular textGray">Cada dos meses podrás hacer un test para una misma empresa. Puedes agregar diferentes empresas u organizaciones en las que participes.</p>
            <div className="flex flex-row gap-9 justify-center items-center">
                <Link href={APP_ROUTES.PERFIL_EMPRESAS} className="subTitle textPurple text-center p-2 rounded-xl border-indigo-900 text-indigo-900 border-2 px-24 font-extrabold">Registrar nueva empresa</Link>
                <button className="subTitle textPurple p-2 rounded-xl border-indigo-900 text-indigo-900 border-2 px-24 font-extrabold">Empresas registradas</button>
            </div>
        </div>
    );
}

export default PerfilEmpresasPage;