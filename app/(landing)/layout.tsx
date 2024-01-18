import Navbar from "./_components/Navbar"

const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-screen">
            <Navbar />
            <main className="h-full">
                {children}
            </main>
        </div>
    )
}

export default LandingLayout