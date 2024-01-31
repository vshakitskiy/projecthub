"use client"

import { useEffect, useState } from "react"

const useMedia = (mobileSize: number) => {
    const [width, setWidth] = useState({
        width: window.innerWidth,
        isMobile: window.innerWidth < mobileSize
    })

    useEffect(() => {
        const resizeHandler = () => 
            setWidth({
                width: window.innerWidth,
                isMobile: window.innerWidth < mobileSize
            })

        window.addEventListener("resize", resizeHandler)
        return () =>
            window.removeEventListener("resize", resizeHandler)
    }, [width])

    return width
}

export default useMedia