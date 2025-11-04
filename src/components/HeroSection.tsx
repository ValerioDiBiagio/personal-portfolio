import React from 'react';

type HeroSectionProps = {
    name: string;
    title: string;
    subtitle: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, subtitle, description }) => {
    return (
        <section className="flex justify-center flex-col p-4 sm:p-8 text-white items-center">

            <figure className='image-container flex justify-center'>
                <img className='w-120' src="/image/valeriodb.png" alt="Foto profilo Valerio" />
                <img className='w-120 hover-image' src="/image/valeriodbsmile.png" alt="Foto profilo Valerio sorriso" />
            </figure>

            <div
                className="
                    mt-3
                    max-w-xl md:max-w-md
                    w-full
                    p-0.5 md:p-1              
                    rounded-lg md:rounded-xl
                    border border-lime-500 border-2
                    ">

                <div
                    className="
                        flex flex-col md:flex-row
                        gap-4 md:gap-8
                        p-6 md:p-10
                        text-white 
                        rounded-lg md:rounded-xl 
                        border border-transparent "
                    style={{ backgroundColor: 'rgba(29, 31, 33, 0.9)' }}>

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