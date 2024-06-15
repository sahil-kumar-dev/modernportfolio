import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GithubGlobe";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoMail } from "react-icons/io5";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string
    id: number
}) => {
    return (
        <div
            className={cn(
                "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   justify-between flex flex-col space-y-4 overflow-hidden border border-white/[0.11]",
                className
            )}
            style={{
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1)100%)'
            }}
        >
            <div className={`${id == 6 && 'flex justify-center w-full h-full flex-col'}`}>
                <div className="w-full h-full absolute">
                    {
                        img &&
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover object-center')}
                        />
                    }
                </div>
                <div className={`absolute right-0 -bottom-5 ${id == 5 && 'w-full opacity-80'}`}>
                    {
                        spareImg &&
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={`object-cover object-center h-full w-full`}
                        />
                    }
                </div>
                {
                    id == 6 &&
                    <div className="flex items-center justify-center z-10 text-white absolute top-0">
                        <BackgroundGradientAnimation>

                        </BackgroundGradientAnimation>
                    </div>
                }
                <div className={cn(titleClassName, 'bg-transparent group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-50  mx-auto')}>
                    <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base   dark:text-neutral-300">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-white-100">
                        {title}
                    </div>

                    {
                        id == 2 &&
                        <GlobeDemo
                        />
                    }
                    {
                        id == 3 &&
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 -top-4 -rotate-12">
                            <div className="flex flex-col gap-3 lg:gap-3">
                                {['React.js', 'Next.js', 'Typescript'].map((item,idx) => (
                                    <span key={idx} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] text-white-100">
                                        {item}
                                    </span>
                                ))}
                                <span className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] text-transparent">I</span>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-3">
                                <span className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] text-transparent">I</span>
                                {['Node.js', 'Express.js', 'Mongo DB'].map((item,idx) => (
                                    <span key={idx} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e] text-white-100">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    }
                    {
                        id == 6 &&
                        <div className="mt-5 relative">
                            <div className={``}>
                                <MagicButton
                                    title="Contact me"
                                    otherClasses="bg-[#161131]"
                                    icon={<IoMail />}
                                    position="right"
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
