import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Rutas protegidas que requieren autenticación
const protectedRoutes = [
  "/mis_empresas",
  "/iniciar-diagnostico",
  "/cuestionarios",
  "/registro",
];

// Rutas públicas que no requieren autenticación
const publicRoutes = ["/login", "/"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar si la ruta es protegida
  const isProtectedRoute = protectedRoutes.some((route) => {
    debugger;
    return pathname.startsWith(route);
  });

  // Verificar si la ruta es pública
  const isPublicRoute = publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(route)
  );

  // Si es una ruta protegida, verificar el token
  // Nota: En el middleware no podemos acceder a localStorage directamente
  // Por ahora, el componente ProtectedRoute maneja la verificación del token
  // Este middleware puede ser extendido en el futuro para verificar cookies
  // si se migra el token de localStorage a cookies httpOnly

  if (isProtectedRoute) {
    // El token se verifica en el cliente mediante ProtectedRoute
    // Si en el futuro se usa cookies, aquí se puede verificar:
    // const token = request.cookies.get('access_token');
    // if (!token) {
    //   return NextResponse.redirect(new URL('/login', request.url));
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};

