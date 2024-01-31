import Link from "next/link"
import Navbar from "./_components/Navbar"
import { ArrowLeft } from "lucide-react"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

const AuthLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    const session = await getSession()

    if (session)
        redirect("/dashboard")

    return (
        <div className="h-screen">
            <Navbar />
            <main className="h-full w-full">
                <div className="h-full relative max-w-6xl px-4 mx-auto">
                    <Link
                        href="/"
                        className="pt-32 sm:pt-40 inline-flex gap-2 items-center cursor-pointer"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Назад
                    </Link>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default AuthLayout