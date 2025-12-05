"use client";

import { APP_ROUTES } from "@/app/router/app.routes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Verificar si existe el token en localStorage
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("access_token");
        if (token) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          // Redirigir al login si no hay token
          router.push(APP_ROUTES.LOGIN);
        }
      }
    };

    checkAuth();
  }, [router, pathname]);

  // Mostrar loading mientras se verifica la autenticación
  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  // Si no está autenticado, no renderizar nada (ya se redirigió)
  if (!isAuthenticated) {
    return null;
  }

  // Si está autenticado, renderizar el contenido protegido
  return <>{children}</>;
};

