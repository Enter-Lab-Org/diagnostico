import Link from "next/link"

const routes = [
    {
        label: "Iniciar Diagnóstico",
        href: "/iniciar-diagnostico"
    },
    {
        label: "¿Qué es la plataforma?",
        href: "/que-es-la-plataforma"
    },
    {
        label: "¿Cómo funciona la plataforma?",
        href: "/como-funciona-la-plataforma"
    },
    {
        label: "¿Que resultados ofrece?",
        href: "/que-resultados-ofrece"
    },
    {
        label: "Beneficios del diagnóstico",
        href: "/beneficios"
    },
    {
        label: "Glosario",
        href: "/glosario"
    },
]

const Routes = () => {
    return (
        <>
            <div className="flex items-center gap-4 text-sm font-medium text-neutral-600"></div>
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className="transition-colors hover:text-neutral-900">
                    {route.label}
                </Link>
            ))}
        </>
    );
}

export default Routes;