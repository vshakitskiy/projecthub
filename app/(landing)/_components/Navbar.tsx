import { Button } from "@/components/ui/button"
import { ThemeMenu } from "@/components/ui/theme-menu"

const Navbar = () => {
    return (
        <nav className="fixed w-full border-b border-secondary">
            <div className="max-w-[1440px] py-2 px-6 flex items-center justify-between">
                <ThemeMenu />
                <Button variant="outline">Войти</Button>
            </div>
        </nav>
    )
}

export default Navbar