
import { FormLogin } from "./components/FormLogin";
import SuccessLogin from "./components/SuccessLogin";

const login = false;

const LoginPage = () => {
  return <>
    <h1 className="text-white text-2xl font-extrabold text-center">Inicia sesion o registrate para realizar tu diagnóstico</h1>
    {login ? <SuccessLogin /> : <FormLogin />}
  </>;
};

export default LoginPage;
