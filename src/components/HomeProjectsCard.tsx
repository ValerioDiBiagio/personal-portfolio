import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
};

interface HomeProjectsCardProps {
    projects: Project[];
    interval?: number;
}

const HomeProjectsCard: React.FC<HomeProjectsCardProps> = ({ projects, interval = 8000 }) => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            handleNext();
        }, interval);
        return () => clearInterval(timer);
    }, [interval, isPaused, current]);

    const handleNext = () => setCurrent((prev) => (prev + 1) % projects.length);
    const handlePrev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

    const project = projects[current];

    const variants = {
        enter: { x: 300, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -300, opacity: 0 },
    };

    return (
        <div className="relative pb-16 bg-black">
            <div className="w-full py-15 text-center">
                <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold">
                    Progetti in evidenza:
                </h2>
            </div>

            <div
                className="flex justify-center items-center overflow-visible mt-10 py-3 relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Glow superiore */}
                <div className="absolute -top-10 left-0 right-0 h-32 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30" />

                {/* Glow inferiore sfumato */}
                <div className="absolute bottom-0 left-0 right-0 h-32 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-[90px] opacity-30 translate-y-10" />

                {/* Pulsante sinistro */}
                <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-1 sm:left-4 md:left-6 z-20 p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 hover:bg-cyan-400/20 text-gray-200 transition shadow-lg"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </motion.button>

                {/* Pulsante destro */}
                <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-1 sm:right-4 md:right-6 z-20 p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 hover:bg-cyan-400/20 text-gray-200 transition shadow-lg"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </motion.button>

                {/* Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={project.title}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="flex-shrink-0 w-11/12 sm:w-[28rem] md:w-[36rem] lg:w-[42rem] relative z-10"
                    >
                        <Tilt
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            glareEnable
                            glareMaxOpacity={0.2}
                            transitionSpeed={1500}
                            scale={1.03}
                            className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-md"
                        >
                            <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }}>
                                <div className="overflow-hidden rounded-t-3xl">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>

                                <div className="p-6 sm:p-8 text-center">
                                    <h3 className="text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-3 text-sm sm:text-base md:text-lg lg:text-xl">
                                        {project.category}
                                    </p>
                                    <p className="text-gray-300 mb-5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                                        {project.description}
                                    </p>

                                    <motion.div whileHover={{ scale: 1.05 }}>
                                        <NavLink
                                            to={`/projects/${project.slug}`}
                                            className="inline-block mb-2 mt-3 px-4 sm:px-6 py-2 sm:py-3 transition duration-300 font-bold rounded-full shadow-lg text-sm sm:text-base lg:text-lg bg-gray-300 text-gray-900 hover:bg-cyan-500"
                                        >
                                            VEDI PROGETTO
                                        </NavLink>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Tilt>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottone "I miei progetti" */}
            <div className="w-full flex justify-center mt-10">
                <motion.div whileHover={{ scale: 1.05 }}>
                    <NavLink
                        to="/projects"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 transition duration-300 font-bold rounded-full shadow-lg text-base sm:text-lg bg-gray-300 text-gray-900 hover:bg-cyan-500"
                    >
                        I MIEI PROGETTI
                    </NavLink>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeProjectsCard;
