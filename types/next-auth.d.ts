import NextAuth, { DefaultSession } from "next-auth"
import { User } from "."


declare module "next-auth" {
    interface Session {
        user: User
    }
    
}