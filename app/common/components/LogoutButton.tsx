"use client";

import { APP_ROUTES } from "@/app/router/app.routes";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    try {
      localStorage.clear();
      router.push(APP_ROUTES.LOGIN);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl bg-[#7B549E] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#6a4788] focus:outline-none focus:ring-2 focus:ring-[#7B549E] focus:ring-offset-2"
    >
      Cerrar sesión
    </button>
  );
};
