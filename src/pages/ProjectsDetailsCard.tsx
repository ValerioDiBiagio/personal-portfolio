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
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importa i loghi con URL
import { techLogos } from "../data/techLogos";

// Component Banner Tecnologie
const TechBanner: React.FC<{ technologies: string[] }> = ({ technologies }) => {
    const filtered = technologies
        .map((tech) => techLogos[tech])
        .filter(Boolean);

    if (filtered.length === 0) return null;

    return (
        <div className="flex flex-col justify-center items-center space-y-6 mt-20">
            <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10">
                Tecnologie utilizzate
            </h2>

            <div className="relative overflow-hidden w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] p-4">
                {/* Gradient ai lati */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Banner */}
                <div className="scroll-container">
                    <div className="scroll-content">
                        {filtered.map((logo, i) => (
                            <a
                                key={`a-${i}`}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mx-4 hover:scale-110 transition-transform duration-200"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-14 w-auto inline-block"
                                />
                            </a>
                        ))}
                    </div>
                    <div className="scroll-content">
                        {filtered.map((logo, i) => (
                            <a
                                key={`b-${i}`}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mx-4 hover:scale-110 transition-transform duration-200"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-14 w-auto inline-block"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

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

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-3xl mb-12 relative flex justify-center"
            >
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".custom-swiper-next",
                        prevEl: ".custom-swiper-prev",
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="rounded-3xl overflow-hidden shadow-2xl"
                >
                    {mediaGallery.map((item, index) => (
                        <SwiperSlide key={index}>
                            {item.endsWith(".mp4") ? (
                                <video src={item} controls className="w-full h-auto rounded-2xl" />
                            ) : (
                                <img src={item} alt={`media-${index}`} className="w-full h-auto object-cover rounded-2xl" />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Freccia sinistra */}
                <motion.button
                    className="custom-swiper-prev absolute left-[-8px] sm:left-[-10px] md:left-[-13px] lg:left-[-80px] top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 hover:bg-cyan-400/20 text-lime-400 transition shadow-lg"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </motion.button>

                {/* Freccia destra */}
                <motion.button
                    className="custom-swiper-next absolute right-[-8px] sm:right-[-10px] md:right-[-13px] lg:right-[-80px] top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4 rounded-full backdrop-blur-md bg-white/10 hover:bg-cyan-400/20 text-lime-400 transition shadow-lg"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </motion.button>



            </motion.div>


            {/* Descrizione */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl text-center text-gray-300 italic text-base sm:text-lg md:text-lg leading-7 sm:leading-8 px-2"
            >
                <p dangerouslySetInnerHTML={{ __html: project.longDescription }} />
            </motion.div>


            {/* Banner Tecnologie*/}
            {project.technologies && (
                <TechBanner technologies={project.technologies} />
            )}

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
