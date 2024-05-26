
import { Suspense, lazy, useState } from "react"
import BlogPost from "../components/BlogPost"
import Blogs from "../components/Blogs"

//import Navbar2 from "../components/Navbar2"
import Useblogs from "../hooks/Useblogs"
const LazyNavbar=lazy(()=> import("../components/Navbar2")  )



function Home():JSX.Element {

const {loadingg,Blogdata}=Useblogs()
const [check, setcheck] = useState<string | undefined>(" ")




// const checkname=Blogdata?.userpost.name

// if(loadingg){
//   console.log("hello")
//   // let chekkk =Blogdata?.userpost.name
//   // setcheck(chekkk)
//   // console.log(check)
//   console.log(Blogdata.length)
//   if(Blogdata.length >=1){
//     setcheck(Blogdata)
//   }






  return <>
  <div className="">
<Suspense fallback={<div>....loading</div>}>
<LazyNavbar  />

</Suspense>
<div className=" pt-5 py-5 bg-gray-900 text-white flex justify-center">
  <BlogPost/>
</div>
{!loadingg ? 
<div>...loading</div>  : <div>


    <Blogs posts={Blogdata}/> 
</div>
}





  </div>

  </>
}



export default Home
