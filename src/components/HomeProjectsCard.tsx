import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { NavLink } from "react-router-dom";

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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, interval);
        return () => clearInterval(timer);
    }, [projects.length, interval]);

    const project = projects[current];

    const variants = {
        enter: { x: 300, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -300, opacity: 0 },
    };

    return (
        <div className="relative pb-10 bg-black">
            <div className="w-full py-15 text-center">
                <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold">
                    I miei progetti:
                </h2>
            </div>

            <div className="flex justify-center items-center overflow-visible mt-10 py-3 relative">
                <div className="absolute -top-10 left-0 right-0 h-24 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30 pulse-slow" />
                <div className="absolute -bottom-10 left-0 right-0 h-24 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30 pulse-slow" />

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
                                            VEDI PROGETTO →
                                        </NavLink>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Tilt>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default HomeProjectsCard;
