import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { FaLightbulb, FaUsers, FaPalette, FaSearch, FaSyncAlt } from "react-icons/fa";

const timelineData = [
    { title: "2016/2019 Receptionist", subtitle: "Diploma accoglienza turistica istituto alberghiero", color: "bg-yellow-400" },
    { title: "2019/2023 Hairstylist", subtitle: "Accademia triennale da acconciatore più specializzazione ", color: "bg-green-500" },
    { title: "2023/2024 Imprenditore", subtitle: "Imprenditore nel settore della vendita al dettaglio", color: "bg-cyan-400" },
    { title: "2025 Junior Full Stack Developer", subtitle: "Diploma sviluppatore web più specializzazione UX/UI design ", color: "bg-gray-400" },
];

const softSkillsData = [
    { label: "Problem Solving", icon: <FaLightbulb /> },
    { label: "Teamwork", icon: <FaUsers /> },
    { label: "Creatività", icon: <FaPalette /> },
    { label: "Attenzione ai dettagli", icon: <FaSearch /> },
    { label: "Adattabilità", icon: <FaSyncAlt /> },
];

const AboutPage: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimationControls();

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 py-10 text-white relative bg-black overflow-x-hidden">

            {/* Foto + Intro */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 mb-12 mx-auto px-">
                <motion.figure
                    style={{ y: scrollY * 0.05 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="image-container relative flex justify-center md:w-5/12"
                >
                    <img
                        className="base-image fade-full w-60 md:w-full rounded-xl shadow-2xl"
                        src="/image/iopoltrona.png"
                        alt="Foto Valerio al pc"
                    />
                    <img
                        className="hover-image fade-full absolute top-0 left-0 w-60 md:w-full rounded-xl shadow-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                        src="/image/iopoltronaparlo.png"
                        alt="Foto Valerio al pc con sorriso"
                    />
                </motion.figure>

                <motion.div
                    style={{ y: -scrollY * 0.02 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-7/12 md:leading-8 lg:leading-9 text-gray-300 text-center md:text-left text-lg sm:text-xl italic md:ml-auto md:pr-10 mt-12"
                >
                    Sono Valerio Di Biagio, un Junior Front-End Developer con passione per il design, l’usabilità e la creazione di interfacce pulite e intuitive. Dopo diverse esperienze lavorative che mi hanno sviluppato organizzazione, problem solving e attenzione alle persone, ho scelto di dedicarmi allo sviluppo web.<br />

                    Mi occupo principalmente di HTML, CSS, JavaScript, React e TypeScript, con una solida base di UX/UI e component design. Ho realizzato progetti come componenti UI documentati con Storybook, e-commerce e prototipi web, sempre con un focus su estetica, accessibilità e responsività.<br />

                    Continuo a crescere nel mondo del front-end, esplorando nuove tecnologie e cercando di costruire esperienze digitali funzionali, coerenti e piacevoli da usare.
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-4xl p-8 shadow-xl flex flex-col items-center text-center relative"
            >
                <h2 className="text-gray-300 text-5xl sm:text-5xl md:text-5xl font-semibold mb-15">Il mio percorso in breve</h2>

                {/* Timeline*/}
                <div className="flex justify-center w-full mb-8">
                    <div className="flex flex-col gap-10 text-2xl text-gray-300">
                        {timelineData.map((item, idx) => {
                            const ref = useRef(null);
                            const isInView = useInView(ref, { once: true, margin: "-50px" });

                            useEffect(() => {
                                if (isInView) {
                                    controls.start({ opacity: 1, x: 0, transition: { duration: 0.6, delay: idx * 0.3 } });
                                }
                            }, [controls, isInView, idx]);

                            return (
                                <motion.div
                                    key={idx}
                                    ref={ref}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={controls}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className={`${item.color} w-5 h-5 rounded-full shadow-lg z-10`}></div>
                                        {idx !== timelineData.length - 1 && (
                                            <div className="w-1 bg-gradient-to-b from-blue-400 via-green-400 to-yellow-400 flex-1"></div>
                                        )}
                                    </div>
                                    {/* Testo */}
                                    <div className="text-left">
                                        <p className="text-gray-300 font-semibold">{item.title}</p>
                                        <p className="text-gray-400 text-sm">{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                {/* Soft-Skills */}
                <h2 className="text-gray-300 text-5xl sm:text-5xl md:text-5xl font-semibold mt-10">Soft Skills</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-8 mt-15 ">
                    {softSkillsData.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-900 rounded-full text-sm font-semibold"
                            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255,255,255,0.2)" }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
                        >
                            {skill.icon} {skill.label}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
