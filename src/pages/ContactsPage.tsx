import React from "react";
import { motion } from "framer-motion";

const ContactsPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 py-20 text-white relative bg-black overflow-x-hidden">

            {/* Hero Section */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 mb-12 mx-auto px-4">

                {/* Immagine con hover */}
                <motion.figure
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="image-container relative md:w-6/12 rounded-xl shadow-2xl overflow-hidden"
                >
                    {/* Immagine base */}
                    <img
                        className="base-image fade-full w-full h-full object-cover"
                        src="/image/iocontelefono.png"
                        alt="Foto Valerio al pc"
                    />
                    {/* Immagine hover */}
                    <img
                        className="hover-image fade-full absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500"
                        src="/image/iocontelefonoparlo.png"
                        alt="Foto Valerio al pc che parla"
                    />
                </motion.figure>

                {/* Paragrafo animato */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-5/12 md:leading-8 lg:leading-10 text-gray-300 text-center md:text-left text-lg sm:text-xl italic"
                >
                    Sono sempre aperto a nuove collaborazioni, progetti e opportunità di crescita professionale.
                    Se vuoi discutere un’idea, sviluppare un progetto o semplicemente fare due chiacchiere sul mondo dello tech, scrivimi pure.
                </motion.div>

            </div>
        </div>
    );
}

export default ContactsPage;
