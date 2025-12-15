'use client';

import { calculatePercentage } from '@/app/helpers';
import { User } from '@/app/lib/api/auth.service';
import { diagnosticosService } from '@/app/lib/api/diagnosticos.service';
import { Empresa, empresasService } from '@/app/lib/api/empresas.service';
import { APP_ROUTES } from '@/app/router/app.routes';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { EmpresaRecordItem } from './components/EmpresaRecordItem';

const EmpresasRegistradasPage = () => {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [empresaPorcentajes, setEmpresaPorcentajes] = useState<Record<string, number>>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEmpresas = useCallback(async () => {
        setIsLoading(true);
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                try {
                    const userData = JSON.parse(userStr) as User;

                    const empresasData = await empresasService.findByUserId(userData.id);
                    setEmpresas(empresasData);

                    const porcentajes: Record<string, number> = {};
                    await Promise.all(
                        empresasData.map(async (empresa) => {
                            try {
                                const progreso = await diagnosticosService.getProgreso(empresa.id);
                                const completados = progreso.cuestionarios.filter((c) => c.completado).length;
                                porcentajes[empresa.id] = calculatePercentage(completados, 7);
                            } catch (progressError) {
                                console.error('Error al obtener progreso de la empresa:', progressError);
                            }
                        })
                    );
                    setEmpresaPorcentajes(porcentajes);
                } catch (e) {
                    console.error('Error al obtener empresas:', e);
                    setError('Error al obtener las empresas. Por favor, intenta nuevamente.');
                } finally {
                    setIsLoading(false);
                }
            } else {
                setError('No hay usuario logueado. Por favor, inicia sesión.');
                setIsLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        fetchEmpresas();
    }, [fetchEmpresas]);

    if (isLoading) {
        return (
            <div className="flex flex-col gap-5 text-gray-400">
                <h1 className="mainTitle">Mis empresas</h1>
                <p>Cargando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col gap-5 text-gray-400">
                <h1 className="mainTitle">Mis empresas</h1>
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5 text-gray-400">
            {empresas.length === 0 ? (
                <div className="flex flex-col gap-4 items-center">
                    <p className="textRegular text-gray-500">No tienes empresas registradas.</p>
                    <Link 
                        href={APP_ROUTES.PERFIL_EMPRESAS} 
                        className="subTitle textPurple botonPurpleLine text-center p-2 px-4 md:px-24"
                    >
                        Registrar empresa
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    {empresas.map((empresa) => (
                        <EmpresaRecordItem
                            key={empresa.id}
                            empresa={empresa}
                            porcentaje={empresaPorcentajes[empresa.id]}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default EmpresasRegistradasPage;