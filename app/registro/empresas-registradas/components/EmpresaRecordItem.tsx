import { Empresa } from "@/app/lib/api/empresas.service";
import { APP_ROUTES } from "@/app/router/app.routes";
import Link from "next/link";

export const EmpresaRecordItem = ({ empresa }: { empresa: Empresa }	) => {
    return (
        <div
        key={empresa.id}
        className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-lg border-2"
        style={{ borderColor: 'rgba(123, 84, 158, 0.4)' }}
    >
        {/* Nombre de la empresa */}
        <div className="flex-1 min-w-0 text-center md:text-left">
            <p className="textPurplePrimary textRegular text-lg">
                --{empresa.razonSocial}--
            </p>
        </div>

        {/* Botón Consultar respuestas */}
        <Link
            href={`${APP_ROUTES.INICIAR_DIAGNOSTICO}?empresaId=${empresa.id}`}
            className="buttonPurple1 text-white textRegular px-6 py-2 rounded-lg font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
        >
            Consultar respuestas
        </Link>

        {/* Botón Editar información de la empresa */}
        <Link
            href={`/registro/perfil-empresas?empresaId=${empresa.id}`}
            className="botonPurpleLine textPurplePrimary textRegular px-4 py-2 rounded-lg font-medium bg-white hover:bg-primary-purple hover:text-white transition-colors text-center whitespace-nowrap"
        >
            Editar información de la empresa
        </Link>
    </div>
    );
}

