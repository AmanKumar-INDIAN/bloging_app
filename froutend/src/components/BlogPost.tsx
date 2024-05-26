import { useRef, useState } from "react"
import Buttonn from "./Buttonn"
import axios from "axios"
import { DATABASE_URL } from "../config"

 
interface blogtypr{
    title:string,
    discription:string
}

function BlogPost() {
const [blogdt, setblogdt] = useState<blogtypr>({
    title:"",
    discription:""
})

const titl=useRef()
const dist =useRef()


function senddata(){
    const token=localStorage.getItem("token")
    const title=titl.current?.value
    const discription=dist.current?.value
  
    setblogdt(
        {
            title:title,
            discription:discription
        }
    )
    console.log(blogdt)
     
axios.post(`${DATABASE_URL.dev_url}blogs/blog`,
    blogdt
,
{
    headers:{
        Authorization:token
    }
}
).then((val)=>{
    console.log(val.data)
}).catch((err)=>{
console.log(err)
})
   

}



  return <div className=" w-1/2 my-5">

<div className="my-2  ">
<label htmlFor="title " className=" text-xl" >Title</label>
<input ref={titl} type="text"  className=" mt-1 text-black border-[1px] w-full border-black rounded-md text-xl " name="title"/>

</div>
<div className="my-4  ">
<label htmlFor="title " className=" text-xl" >Discription</label>
<input ref={dist} type="text"  className=" text-blacka mt-1 border-[1px] w-full text-black border-black rounded-md text-xl p-1" name="title"/>

</div>

<div className=" my-4 pt-5">
<Buttonn title="Create"  type="button" onclick={()=>senddata()}/>

</div>
  </div>
}

export default BlogPost
