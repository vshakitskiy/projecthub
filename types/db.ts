type User = {
    id: string
    name: string
    surname: string
    patronymic: string | null
    email: string
    passwordHash: string
    image: string | null
    role: Role[]
}

enum Role {
    "customer",
    "agent"
}

export type {
    User, Role
}