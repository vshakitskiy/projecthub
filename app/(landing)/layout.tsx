import Navbar from "./_components/Navbar"

const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => (
    <div className="h-screen">
        <Navbar />
        <main className="h-full pt-14">
            {children}
        </main>
    </div>
)

export default LandingLayout