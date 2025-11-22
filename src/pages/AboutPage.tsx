import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { FaLightbulb, FaUsers, FaPalette, FaSearch, FaSyncAlt, FaGamepad, FaFutbol, FaChessBoard, FaPaintBrush, FaStar, FaCar, FaClock } from "react-icons/fa";

const timelineData = [
    { title: "2011/2016 Studente", subtitle: "Presso istituto alberghiero nel settore dell'accoglienza turistica", color: "bg-orange-400" },
    { title: "2016/2018 Receptionist", subtitle: "Esperienze nel settore dell'accoglienza turistica", color: "bg-yellow-400" },
    { title: "2018/2023 Hairstylist", subtitle: "Accademia triennale da acconciatore, con varie esperienze nel settore", color: "bg-green-500" },
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

const passionsData = [
    { label: "Videogiochi", icon: <FaGamepad /> },
    { label: "Calcio", icon: <FaFutbol /> },
    { label: "Giochi da tavolo", icon: <FaChessBoard /> },
    { label: "Dipingere miniature", icon: <FaPaintBrush /> },
    { label: "Collezionismo", icon: <FaStar /> },
    { label: "Automobili", icon: <FaCar /> },
    { label: "Orologi", icon: <FaClock /> },
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
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 mb-12 mx-auto">
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
                    Sono Valerio Di Biagio, un Junior Front-End Developer con passione per il design, l’usabilità e la creazione di interfacce pulite e intuitive. Dopo diverse esperienze lavorative in cui ho sviluppato organizzazione, problem solving e attenzione alle persone, ho scelto di dedicarmi allo sviluppo web.<br />

                    Mi occupo principalmente di HTML, CSS, JavaScript, React e TypeScript, con una solida base di UX/UI e component design. Ho realizzato progetti come componenti UI documentati con Storybook, e-commerce e prototipi web, sempre con un focus su estetica, accessibilità e responsività.<br />

                    Continuo a crescere nel mondo del front-end, esplorando nuove tecnologie e cercando di costruire esperienze digitali funzionali, coerenti e piacevoli da usare.
                </motion.div>
            </div>

            {/* Section: Timeline & Skills */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-4xl p-8 shadow-xl flex flex-col items-center text-center relative"
            >
                <h2 className="text-gray-300 text-3xl sm:text-5xl font-semibold">Il mio percorso in breve</h2>

                <p className="text-gray-400 max-w-2xl mb-6 mt-2 text-lg italic">
                    <p className="text-gray-400 max-w-2xl mb-6 mt-2 text-lg italic">
                        Un percorso vario che mi ha permesso di sviluppare competenze trasversali, adattabilità e una visione più completa del lavoro e delle persone.</p></p>

                {/* Timeline */}
                <div className="flex justify-center w-full mb-8">
                    <div className="flex flex-col gap-10 text-xl text-gray-300">
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
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className={`${item.color} w-5 h-5 rounded-full shadow-lg z-10`}></div>
                                        {idx !== timelineData.length - 1 && (
                                            <div className="w-1 bg-gradient-to-b from-blue-400 via-green-400 to-yellow-400 flex-1"></div>
                                        )}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-gray-300 font-semibold">{item.title}</p>
                                        <p className="text-gray-400 text-sm">{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Soft Skills */}
                <h2 className="text-gray-300 text-3xl sm:text-5xl font-semibold mt-10 mb-6">Le mie soft skills</h2>
                <p className="text-gray-400 max-w-2xl mb-6 mt-2 text-lg italic">
                    Competenze che mi guidano nel lavoro quotidiano e mi permettono di dare il massimo in ogni progetto.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-8 mt-5">
                    {softSkillsData.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-900 rounded-full text-sm font-semibold"
                            whileHover={{ scale: 1.15, boxShadow: "0 0 10px lime" }}
                            animate={{ rotate: [0, 2, -7, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.3 }}
                        >
                            {skill.icon} {skill.label}
                        </motion.span>
                    ))}
                </div>

                {/* Passioni */}
                <h2 className="text-gray-300 text-3xl sm:text-5xl font-semibold mt-10 mb-6">Le mie passioni</h2>
                <p className="text-gray-400 max-w-2xl mb-6 mt-2 text-lg italic">
                    Oltre allo sviluppo, ho diverse passioni che mi ispirano, mi rilassano e stimolano la mia creatività.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8 mt-5">
                    {passionsData.map((passion, idx) => (
                        <motion.span
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-900 rounded-full text-sm font-semibold"
                            whileHover={{ scale: 1.15, boxShadow: "0 0 10px lime" }}
                            animate={{ rotate: [0, 2, -7, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: idx * 0.3 }}
                        >
                            {passion.icon} {passion.label}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
