import Singup from "../components/Singup"

function SingupPage() {
    return (
        <div className=" h-screen w-full md:flex" >
            <div className=" relative h-screen w-full bg-">

                <img src="/earth.jpg" alt="" className=" md:hidden absolute h-screen opacity-99 w-full " />
                <div className="  relative h-screen "><Singup /></div>
            </div>

            <div className=" w-1/2 h-screen  lg:w-1/3 hidden md:block ">

                <img src="/sideImage.jpg" alt="singin" className=" bg-cover bg-center w-full h-screen" />
            </div>
        </div>
    )
}

export default SingupPage