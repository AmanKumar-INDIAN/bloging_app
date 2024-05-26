import { z } from "zod";
export declare const userdetail: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export declare const userSingType: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const PostInputValid: z.ZodObject<{
    title: z.ZodString;
    discription: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    discription: string;
}, {
    title: string;
    discription: string;
}>;
export type BlogPost = z.infer<typeof PostInputValid>;
export type userSingup = z.infer<typeof userdetail>;
export type userSingIN = z.infer<typeof userSingType>;
