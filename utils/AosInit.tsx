'use client'

import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

const AosInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
    return (
        null
    )
}

export default AosInit