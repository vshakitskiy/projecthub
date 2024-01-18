"use client"

import { ThemeProvider as NextTheme } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

const ThemeProvider = ({
    children, ...props
}: ThemeProviderProps) => (
    <NextTheme {...props}>
        {children}
    </NextTheme>
)

export default ThemeProvider