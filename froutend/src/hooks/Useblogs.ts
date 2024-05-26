import axios from "axios"
import { useEffect, useState } from "react"



export interface blogdataTYPE{
    title?: string;
    discription?: string;
    id?: number;
  userpost: {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
    };
}[]


function Useblogs(){

    const  [Blogdata, setBlogdata] = useState<blogdataTYPE | undefined>()
     const [loadingg, setLoading] = useState(false)
    




    useEffect(()=>{
const Token=localStorage.getItem("token")?.toString()

      axios.get(`http://localhost:8787/blogs`,{
        headers:{
          
          Authorization:Token
        }
      }).then((value)=>{
     
        setBlogdata(value.data.allusers)
        setLoading(true)
      }).catch((error)=>{
        console.log(error)
      })
    },[])
  


return {loadingg,Blogdata}
}

export default Useblogs