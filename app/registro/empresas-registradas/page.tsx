'use client';

import { User } from '@/app/lib/api/auth.service';
import { Empresa, empresasService } from '@/app/lib/api/empresas.service';
import { useCallback, useEffect, useState } from 'react';
import { EmpresaRecordItem } from './components/EmpresaRecordItem';

const EmpresasRegistradasPage = () => {
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEmpresas = useCallback(async () => {
        if (typeof window !== 'undefined') {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                try {
                    const userData = JSON.parse(userStr) as User;

                    const empresasData = await empresasService.findByUserId(userData.id);
                    setEmpresas(empresasData);
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
                <p className="textRegular text-gray-500">No tienes empresas registradas.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {empresas.map((empresa) => (
                        <EmpresaRecordItem
                            key={empresa.id}
                            empresa={empresa}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default EmpresasRegistradasPage;