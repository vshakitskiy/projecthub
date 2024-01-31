import Navbar from "./_components/Navbar"

const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => (
    <div className="h-screen">
        <Navbar />
        <main className="h-full">
            {children}
        </main>
    </div>
)

export default LandingLayout