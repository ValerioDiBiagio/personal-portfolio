import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import featuredProjects from "../data/projects";
import { NavLink } from "react-router-dom";

const ProjectsPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 py-10 text-white relative bg-black">

            {/* Hero Image */}
            <div className="w-full max-w-3xl mb-12 flex justify-center">
                <figure className="image-container flex justify-center">
                    <img
                        className="base-image w-80 fade-full"
                        src="/image/iopc.png"
                        alt="Foto Valerio al pc"
                    />
                    <img
                        className="hover-image w-80 fade-full"
                        src="/image/iopcsorriso.png"
                        alt="Foto Valerio al pc con sorriso"
                    />
                </figure>
            </div>

            {/* Title */}
            <div className="w-full py-15 text-center">
                <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold">
                    I miei progetti:
                </h2>
            </div>

            {/* Glow sotto la scritta */}
            <div className="w-full h-32 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30 mb-10" />

            {/* Glow inferiore sfumato */}
            <div className="absolute bottom-0 left-0 right-0 h-32 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-[90px] opacity-30 translate-y-10" />

            {/* Projects List */}
            <div className="w-full max-w-2xl flex flex-col gap-15 -mt-30">
                {featuredProjects.map((project) => (
                    <Tilt
                        key={project.slug}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        glareEnable={false}
                        glareColor="transparent"
                        glareMaxOpacity={0.05}
                        scale={1.03}
                        transitionSpeed={1500}
                        className="rounded-3xl overflow-hidden"
                    >
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.4 }}
                            className=" rounded-2xl overflow-hidden flex flex-col items-center p-6"
                        >
                            <div className="overflow-hidden rounded-t-3xl w-full">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            <div className="p-6 sm:p-8 text-center">
                                <h3 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 mb-3 text-sm sm:text-base md:text-lg italic">
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
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
