"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInputValid = exports.userSingType = exports.userdetail = void 0;
const zod_1 = require("zod");
exports.userdetail = zod_1.z.object({
    name: zod_1.z.string({ required_error: "name is reqiured" }),
    email: zod_1.z.string({ message: "required a valid emial" }).email(),
    password: zod_1.z.string().min(6).max(20)
});
exports.userSingType = zod_1.z.object({
    email: zod_1.z.string({ message: "required a valid emial" }).email(),
    password: zod_1.z.string().min(6).max(20)
});
//post data blog valadatiuon
exports.PostInputValid = zod_1.z.object({
    title: zod_1.z.string({ invalid_type_error: "this is an invalid type" }),
    discription: zod_1.z.string({ invalid_type_error: "invalid type in discription" })
});
