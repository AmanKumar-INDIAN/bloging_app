
function Heading({ title }: { title: string }) {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-20 w-30"
                src="/logo.png"
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-white md:text-black ">
                {/* Sign in to your account */} {title}
            </h2>
        </div>

    )
}

export default Heading