"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import Link from "next/link";
import { useState } from "react";
import SuccessLogin from "../components/SuccessLogin";


const RegistroLoginPage = () => {
    const [registroSuccess, setRegistroSuccess] = useState(false);
    const [formData, setFormData] = useState({
        nombreUsuario: "",
        correo: "",
        password: "",
        confirmarContraseña: "",
        razonSocial: "",
        rfc: "",
        tamanoEmpresa: "",
        actividad: "",
        pais: "",
        estado: "",
        municipio: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar validación y lógica de envío
        setRegistroSuccess(true);
    };

    return (
        <>
            {registroSuccess ? <Link href={APP_ROUTES.REGISTRO_EMPRESAS}>
                <SuccessLogin message="Cuenta creada correctamente" />
            </Link> : (
                <div className="mx-60 flex flex-col bg-blue-50 rounded-xl align-center justify-center items-center p-14">
                    <img className="w-32" src="/assets/logo.svg" alt="logo" />
                    <div className="flex flex-col gap-5">
                        <form className="flex flex-col gap-4 w-80 mt-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nombreUsuario"
                                placeholder="Nombre de usuario"
                                value={formData.nombreUsuario}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="email"
                                name="correo"
                                placeholder="Correo"
                                value={formData.correo}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="password"
                                name="contraseña"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="password"
                                name="confirmarContraseña"
                                placeholder="Confirmar contraseña"
                                value={formData.confirmarContraseña}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="text"
                                name="razonSocial"
                                placeholder="Razón social"
                                value={formData.razonSocial}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="text"
                                name="rfc"
                                placeholder="RFC"
                                value={formData.rfc}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="text"
                                name="tamanoEmpresa"
                                placeholder="Tamaño de la empresa"
                                value={formData.tamanoEmpresa}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="text"
                                name="actividad"
                                placeholder="Actividad"
                                value={formData.actividad}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="text"
                                name="pais"
                                placeholder="País"
                                value={formData.pais}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="text"
                                name="estado"
                                placeholder="Estado"
                                value={formData.estado}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <input
                                type="text"
                                name="municipio"
                                placeholder="Municipio"
                                value={formData.municipio}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
                            />
                            <button
                                type="submit"
                                className="buttonPurple2 subTitle text-white p-2 rounded-xl border-2 w-full font-extrabold mt-3"
                            >
                                Crear cuenta
                            </button>
                        </form>
                        <p className="text-gray-400 text-xs font-extrabold text-center underline">Cancelar</p>
                    </div>
                </div>
            )}
        </>
    );
}


export default RegistroLoginPage;