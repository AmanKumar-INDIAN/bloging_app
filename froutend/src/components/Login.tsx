import { Link } from "react-router-dom"
import Heading from "./Heading"
import Input from "./Input"
import Buttonn from "./Buttonn"
import { useState } from "react"
import { userSingIN } from "@amankumar95/types"
import { DATABASE_URL } from "../config"
import axios from "axios"

function senddata(logindata: userSingIN) {
//     const theurl=DATABASE_URL.dev_url.toString()
// console.log(theurl)
//     axios.get(`${theurl}user/singin`).then((value) => {
//         console.log(value)

//     }).catch((err) => {
//         console.log(err)
//     })

console.log(logindata)

    axios.post(`${DATABASE_URL.dev_url}user/singin`, {
        logindata

    }).then((val) => {
        console.log(val)
    }).catch((err) => {
        console.log(err)
    })
    console.log(logindata)
   
}




export default function Login() {
    const [loginData, setLoginData] = useState<userSingIN>({
        email: "",
        password: ""
    })

    const [inputdataget, setinputdataget] = useState(false)

    console.log(inputdataget)


    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="">
                    <Heading title="Sign in to your account" />
                    <Link to={"/singup"}>
                        <p className=" md:text-black text-white my-3 text-center hover:text-gray-400"> Create an account</p>

                    </Link>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="" method="POST">
                        <Input label="Email address " name={"test-1"} onchange={(value: string) => setLoginData({ ...loginData, email: value })} getdata={inputdataget} />

                        <Input label="Password" onchange={(value) => setLoginData({ ...loginData, password: value })} getdata={inputdataget} />
                        <Link to={"#"}>
                            <p className=" text-white text-right text-sm pb-3">Forget password</p></Link>

                        <Buttonn type="button" title=" Sign in" onclick={() => {

                            setinputdataget(inputdataget ? false : true)
                            console.log("hello hi")
                            senddata(loginData)
                        }} />
                    </form>

                    <p className="mt-10 text-center text-md text-white md:text-black">
                        Not a member?{' '}
                        <Link to={"#"}>
                            <p className="font-semibold leading-6 md:text-black text-blue-100 hover:text-indigo-500">
                                Start a 14 day free trial
                            </p>
                        </Link>

                    </p>
                </div>
            </div>
        </>
    )
}
