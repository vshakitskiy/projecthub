import { ThemeMenu } from "@/components/ui/theme-menu"
import Actions from "./Actions"
import { getSession } from "@/lib/auth"

const Navbar = async () => {
    const session = await getSession()
    return (
        <nav className="fixed w-full bg-background border-b border-border">
            <div className="max-w-[1440px] mx-auto py-2 px-6 flex items-center justify-between">
                <ThemeMenu />
                <Actions session={session} />
            </div>
        </nav>
    )
}

export default Navbar