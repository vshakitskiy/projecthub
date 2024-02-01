import { AuthOptions, DefaultSession, getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/prisma/db"
import { compare } from "bcryptjs"
import { User } from "@/types/db"

const credentialsProvider = {
    email: {
        label: "Email",
        type: "email",
        placeholder: ""
    },
    password: {
        label: "Password",
        type: "password",
        placeholder: ""
    }
}

const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: credentialsProvider,
            authorize: async (credentials) => {
                if (!credentials) return null

                const user: User = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user) return null

                const isCorrect = await compare(credentials.password, user.passwordHash)
                if (!isCorrect) return null

                return user
            },
        }),
    ],
    callbacks: {
        // async jwt({ token, user, account, profile }) {
        //     console.log("User", user)
        //     console.log("Account", account)
        //     console.log("Profile", profile)
        //     console.log("Token", token)
        //     return token
        // },
        session: async ({ session }) => {
            const user: User | null = await prisma.user.findUnique({
                where: {
                    email: session.user.email
                }
            })
            
            if (!user)
                return session
            
            return {
                ...session,
                user
            }
        },
    },
    pages: {
        signIn: "/signin"
    }
}

const getSession = async () =>
    await getServerSession(authOptions)

export {
    getSession,
    authOptions
}