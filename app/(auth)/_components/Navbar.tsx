import { ThemeMenu } from "@/components/ui/theme-menu"

const Navbar = () => {
    return (
        <nav className="fixed z-10 bg-background w-full border-b border-border">
            <div className="max-w-[1440px] py-2 px-6 flex items-center justify-between">
                <ThemeMenu />
            </div>
        </nav>
    )
}

export default Navbar