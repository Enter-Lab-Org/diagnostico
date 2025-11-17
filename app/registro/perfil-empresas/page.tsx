'use client';

import { APP_ROUTES } from '@/app/router/app.routes';
import Link from 'next/link';
import { useState } from 'react';

const PerfilEmpresasPage = () => {
    const [isEmpresasPrueba, setIsEmpresasPrueba] = useState(false);

    return (
        <div className="flex flex-col gap-5 text-gray-400">
            <h1 className=" text-2xl font-extrabold text-center cardsTitle">Perfil de empresas</h1>
            <p className='textRegular textGray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p className='textRegular textGray'>Commodo veniam nisi id sint ipsum adipisicing nulla ut quis consequat. Consectetur adipisicing aliquip adipisicing ullamco. Consectetur aute voluptate veniam consequat aute. Dolore ut duis amet anim dolore ex tempor commodo dolor excepteur dolore.</p>
            <div className="grid grid-cols-3 gap-5">
                <input  type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" disabled={isEmpresasPrueba} />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" disabled={isEmpresasPrueba} />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" disabled={isEmpresasPrueba} />
                <input type="text" placeholder="Nombre de la empresa" className="col-span-3 w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" disabled={isEmpresasPrueba} />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" disabled={isEmpresasPrueba} />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" disabled={isEmpresasPrueba} />
                <input type="text" placeholder="Nombre de la empresa" className="w-full p-2 rounded-md  bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0" disabled={isEmpresasPrueba} />
                <div className="flex items-center col-span-1">
                    <input
                        type="checkbox"
                        id="empresas-prueba"
                        className="mr-2 accent-violet-400"
                        checked={isEmpresasPrueba}
                        onChange={(e) => setIsEmpresasPrueba(e.target.checked)}
                    />
                    <label htmlFor="empresas-prueba" className="font-medium ">
                        Empresas de prueba **
                    </label>
                </div>
                <Link href={APP_ROUTES.INICIAR_DIAGNOSTICO} className="buttonPurple1 subTitle text-white p-2 text-center rounded-xl border-2 w-full font-extrabold">Continuar</Link>
            </div>
            <p className="text-sm text-gray-400">Los campos con ** son obligatorios</p>
            <p className="text-sm text-gray-400">&quot;**&quot; Auto rellena los campos, pero el resultado final sera temporal</p>
            
        </div>
    );
}

export default PerfilEmpresasPage;