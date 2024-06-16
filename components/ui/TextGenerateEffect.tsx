'use client'

import React, { useEffect, useState } from 'react'

const TextGenerateEffect = ({text}:{text:string}) => {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, []);
    return (
        <div>
            {
                text.split(' ').map((txt, idx) => (
                    <span key={idx} className={`${idx > 3 ? 'text-purple' : 'dark:text-white text-black'} text-center text-[40px] md:text-5xl lg:text-6xl font-bold tracking-wider leading-snug transition-[opacity] duration-500 opacity-0 ${isVisible ? `delay-${idx} opacity-100`: null}`}>{txt} </span>
                ))
            }
        </div>
    )
}

export default TextGenerateEffect