import Link from "next/link";

const ResgistroPage = () => {
    return (
        <div className="">
            <h1 className=" text-2xl font-extrabold text-center">Perfil de empresas</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p>Commodo veniam nisi id sint ipsum adipisicing nulla ut quis consequat. Consectetur adipisicing aliquip adipisicing ullamco. Consectetur aute voluptate veniam consequat aute. Dolore ut duis amet anim dolore ex tempor commodo dolor excepteur dolore.</p>
            <div className="flex flex-row gap-5">
                <Link href="/registro/perfil-empresas" className=" text-violet-400 p-2 rounded-xl border-violet-400 border-2 w-full font-extrabold text-center">Registrar nueva empresa</Link>
                <button className=" text-violet-400 p-2 rounded-xl border-violet-400 border-2 w-full font-extrabold">Empresas registradas</button>
            </div>
        </div>
    );
}

export default ResgistroPage;