import React from 'react';

type HeroSectionProps = {
    name: string;
    title: string;
    subtitle: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, subtitle, description }) => {
    return (
        <section className="h-screen flex justify-center items-center p-4 sm:p-8 text-white">

            <div
                className="
                    max-w-xl md:max-w-md
                    w-full
                    p-0.5 md:p-1              
                    rounded-lg md:rounded-xl
                    bg-gradient-to-r from-lime-300 via-green-300 to-lime-300 
                    transform transition-all duration-300">

                <div
                    className="
                        flex flex-col md:flex-row
                        gap-4 md:gap-8
                        p-6 md:p-10
                        bg-[#1d1f21] 
                        text-white 
                        rounded-lg md:rounded-xl 
                        border border-transparent ">

                    <div className="flex-1 text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 tracking-tight leading-snug text-gray-300">
                            {name}
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2 text-gray-300">
                            {title}
                        </h2>
                        <h3 className="text-base md:text-lg text-gray-400 mb-2">
                            {subtitle}
                        </h3>
                        <p className="text-sm md:text-base font-light tracking-wide italic mb-0 md:mb-4">
                            {description}
                        </p>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default HeroSection;