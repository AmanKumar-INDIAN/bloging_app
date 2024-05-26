

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { z } from "zod"


type Bindings = {
    DATABASE_URL: string
    JWT_TOKEN: string
    JWT_TOKEN_password: string
}

const blogs = new Hono<{
    Bindings: Bindings,
    Variables: {
        userid: string
    }
}>()



const PostInputValid = z.object({
    title: z.string({ invalid_type_error: "this is an invalid type" }),
    discription: z.string({ invalid_type_error: "invalid type in discription" })

})


blogs.use("/*", async (c, next) => {
    console.log("aaya")
    const hader = await c.req.header("Authorization")
    console.log("------------------------------------------")
    

    try {
        if (!hader) return c.json({ message: "unotherized" })
        const token = hader
         console.log(token)
console.log("------------------------------------------  nicha ")
        const mySectert = c.env.JWT_TOKEN
        const decodetoken = await verify(token, mySectert)
        if (!decodetoken) return c.json({ message: "unotherized" })

        c.set("userid", decodetoken)
        console.log("set hogaya")
        await next()


    } catch (error) {
        console.log(error)
        return c.json({ message: "plaese login to continew" }, 401)

    }

})


blogs.post("/blog", async (c) => {
    const body = await c.req.json()
    console.log(body)
    const isvalid = PostInputValid.parse(body)

    try {

        if (!isvalid) return c.json({ message: "invalid type " })

        const user = await c.get("userid")
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const userpost = await prisma.posts.create({
            data: {
                //@ts-ignore
                postid: user.userid,
                title: body.title,
                discription: body.discription
            }
        })

        return c.json(
            {
                message: "user is cvreated",
                postid: userpost.id,
                user_email: user.sub
            })

    } catch (error) {
        console.log(error)
    }

})


blogs.get("/", async (c) => {



    try {
        const primsa = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const allusers = await primsa.posts.findMany({
        include:{
         userpost:{
            select:{
                name:true,
                email:true,
                createdAt:true,
                id:true
            }
         }
        }
        })

        // const username=c.get("userid")

        // console.log(username)
        return c.json({ allusers }, 200)
    } catch (error) {
        console.log(error)
    }
})



export default blogs