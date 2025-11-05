import React from 'react';
import { NavLink } from 'react-router-dom';

type HeroSectionProps = {
    name: string;
    title: string;
    subtitle: string;
    description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, title, subtitle, description }) => {
    return (
        <section className="flex justify-center flex-col p-4 md:p-4 text-white items-center">

            <figure className='image-container flex justify-center'>
                <img className='w-120' src="/image/valeriodb.png" alt="Foto profilo Valerio" />
                <img className='w-120 hover-image' src="/image/valeriodbsmile.png" alt="Foto profilo Valerio sorriso" />
            </figure>

            <div
                className="
                    mt-3
                    max-w-xl md:max-w-4xl
                    w-full            
                    rounded-lg md:rounded-xl
                    border border-lime-500 border-2
                    ">

                <div
                    className="
                        flex flex-col md:flex-row
                        gap-4 md:gap-8
                        text-white 
                        rounded-lg md:rounded-xl 
                        border border-transparent "
                    style={{ backgroundColor: 'rgba(29, 31, 33, 0.8)' }}>

                    <div className="flex-1 text-center p-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 tracking-tight leading-snug text-gray-300">
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
                        <NavLink
                            to="/aboutme"
                            className='
                                 inline-block
                                 mb-2
                                 mt-3 
                                 px-5 py-2 
                                 transition duration-300
                                 font-bold
                                 rounded-full 
                                 shadow-lg
                                 text-sm
                                 bg-gray-300 text-gray-900
                                 bg-gray-300 hover:bg-cyan-400 text-gray-900'
                        >
                            Scopri di più
                        </NavLink>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default HeroSection;