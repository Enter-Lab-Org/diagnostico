"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessLogin = ({ message, route }: { message: React.ReactNode, route: string }) => {
    const router = useRouter();
    useEffect(() => {

        const timer = setTimeout(() => {
            router.push(route);
        }, 1000);

        return () => clearTimeout(timer);

    }, []);
    
    return (
        <div className="md:mx-60 flex flex-col bg-blue-50 rounded-xl align-center justify-center items-center p-14">
            <img className="w-32" src="/assets/logo.svg" alt="logo" />
            <img className="mt-4 w-32 md:w-20" src="/assets/success.svg" alt="success-login" />
            <p className="mt-4 text-gray-400 text-xl font-extrabold text-center">{message}</p>
        </div>
    );
}

export default SuccessLogin;