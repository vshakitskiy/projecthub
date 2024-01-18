import { Button } from "@/components/ui/button"

const Home = () => {
    return (
        <main className="h-full flex flex-col items-center justify-center">
            <h1 className="text-5xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight text-center">
                <span className="inline-block text-purple-800 dark:text-purple-600 mr-2">
                    Project
                </span>
                Hub
            </h1>
            <h2 className="mt-5 font-bold px-5 sm:text-xl lg:text-2xl tracking-tight text-center">
                Сервис по организации бизнес-гипотез.
            </h2>
            <Button className="mt-6 px-16" variant="outline">
                Выполнить вход
            </Button>
        </main>
    )
}

export default Home