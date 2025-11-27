'use client';

import { APP_ROUTES } from '@/app/router/app.routes';
import Link from 'next/link';
import { useState } from 'react';

const PerfilEmpresasPage = () => {
    const [isEmpresasPrueba, setIsEmpresasPrueba] = useState(false);
    const [razonSocial, setRazonSocial] = useState('');
    const [rfc, setRfc] = useState('');
    const [tamanoEmpresa, setTamanoEmpresa] = useState('');
    const [actividad, setActividad] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');

    return (
        <div className="flex flex-col gap-5 text-gray-400">
            <h1 className=" text-2xl font-extrabold text-center cardsTitle">Perfil de empresas</h1>
            <p  className="textRegular textGray">En esta sección puedes medir el nivel de digitalización de una empresa u organización en la que participes, con el objetivo de poder plantear una ruta de capacitación y digitalización, de manera estructurada.</p>
            <p  className="textRegular textGray">Cada dos meses podrás hacer un test para una misma empresa. Puedes agregar diferentes empresas u organizaciones en las que participes.</p>
            <div className="grid grid-cols-3 gap-5">
                <input 
                    type="text" 
                    placeholder="Razón social" 
                    className="col-span-3 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    disabled={isEmpresasPrueba}
                    value={razonSocial}
                    onChange={(e) => setRazonSocial(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="RFC" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    disabled={isEmpresasPrueba}
                    value={rfc}
                    onChange={(e) => setRfc(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Tamaño de la empresa" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    disabled={isEmpresasPrueba}
                    value={tamanoEmpresa}
                    onChange={(e) => setTamanoEmpresa(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Actividad" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    disabled={isEmpresasPrueba}
                    value={actividad}
                    onChange={(e) => setActividad(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="País" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    disabled={isEmpresasPrueba}
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Estado" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    disabled={isEmpresasPrueba}
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Municipio" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    disabled={isEmpresasPrueba}
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                />
               
                <Link href={APP_ROUTES.INICIAR_DIAGNOSTICO} className="buttonPurple1 subTitle text-white p-2 text-center rounded-xl border-2 col-span-3 md:col-span-1 w-full font-extrabold">Continuar</Link>
            </div>
            <p className="text-sm text-gray-400">Los campos con ** son obligatorios</p>
            <p className="text-sm text-gray-400">&quot;**&quot; Auto rellena los campos, pero el resultado final sera temporal</p>
            
        </div>
    );
}

export default PerfilEmpresasPage;