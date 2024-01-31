"use server"

import { z } from "zod"
import prisma from "@/prisma/db"
import { hash, genSalt } from "bcryptjs"
import { Role } from "@prisma/client"

const signUpSchema = z.object({
    name: z.string().min(2).max(30),
    surname: z.string().min(2).max(30),
    patronymic: z.string().max(30).optional(),
    email: z.string().min(5).max(50),
    password: z.string().min(8).max(20),
    role: z.array(z.string()).refine(value => value.some(item => item))
})
type SignUpSchema = z.infer<typeof signUpSchema>

const createUser = async (data: SignUpSchema) => {
    const { name, surname, patronymic, email, password, role } = data

    try {
        const salt = await genSalt(12)
        const passwordHash = await hash(password, salt)
        await prisma.user.create({
            data: {
                name,
                surname,
                patronymic,
                email,
                passwordHash,
                role: role as Role[],
            }
        })

        return {
            error: null,
            status: 200,
            ok: true,
        }
    } catch(error) {
        if (error instanceof Error)
            if (error.name === "PrismaClientKnownRequestError")
                return {
                    error: "EmailInUse",
                    status: 405,
                    ok: false
                }
        return {
            error: "CredentialsSignup",
            status: 401,
            ok: false
        }
    }
}

export {
    createUser
}