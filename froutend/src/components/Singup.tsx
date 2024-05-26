import { Link, redirect, useNavigate} from "react-router-dom"
import Heading from "./Heading"
import { FieldValues, useForm } from 'react-hook-form';

import Buttonn from "./Buttonn";
import axios from "axios";
import { DATABASE_URL } from "../config";





function Singup() {

    const rederct=useNavigate()

    
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();




async function singunfun(data:FieldValues){

  

axios.post(`${DATABASE_URL.dev_url}user/singup`,
    data
).then((value)=>{
    console.log(value.data.token)
    const token=value.data.token
    if(token){
 localStorage.setItem("token",token)
 rederct("/")
    }
   
}).catch((err)=>{
    console.log(err)

})

}

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
           
            <div className="">
                <Heading title="Sign in to your account" />
                <Link to={"/singin"}>
                    <p className=" text-white md:text-black my-3  text-center hover:text-gray-400">Allrady have an account</p>

                </Link>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit((data) => singunfun(data) )}>
                        <label htmlFor="name" className="block text-md font-medium leading-6 text-white md:text-black">
                Name
            </label>
                    <div className="mt-2">
                <input
                 {...register('name')}
                    id="name"
                  name="name"
                    type="name"
                    autoComplete="name"

                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.name && <p>Please enter Name.</p>}
            </div>
        
     
                <label htmlFor="email" className="block text-md font-medium leading-6 text-white md:text-black">
                Email
            </label>
                    <div className="mt-2">
                <input
                 {...register('email')}
                    id="email"
                  name="email"
                    type="email"
                    autoComplete="email"

                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.email && <p>Please enter email.</p>}
            </div>

                            <label htmlFor="password" className="block text-md font-medium leading-6 text-white md:text-black">
                Password
            </label>
                    <div className="mt-2">
                <input
                 {...register('password')}
                    id="password"
                  name="password"
                    type="password"
                    autoComplete="password"

                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 {errors.password && <p>Please enter Password.</p>}
            </div>
                      
<div className="mt-6">
                          <Buttonn type="submit" title={"Submit"}/>

</div>
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
    )
}

export default Singup