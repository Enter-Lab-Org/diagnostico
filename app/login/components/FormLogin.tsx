'use client';

import { useLogin } from "@/app/lib/hooks/useLogin";
import { APP_ROUTES } from "@/app/router/app.routes";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "El email es requerido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface FormLoginProps {
  onSuccess?: (data: { access_token: string; user: { id: string; email: string; name?: string } }) => void;
}

export const FormLogin = ({ onSuccess }: FormLoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await loginMutation.mutateAsync(data);
      if (onSuccess) {
        onSuccess(result);
      }
    } catch (error) {
      // El error se maneja en el componente padre o se muestra aquí
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="flex flex-col bg-blue-50 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Formulario de login*/}
        <div className="flex flex-col align-center justify-center items-center p-14">
          <img className="w-32" src="/assets/logo.svg" alt="logo" />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full mt-10">
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                {...register("password")}
                className="w-full p-2 rounded-md bg-gray-300 placeholder:text-gray-500 placeholder:font-extrabold border-0"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            {loginMutation.isError && (
              <p className="text-red-500 text-sm text-center">
                {loginMutation.error?.message || "Error al iniciar sesión"}
              </p>
            )}
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="buttonPurple2 subTitle cursor-pointer text-white p-2 rounded-xl border-2 w-full font-extrabold botonDiagnostico bounceButton disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loginMutation.isPending ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>
            <Link href="/recuperar-contrasena" className="text-gray-500 text-sm font-extrabold text-center underline">
              Olvide mi contraseña
            </Link>
          </form>
        </div>
        {/* Seccion Registro */}
        <div className="flex flex-col bg-gray-300 rounded-xl align-center justify-center items-center p-14 gap-9">
          <h1 className="subTitle textPurple text-2xl font-extrabold text-center">Empieza tu diagnóstico</h1>
          <p className="textRegular">
            Aute ad irure sit esse reprehenderit commodo eiusmod officia enim laboris. Labore in amet ipsum mollit ut. Dolore dolor est magna veniam non minim enim exercitation anim anim fugiat enim culpa. In exercitation quis nisi aute laborum do. Aute cupidatat in proident incididunt consectetur Lorem elit aute velit incididunt velit.
          </p>
          <Link href={APP_ROUTES.REGISTRO_LOGIN} className="subTitle textPurple cursor-pointer botonDiagnosticoLine text-blue-900 p-2 w-full font-extrabold text-center bounceButton">
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
}

