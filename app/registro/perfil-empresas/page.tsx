'use client';

import { APP_ROUTES } from '@/app/router/app.routes';
import { empresasService, TamanoEmpresa } from '@/app/lib/api/empresas.service';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { User } from '@/app/lib/api/auth.service';

const PerfilEmpresasPage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    
    const [razonSocial, setRazonSocial] = useState('');
    const [rfc, setRfc] = useState('');
    const [tamanoEmpresa, setTamanoEmpresa] = useState<TamanoEmpresa | ''>('');
    const [actividad, setActividad] = useState('');
    const [pais, setPais] = useState('');
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');

    useEffect(() => {
        // Obtener el usuario del localStorage
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                try {
                    const userData = JSON.parse(userStr) as User;
                    setUser(userData);
                } catch (e) {
                    console.error('Error al parsear usuario:', e);
                    setError('Error al obtener información del usuario. Por favor, inicia sesión nuevamente.');
                }
            } else {
                setError('No hay usuario logueado. Por favor, inicia sesión.');
            }
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validación básica
        if (!razonSocial.trim() || !rfc.trim() || !tamanoEmpresa || !actividad.trim() || 
            !pais.trim() || !estado.trim() || !municipio.trim()) {
            setError('Por favor, completa todos los campos obligatorios.');
            return;
        }

        if (!user) {
            setError('No hay usuario logueado. Por favor, inicia sesión.');
            return;
        }

        // Validar RFC (12-13 caracteres)
        if (rfc.length < 12 || rfc.length > 13) {
            setError('El RFC debe tener entre 12 y 13 caracteres.');
            return;
        }

        setIsLoading(true);

        try {
            await empresasService.create({
                razonSocial: razonSocial.trim(),
                rfc: rfc.trim().toUpperCase(),
                tamano: tamanoEmpresa as TamanoEmpresa,
                actividad: actividad.trim(),
                pais: pais.trim(),
                estado: estado.trim(),
                municipio: municipio.trim(),
                userId: user.id,
            });

            // Redirigir después de crear la empresa exitosamente
            router.push(APP_ROUTES.INICIAR_DIAGNOSTICO);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error al crear la empresa. Por favor, intenta nuevamente.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 text-gray-400">
            <h1 className=" text-2xl font-extrabold text-center cardsTitle">Perfil de empresas</h1>
            <p className="textRegular textGray">En esta sección puedes medir el nivel de digitalización de una empresa u organización en la que participes, con el objetivo de poder plantear una ruta de capacitación y digitalización, de manera estructurada.</p>
            <p className="textRegular textGray">Cada dos meses podrás hacer un test para una misma empresa. Puedes agregar diferentes empresas u organizaciones en las que participes.</p>
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-5">
                <input 
                    type="text" 
                    placeholder="Razón social *" 
                    className="col-span-3 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    value={razonSocial}
                    onChange={(e) => setRazonSocial(e.target.value)}
                    disabled={isLoading || !user}
                    required
                />
                <input 
                    type="text" 
                    placeholder="RFC *" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    value={rfc}
                    onChange={(e) => setRfc(e.target.value.toUpperCase())}
                    disabled={isLoading || !user}
                    maxLength={13}
                    required
                />
                <select
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 text-gray-700 placeholder__montserrat border-0"
                    value={tamanoEmpresa}
                    onChange={(e) => setTamanoEmpresa(e.target.value as TamanoEmpresa)}
                    disabled={isLoading || !user}
                    required
                >
                    <option value="">Tamaño de la empresa *</option>
                    <option value="MICRO">Micro</option>
                    <option value="PEQUENA">Pequeña</option>
                    <option value="MEDIANA">Mediana</option>
                    <option value="GRANDE">Grande</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Actividad *" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    value={actividad}
                    onChange={(e) => setActividad(e.target.value)}
                    disabled={isLoading || !user}
                    required
                />
                <input 
                    type="text" 
                    placeholder="País *" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    disabled={isLoading || !user}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Estado *" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    disabled={isLoading || !user}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Municipio *" 
                    className="col-span-3 md:col-span-1 w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder__montserrat border-0" 
                    value={municipio}
                    onChange={(e) => setMunicipio(e.target.value)}
                    disabled={isLoading || !user}
                    required
                />
               
                <button 
                    type="submit"
                    disabled={isLoading || !user}
                    className="buttonPurple1 subTitle text-white p-2 text-center rounded-xl border-2 col-span-3 md:col-span-1 w-full font-extrabold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Creando...' : 'Continuar'}
                </button>
            </form>
            <p className="text-sm text-gray-400">Los campos con * son obligatorios</p>
        </div>
    );
}

export default PerfilEmpresasPage;