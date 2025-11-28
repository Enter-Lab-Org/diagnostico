"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SuccessLogin from "../components/SuccessLogin";


const RegistroLoginPage = () => {
    const router = useRouter();
    const [registroSuccess, setRegistroSuccess] = useState(false);
    const [formData, setFormData] = useState({
        nombres: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        curp: "",
        sexo: "",
        fechaNacimiento: "",
        entidadFederativaNacimiento: "",
        municipioResidencia: "",
        entidadFederativaResidencia: "",
        calle: "",
        numeroExterior: "",
        numeroInterior: "",
        codigoPostal: "",
        whatsapp: "",
        correoElectronico: "",
        perfil: "",
        areaConocimiento: ""
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

    useEffect(() => {
        if (registroSuccess) {
            const timer = setTimeout(() => {
                router.push(APP_ROUTES.REGISTRO_EMPRESAS);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [registroSuccess, router]);

    return (
        <>
            {registroSuccess ? (
                <SuccessLogin message="Cuenta creada correctamente" />
            ) : (
                <div className="md:mx-10 flex flex-col bg-blue-50 rounded-xl align-center justify-center items-center p-2 md:p-14">
                    <img className="w-32" src="/assets/logo.svg" alt="logo" />
                    <div className="flex flex-col gap-5">
                        <form className="flex flex-col md:grid md:grid-cols-2 gap-4 w-80 md:w-full mt-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nombres"
                                placeholder="Nombre(s)"
                                value={formData.nombres}
                                onChange={handleChange}
                                className="w-full md:col-span-2 p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="apellidoPaterno"
                                placeholder="Primer apellido"
                                value={formData.apellidoPaterno}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="apellidoMaterno"
                                placeholder="Segundo apellido"
                                value={formData.apellidoMaterno}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="curp"
                                placeholder="CURP"
                                value={formData.curp}
                                onChange={handleChange}
                                className="w-full md:col-span-2 p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <select
                                name="sexo"
                                value={formData.sexo}
                                onChange={handleChange}
                                    className="w-full p-2 rounded-md bg-gray-300 text-gray-500 placeholder__montserrat border-0"
                            >
                                <option value="">Sexo</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Prefiero no mencionarlo">Prefiero no mencionarlo</option>
                            </select>
                            <input
                                type="date"
                                name="fechaNacimiento"
                                placeholder="Fecha de nacimiento"
                                value={formData.fechaNacimiento}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="entidadFederativaNacimiento"
                                placeholder="Entidad federativa de nacimiento"
                                value={formData.entidadFederativaNacimiento}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="municipioResidencia"
                                placeholder="Municipio de residencia"
                                value={formData.municipioResidencia}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="entidadFederativaResidencia"
                                placeholder="Entidad federativa de residencia"
                                value={formData.entidadFederativaResidencia}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="calle"
                                placeholder="Calle"
                                value={formData.calle}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="numeroExterior"
                                placeholder="No. Exterior"
                                value={formData.numeroExterior}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="numeroInterior"
                                placeholder="No. Interior"
                                value={formData.numeroInterior}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="codigoPostal"
                                placeholder="C.P."
                                value={formData.codigoPostal}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="tel"
                                name="whatsapp"
                                placeholder="Whatsapp (10 dígitos)"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                maxLength={10}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="email"
                                name="correoElectronico"
                                placeholder="Correo electrónico"
                                value={formData.correoElectronico}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <select
                                name="perfil"
                                value={formData.perfil}
                                onChange={handleChange}
                                className="w-full p-2 rounded-md bg-gray-300 text-gray-500 placeholder__montserrat border-0"
                            >
                                <option value="">Perfil (Estudiante superior o universitario)</option>
                                <option value="Consultor(a)">Consultor(a)</option>
                                <option value="Estudiante">Estudiante</option>
                                <option value="Emprendedor(a)">Emprendedor(a)</option>
                                <option value="Empleado(a)">Empleado(a)</option>
                                <option value="Dueño(a)">Dueño(a)</option>
                                <option value="Otro">Otro</option>
                            </select>
                            <input
                                type="text"
                                name="areaConocimiento"
                                placeholder="Área del conocimiento"
                                value={formData.areaConocimiento}
                                onChange={handleChange}
                                className="w-full md:col-span-2 p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <button
                                type="submit"
                                    className="md:col-span-2 buttonPurple2 subTitle cursor-pointer text-white p-2 rounded-xl border-2 w-full mt-3"
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