"use client";
import { useState } from "react";
import { FormLogin } from "./components/FormLogin";
import SuccessLogin from "./components/SuccessLogin";


const LoginPage = () => {
  const [login, setLogin] = useState(false);
  return <>
    <h1 className="text-white text-2xl font-extrabold text-center boxTitle">Inicia sesion o registrate para realizar tu diagnóstico</h1>
    {login ? <SuccessLogin message="Acceso correcto" /> : <FormLogin />}
  </>;
};

export default LoginPage;
