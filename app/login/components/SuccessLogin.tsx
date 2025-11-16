const SuccessLogin = ({ message }: { message: React.ReactNode }) => {
    return (
        <div className="mx-60 flex flex-col bg-blue-50 rounded-xl align-center justify-center items-center p-14">
            <img className="w-32" src="/assets/logo.svg" alt="logo" />
            <img src="/assets/success-login.svg" alt="success-login" />
            <p className="text-gray-400 text-xl font-extrabold text-center">{message}</p>
        </div>
    );
}

export default SuccessLogin;