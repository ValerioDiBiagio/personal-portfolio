import React from 'react';
import { NavLink } from 'react-router-dom';
import HeroBackground from './HeroBackground';

type HeroSectionProps = {
    name: string;
    title: string;
    description: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, description }) => {
    return (
        <section className="relative flex justify-center flex-col p-4 md:p-4 text-white items-center overflow-hidden">

            <HeroBackground />

            <div className="relative z-10 flex flex-col items-center">

                <figure className='image-container flex justify-center'>
                    <img className='w-120 fade-bottom' src="/image/valeriodb.png" alt="Foto profilo Valerio" />
                    <img className='w-120 hover-image fade-bottom' src="/image/valeriodbsmile.png" alt="Foto profilo Valerio sorriso" />
                </figure>

                <div
                    className="
                        mt-2
                        max-w-xl md:max-w-4xl
                        w-full            
                        rounded-lg md:rounded-xl
                        "
                >
                    <div
                        className="
                            flex flex-col md:flex-row
                            gap-4 md:gap-8
                            text-white 
                            rounded-lg md:rounded-xl
                        "
                    >
                        <div className="flex-1 text-center p-2">
                            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-1 tracking-tight leading-snug text-gray-300">
                                {name}
                            </h1>
                            <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2 text-gray-300">
                                {title}
                            </h2>
                            <p className="text-sm md:text-base font-light tracking-wide italic mb-0 md:mb-4">
                                {description}
                            </p>
                            <NavLink
                                to="/aboutme"
                                className="
                                    inline-block
                                    mb-2 mt-3 
                                    px-5 py-2 
                                    transition duration-300
                                    font-bold
                                    rounded-full 
                                    shadow-lg
                                    text-sm
                                    bg-gray-300 text-gray-900
                                    hover:bg-cyan-500
                                "
                            >
                                SCOPRI DI PIÙ
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
