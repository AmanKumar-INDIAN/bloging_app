


interface ButtonProps {
    title: string,
    onclick?: () => void,
    type:"button" | "submit" | "reset" | undefined
}

function Buttonn({ title, onclick ,type}: ButtonProps) {
    return (
        <div>
            <button
                type={type}
                onClick={onclick}
                className="flex w-full justify-center rounded-md   bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {title}
            </button>
        </div>
    )
}

export default Buttonn