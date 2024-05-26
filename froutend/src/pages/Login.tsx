
import Login from "../components/Login"


function LoginPage() {


    return (
        <div className=" h-screen w-full md:flex" >

            <div className=" relative h-screen w-full md:1/2">

                <img src="/earth.jpg" alt="" className=" md:hidden absolute h-screen opacity-99 bg-cover w-full" />
                <div className="  relative h-screen "><Login /></div>
            </div>

            <div className=" w-1/2 h-screen  lg:w-1/2 hidden lg:block ">

                <img src="/sideImage.jpg" alt="singin" className=" bg-cover bg-center w-full h-screen" />
            </div>
        </div>
    )
}

export default LoginPage