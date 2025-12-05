"use client";
import { APP_ROUTES } from "@/app/router/app.routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SuccessLogin from "../components/SuccessLogin";
import { authService } from "@/app/lib/api/auth.service";


const RegistroLoginPage = () => {
    const router = useRouter();
    const [registroSuccess, setRegistroSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
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
        password: "",
        confirmPassword: "",
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

    const mapSexoToBackend = (sexo: string): 'MASCULINO' | 'FEMENINO' | 'PREFIERO_NO_MENCIONARLO' => {
        switch (sexo) {
            case 'Masculino':
                return 'MASCULINO';
            case 'Femenino':
                return 'FEMENINO';
            case 'Prefiero no mencionarlo':
                return 'PREFIERO_NO_MENCIONARLO';
            default:
                return 'PREFIERO_NO_MENCIONARLO';
        }
    };

    const mapPerfilToBackend = (perfil: string): 'ESTUDIANTE_SUPERIOR_UNIVERSITARIO' | 'CONSULTOR' | 'ESTUDIANTE' | 'EMPRENDEDOR' | 'EMPLEADO' | 'DUENO' | 'OTRO' => {
        switch (perfil) {
            case 'Estudiante superior o universitario':
                return 'ESTUDIANTE_SUPERIOR_UNIVERSITARIO';
            case 'Consultor(a)':
                return 'CONSULTOR';
            case 'Estudiante':
                return 'ESTUDIANTE';
            case 'Emprendedor(a)':
                return 'EMPRENDEDOR';
            case 'Empleado(a)':
                return 'EMPLEADO';
            case 'Dueño(a)':
                return 'DUENO';
            case 'Otro':
                return 'OTRO';
            default:
                return 'OTRO';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        // Validaciones básicas
        if (formData.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            setIsLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden');
            setIsLoading(false);
            return;
        }

        if (!formData.sexo || !formData.perfil) {
            setError('Por favor completa todos los campos requeridos');
            setIsLoading(false);
            return;
        }

        try {
            // Mapear los datos del formulario al formato del backend
            const registerData = {
                email: formData.correoElectronico,
                password: formData.password,
                nombre: formData.nombres,
                apellidoPaterno: formData.apellidoPaterno,
                apellidoMaterno: formData.apellidoMaterno,
                curp: formData.curp || undefined,
                sexo: mapSexoToBackend(formData.sexo),
                fechaNacimiento: formData.fechaNacimiento,
                entidadFederativaNacimiento: formData.entidadFederativaNacimiento,
                municipioResidencia: formData.municipioResidencia,
                entidadFederativaResidencia: formData.entidadFederativaResidencia,
                calle: formData.calle,
                numeroExterior: formData.numeroExterior,
                numeroInterior: formData.numeroInterior || undefined,
                codigoPostal: formData.codigoPostal,
                whatsapp: formData.whatsapp,
                perfil: mapPerfilToBackend(formData.perfil),
                areaConocimiento: formData.areaConocimiento,
            };

            const response = await authService.register(registerData);

            // Guardar el token en localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem('access_token', response.access_token);
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            setRegistroSuccess(true);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            setError(err.message || 'Error al crear la cuenta. Por favor intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            {registroSuccess ? (
                <SuccessLogin message="Cuenta creada correctamente" route={APP_ROUTES.REGISTRO_EMPRESAS} />
            ) : (
                <div className="md:mx-10 flex flex-col bg-blue-50 rounded-xl align-center justify-center items-center p-2 md:p-14">
                    <img className="w-32" src="/assets/logo.svg" alt="logo" />
                    <div className="flex flex-col gap-5">
                        {error && (
                            <div className="w-80 md:w-full p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                                {error}
                            </div>
                        )}
                        <form className="flex flex-col md:grid md:grid-cols-2 gap-4 w-80 md:w-full mt-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nombres"
                                placeholder="Nombre(s)"
                                value={formData.nombres}
                                onChange={handleChange}
                                required
                                className="w-full md:col-span-2 p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="apellidoPaterno"
                                placeholder="Primer apellido"
                                value={formData.apellidoPaterno}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="apellidoMaterno"
                                placeholder="Segundo apellido"
                                value={formData.apellidoMaterno}
                                onChange={handleChange}
                                required
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
                                required
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
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="entidadFederativaNacimiento"
                                placeholder="Entidad federativa de nacimiento"
                                value={formData.entidadFederativaNacimiento}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="municipioResidencia"
                                placeholder="Municipio de residencia"
                                value={formData.municipioResidencia}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="entidadFederativaResidencia"
                                placeholder="Entidad federativa de residencia"
                                value={formData.entidadFederativaResidencia}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="calle"
                                placeholder="Calle"
                                value={formData.calle}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="text"
                                name="numeroExterior"
                                placeholder="No. Exterior"
                                value={formData.numeroExterior}
                                onChange={handleChange}
                                required
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
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="tel"
                                name="whatsapp"
                                placeholder="Whatsapp (10 dígitos)"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                maxLength={10}
                                required
                                pattern="[0-9]{10}"
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="email"
                                name="correoElectronico"
                                placeholder="Correo electrónico"
                                value={formData.correoElectronico}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña (mínimo 6 caracteres)"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmar contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                minLength={6}
                                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <select
                                name="perfil"
                                value={formData.perfil}
                                onChange={handleChange}
                                required
                                className="w-full p-2 rounded-md bg-gray-300 text-gray-500 placeholder__montserrat border-0"
                            >
                                <option value="">Perfil</option>
                                <option value="Estudiante superior o universitario">Estudiante superior o universitario</option>
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
                                required
                                className="w-full md:col-span-2 p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="md:col-span-2 buttonPurple2 subTitle cursor-pointer text-white p-2 rounded-xl border-2 w-full mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
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