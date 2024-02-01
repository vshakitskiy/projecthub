import { z } from "zod"

const signInSchema = z.object({
    email: z.string().min(5, {
        message: "Почта должна быть длиннее 5 символов"
    }).max(50, {
        message: "Почта не должна превышать 50 символов"
    }),
    password: z.string().min(8, {
        message: "Пароль должна быть длиннее 8 символов"
    }).max(20, {
        message: "Пароль не должен превышать 20 символов"
    })
})
type SignInSchema = z.infer<typeof signInSchema>

const signUpSchema = z.object({
    name: z.string().min(2, {
        message: "Имя должно быть длиннее 2 символов"
    }).max(20, {
        message: "Имя не должно превышать 20 символов"
    }),
    surname: z.string().min(2, {
        message: "Фамилия должна быть длиннее 2 символов"
    }).max(30, {
        message: "Фамилия не должна превышать 30 символов"
    }),
    patronymic: z.string().optional(),
    email: z.string().min(5, {
        message: "Почта должна быть длиннее 5 символов"
    }).max(50, {
        message: "Почта не должна превышать 50 символов"
    }),
    password: z.string().min(8, {
        message: "Пароль должна быть длиннее 8 символов"
    }).max(20, {
        message: "Пароль не должен превышать 20 символов"
    }),
    role: z.array(z.string()).min(1, {
        message: "Нужно выбрать хотя бы 1 роль"
    }).refine(value => value.some(item => item))
})
type SignUpSchema = z.infer<typeof signUpSchema>


export {
    signInSchema,
    signUpSchema
}

export type {
    SignInSchema,
    SignUpSchema
}