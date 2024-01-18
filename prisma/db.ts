// https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () =>
    new PrismaClient()

declare global {
    var prisma: ReturnType<typeof prismaClientSingleton> | undefined
}

const prisma = globalThis.prisma ?? prismaClientSingleton()
export default prisma

if (process.env.NODE_ENV !== "production")
    globalThis.prisma = prisma