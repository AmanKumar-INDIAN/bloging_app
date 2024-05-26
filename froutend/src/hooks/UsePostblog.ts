import axios from "axios"
import { DATABASE_URL } from "../config"
import { useState } from "react"


function UsePostblog(data) {
 const [Reterndata, setReterndata] = useState()
 
axios.post(`${DATABASE_URL}blogs/blog`,
    data
).then((val)=>{
    setReterndata(val.data)
}).catch((err)=>{
console.log(err)
})
return Reterndata
}

export default UsePostblog
