import React from "react";
import { useParams, NavLink } from "react-router-dom";
import featuredProjects from "../data/projects";

// Swiper (carosello)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";

const ProjectDetailsPage: React.FC = () => {
    const { slug } = useParams();
    const project = featuredProjects.find((p) => p.slug === slug);

    if (!project)
        return (
            <div className="text-white text-center py-20">
                <h2 className="text-3xl mb-4">Progetto non trovato</h2>
                <NavLink
                    to="/projects"
                    className="text-cyan-400 underline hover:text-cyan-300"
                >
                    Torna ai Progetti
                </NavLink>
            </div>
        );

    // Media di esempio — aggiungile nel tuo file projects.ts se vuoi
    const mediaGallery = project.media ?? [project.image];

    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 py-16 bg-black text-white overflow-x-hidden">

            {/* Titolo progetto */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center"
            >
                {project.title}
            </motion.h1>

            <motion.div
                className="w-full h-20 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30 mb-20"
                animate={{ scale: [1, 1.13, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Carosello */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-3xl mb-12"
            >
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="rounded-3xl overflow-hidden shadow-2xl"
                >
                    {mediaGallery.map((item, index) => (
                        <SwiperSlide key={index}>
                            {item.endsWith(".mp4") ? (
                                <video
                                    src={item}
                                    controls
                                    className="w-full h-auto rounded-2xl"
                                />
                            ) : (
                                <img
                                    src={item}
                                    alt={`media-${index}`}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            )}
                        </SwiperSlide>
                    ))}

                </Swiper>
            </motion.div>

            {/* Contenuto descrizione */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl text-center text-gray-300 text-lg leading-8 px-2"
            >
                <p>{project.description}</p>
            </motion.div>

            {/* Pulsante torna ai progetti */}
            <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink
                    to={`/projects`}
                    className="inline-block mb-2 mt-25 px-4 sm:px-6 py-2 sm:py-3 transition duration-300 font-bold rounded-full shadow-lg text-sm sm:text-base lg:text-lg bg-gray-300 text-gray-900 hover:bg-cyan-500"
                >
                    TORNA AI PROGETTI
                </NavLink>
            </motion.div>

            {/* Glow finale */}
            <motion.div
                className="w-full h-20 rounded-3xl pointer-events-none bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 blur-3xl opacity-30 mb-20"
                animate={{ scale: [1, 1.13, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default ProjectDetailsPage;
