import React from 'react'
import { Spotlight } from './ui/SpotLight'
import TextGenerateEffect  from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {

    const text = "Transforming Concepts into Seamless User Experiences"

    return (
        <div className='pb-20 pt-36 bg-black-100' id="hero">
            <div className="">
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='white' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4">
                    <h1 className='text-white uppercase tracking-widest max-w-80 text-xs'>Dynamic Web magic with next js</h1>
                    
                    <TextGenerateEffect
                        text={"Transforming Concepts into Seamless User Experiences"}
                    />
                    
                    <p className="text-white text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Sahil, a next js developer
                    </p>
                    <a href="#about" className=''>
                        <MagicButton
                            title="show my work"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero