import { z } from "zod"


export const userdetail = z.object({
    name: z.string({ required_error: "name is reqiured" }),
    email: z.string({ message: "required a valid emial" }).email(),
    password: z.string().min(6).max(20)
})

export const userSingType = z.object({

    email: z.string({ message: "required a valid emial" }).email(),
    password: z.string().min(6).max(20)
})

//post data blog valadatiuon

export const PostInputValid = z.object({
    title: z.string({ invalid_type_error: "this is an invalid type" }),
    discription: z.string({ invalid_type_error: "invalid type in discription" })

})


export type BlogPost = z.infer<typeof PostInputValid>
export type userSingup = z.infer<typeof userdetail>
export type userSingIN = z.infer<typeof userSingType>
