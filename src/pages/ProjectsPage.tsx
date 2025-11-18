import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import featuredProjects from "../data/projects";

const ProjectsPage: React.FC = () => {
    const lastIndex = featuredProjects.length - 1;

    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 py-10 text-white relative bg-black overflow-x-hidden">

            {/* Hero Section */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 mb-12 mx-auto px-4">
                <motion.figure
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="image-container relative flex justify-center md:w-5/12"
                >
                    {/* Immagine base: sempre visibile */}
                    <img
                        className="base-image fade-full w-60 md:w-full rounded-xl shadow-2xl"
                        src="/image/iopc.png"
                        alt="Foto Valerio al pc"
                    />

                    {/* Immagine hover: appare solo in hover */}
                    <img
                        className="hover-image fade-full absolute top-0 left-0 w-60 md:w-full rounded-xl shadow-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                        src="/image/iopcsorriso.png"
                        alt="Foto Valerio al pc con sorriso"
                    />
                </motion.figure>

                {/* Paragrafo animato */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-7/12 md:leading-8 lg:leading-10  text-gray-300 text-center md:text-left text-lg sm:text-xl italic md:ml-auto md:pr-10"
                >
                    Ogni progetto che trovi qui racconta una parte del mio percorso: dal design alla programmazione, cerco sempre di coniugare creatività e funzionalità per creare esperienze che siano belle da vedere e semplici da usare.
                </motion.div>
            </div>

            {/* Sezione Titolo */}
            <div className="w-full text-center mb-6 mt-10">
                <h2 className="text-gray-300 text-5xl sm:text-5xl md:text-5xl font-semibold mb-15">
                    I miei progetti
                </h2>
            </div>

            {/* Glow sotto la scritta*/}
            <motion.div
                className="w-full h-20 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30 mb-20"
                animate={{ scale: [1, 1.13, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Lista Progetti */}
            <div className="w-full max-w-2xl flex flex-col gap-12">
                {featuredProjects.map((project, index) => (
                    <Tilt
                        key={project.slug}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        glareEnable={false}
                        scale={1.03}
                        transitionSpeed={1500}
                        className={`rounded-3xl overflow-hidden ${index === 0 ? 'mt-0' : 'mt-12'} ${index === lastIndex ? 'mb-32' : ''}`}
                    >
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-2xl overflow-hidden flex flex-col items-center p-6 shadow-2xl"
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

            {/* Glow alla fine dell'ultima card */}
            <motion.div
                className="w-full h-20 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30 mb-20"
                animate={{ scale: [1, 1.13, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default ProjectsPage;