import { useEffect, useRef, useState } from "react"

interface InputeProps {
    label: string,
    name?: string,
    onchange: (e: string) => void,
    getdata?: boolean


}

function Input({ label, name, onchange, getdata }: InputeProps) {

    const [InputValue, setInputValue] = useState("")

    const inputdata = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        const valueget = inputdata.current?.value
        const dataa = valueget ? valueget : ""
        setInputValue(dataa)
        if (InputValue.length >= 1) onchange(InputValue)

    }, [InputValue, getdata])

    return (


        <div>

            <label htmlFor="email" className="block text-md font-medium leading-6 text-white md:text-black">
                {label}
            </label>
            <div className="mt-2">
                <input
                    ref={inputdata}

                    id="email"
                    name={name}
                    type="email"
                    autoComplete="email"

                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

    )
}

export default Input