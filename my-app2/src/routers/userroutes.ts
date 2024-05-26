
import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { z } from "zod"
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
// import { userdetail, userSingType } from "@amankumar95/types"

type Bindings = {
    DATABASE_URL: string
    JWT_TOKEN: string
    JWT_TOKEN_password: string
}

const user = new Hono<{
    Bindings: Bindings
}>()

const userdetail = z.object({
    name: z.string({ required_error: "name is reqiured" }),
    email: z.string({ message: "required a valid emial" }).email(),
    password: z.string().min(6).max(20)
})

const userSingType = z.object({

    email: z.string({ message: "required a valid emial" }).email(),
    password: z.string().min(6).max(20)
})


type userSingup = z.infer<typeof userdetail>
type userSingIN = z.infer<typeof userSingType>


user.post("/singup", async (c) => {


    const body = await c.req.json()

    console.log(body)
    const sucess = userdetail.parse(body)
    console.log(sucess)
    try {

        if (!sucess) return c.json({ message: "envalid types" })

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const AsistUser = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })

        if (!AsistUser) {
            let secretforPassword = c.env.JWT_TOKEN_password
            let secretforPayoad = c.env.JWT_TOKEN
            const hasspassword = await sign(body.password, secretforPassword)

            const user = await prisma.user.create({
                data: {
                    name: body.name,
                    email: body.email,
                    password: hasspassword
                }
            })

            const payload = {
                sub: user.email,
                userid: user.id

            }

            const token = await sign(payload, secretforPayoad)



            return c.json({
                message: "You acc created",
                user: user.id,
                token: token
            }, 200)

        } else {
            return c.json({
                message: "user allrady asist",

            })
        }



    } catch (error) {
        return c.json({
            message: "error while loging"
        }, 501)
    }






})





user.post("/singin", async (c) => {
    const body = await c.req.json()

    const sucess = userSingType.parse(body)
    console.log("-----------------")
    console.log(sucess)
      console.log("-----------------")
    try {

        if (!sucess) return c.json({ message: "envalid types" })

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL
        }).$extends(withAccelerate())

        const hasspassword = await sign(body.password, c.env.JWT_TOKEN_password)

        const AsistUser = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: hasspassword
            }
        })

        if (AsistUser) {

            let secretforPayoad = c.env.JWT_TOKEN



            const payload = {
                sub: AsistUser.email,
                userid: AsistUser.id

            }

            const token = await sign(payload, secretforPayoad)



            return c.json({
                message: "You are sign in",
                user: AsistUser.id,
                token: token
            }, 200)

        } else {
            return c.json({
                message: "invalid conditials",

            })
        }



    } catch (error) {
        return c.json({
            message: "error while loging"
        }, 501)
    }





})

export default user