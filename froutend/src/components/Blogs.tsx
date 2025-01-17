import { blogdataTYPE } from "../hooks/Useblogs"




  
  export default function Blogs({posts}:{posts:blogdataTYPE |undefined}):JSX.Element {




// return <>
// <div className="">
// {posts.map((val)=>(
//   <p key={val.id}>{val.id}</p>
// ))}
// </div>
// </>

  
      return (
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-200">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post:blogdataTYPE) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.userpost.createdAt.toString()} className="text-gray-100">
                    {post.userpost.createdAt.toString()}
                  </time>
                  <a
                    href={"#"}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100"
                  >
                    {post.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-600">
                    <a href={"#"}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-100">{post.discription}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={"/public/user.jpg"} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-200">
                      <a href={"#"}>
                        <span className="absolute inset-0" />
                        {post.userpost.name}
                      </a>
                    </p>
                    <p className="text-gray-300">{"user Role"}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )




   
  }
  