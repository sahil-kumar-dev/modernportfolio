import React from 'react'
import { TypewriterEffectSmooth } from './ui/TypeWriterEffect'

const AboutCompany = () => {
    const words = [
        {
            text: "Let's",
        },
        {
            text: "Create",
        },
        {
            text: "Something",
        },
        {
            text: "Unforgotable",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center mt-10 ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                Your Brand Also Deserves The RoarPix Touch
            </p>
            <TypewriterEffectSmooth words={words} />
        </div>
    )
}

export default AboutCompany