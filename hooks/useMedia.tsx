/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react"

// [{
//     width: number
//     isMobile: boolean
// }, Dispatch<SetStateAction<{
//     width: number
//     isMobile: boolean
// }>>]

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

    // return [width, setWidth]
    return width
}

export default useMedia