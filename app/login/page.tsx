"use client";
import { LoginResponse } from "@/app/lib/api/auth.service";

import { useState } from "react";
import { APP_ROUTES } from "../router/app.routes";
import { FormLogin } from "./components/FormLogin";
import SuccessLogin from "./components/SuccessLogin";

const LoginPage = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginData, setLoginData] = useState<LoginResponse | null>(null);

  const handleLoginSuccess = (data: LoginResponse) => {
    // Guardar el token en localStorage o en un estado global
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    setLoginData(data);
    setLoginSuccess(true);
  };



  return (
    <>
      <h1 className="text-white text-2xl font-extrabold text-center boxTitle">
        Inicia sesion o registrate para realizar tu diagnóstico
      </h1>
      {loginSuccess ? (
        <SuccessLogin message="Acceso correcto" route={APP_ROUTES.INICIAR_DIAGNOSTICO} />
      ) : (
        <FormLogin onSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default LoginPage;
