import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HomeContactSection = () => {
    return (
        <section className="fade-contenitor relative w-full py-10 bg-black text-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center justify-center px-6"
            >
                {/* Linea luminosa di separazione */}
                <div className="w-70 h-[3px] bg-gradient-to-r from-cyan-400 via-lime-500 to-cyan-400 mx-auto mb-8"></div>

                {/* Titolo con animazione elegante */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-gray-300 text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 mt-6"
                >
                    Hai un progetto in mente?
                </motion.h2>

                {/* Sottotitolo descrittivo */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl mb-10 leading-relaxed"
                >
                    Trasformiamolo insieme in qualcosa di straordinario.
                    <br className="hidden sm:block" />
                    Raccontami il tuo progetto e diamo vita a qualcosa di unico.
                </motion.p>

                {/* Bottone con effetto hover glow */}
                <motion.div
                    whileHover={{ scale: 1.05 }}

                >
                    <NavLink
                        to="/contacts"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 transition duration-300 font-bold rounded-full shadow-lg text-base sm:text-lg bg-gray-300 text-gray-900 hover:bg-cyan-500"
                    >
                        CONTATTAMI
                    </NavLink>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HomeContactSection;
