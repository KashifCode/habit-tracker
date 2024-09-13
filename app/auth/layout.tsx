const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="h-full flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-cyan-600"
        >
            <div className="shadow-md rounded-xl bg-white flex items-center justify-center min-w-[90%] min-h-[85%]">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;