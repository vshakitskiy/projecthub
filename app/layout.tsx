import "./globals.css"
import { Montserrat } from "next/font/google"

import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import ThemeProvider from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"


const montserrat = Montserrat({ 
    subsets: ["latin"],
    variable: "--font-montserrat"
})

export const metadata: Metadata = {
    title: "Project Hub",
    description: "Сервис для реализации бизнес гипотез",
}

const RootLayout = ({
    children,
}: {
  children: React.ReactNode
}) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-montserrat antialiased",
                montserrat.className,
                montserrat.variable
            )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <>{children}</>
                </ThemeProvider>
                <Toaster />
            </body>
        </html>
    )
}

export default RootLayout