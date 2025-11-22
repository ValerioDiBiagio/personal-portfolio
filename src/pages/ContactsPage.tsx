import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

/* -------------------
   VALIDAZIONE FORM
------------------- */
const ContactSchema = z.object({
    name: z.string().min(2, "Inserisci almeno 2 caratteri"),
    email: z.string().email("Email non valida"),
    message: z.string().min(10, "Il messaggio è troppo corto"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

const FORMSPREE_ID = "mjklndbk";

const ContactsPage: React.FC = () => {
    const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Errore Formspree");

            setToast({ type: "success", message: "Messaggio inviato! Ti risponderò presto." });
            reset();
            setTimeout(() => setToast(null), 4000);
        } catch {
            setToast({ type: "error", message: "Errore durante l'invio. Riprova." });
            setTimeout(() => setToast(null), 4000);
        }
    };

    const downloadCV = async () => {
        try {
            const response = await fetch("/pdf/Cv-ValerioDiBiagio.pdf");
            if (!response.ok) throw new Error("File non trovato");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Cv-ValerioDiBiagio.pdf";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (err) {
            console.error("Errore download CV:", err);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 py-20 text-white relative bg-black overflow-x-hidden">

            {/* Hero Section */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 mb-20 mx-auto px-4">
                <motion.figure
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="image-container relative md:w-6/12 rounded-xl shadow-2xl overflow-hidden group"
                >
                    <img
                        className="base-image fade-full w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                        src="/image/iocontelefono.png"
                        alt="Foto Valerio al pc"
                    />
                    <img
                        className="hover-image fade-full absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        src="/image/iocontelefonoparlo.png"
                        alt="Foto Valerio che parla al telefono"
                    />
                </motion.figure>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-5/12 md:leading-8 lg:leading-10 text-gray-300 text-center md:text-left text-lg sm:text-xl italic"
                >
                    Sono sempre aperto a nuove collaborazioni, progetti e opportunità di crescita professionale.
                    Se vuoi discutere un’idea, sviluppare un progetto o semplicemente fare due chiacchiere sul mondo tech, scrivimi pure.
                </motion.div>
            </div>

            <div className="w-24 h-[2px] bg-white/20 mb-16"></div>

            {/* Contact Cards */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 w-full max-w-5xl mb-20"
            >
                {[
                    {
                        key: "cv",
                        action: downloadCV,
                        icon: <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900" />,
                        label: "Scarica CV",
                    },
                    {
                        key: "github",
                        href: "https://github.com/ValerioDiBiagio",
                        icon: <Github className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900" />,
                        label: "GitHub",
                    },
                    {
                        key: "linkedin",
                        href: "https://www.linkedin.com/in/valerio-di-biagio-429769387/",
                        icon: <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-gray-900" />,
                        label: "LinkedIn",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={item.key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.1 }}
                        whileHover={{ scale: 1.07, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={item.action}
                        className={`flex-shrink-0 cursor-pointer bg-gray-300 border border-zinc-800 hover:bg-cyan-400 rounded-2xl p-3 sm:p-6 flex flex-col items-center gap-2 sm:gap-4 transition-all shadow-lg w-24 sm:w-44 h-24 sm:h-36 ${item.key === "linkedin" ? "sm:mr-4" : ""}`}
                    >
                        {item.href ? (
                            <a href={item.href} target="_blank" className="flex flex-col items-center gap-2 sm:gap-4">
                                {item.icon}
                                <p className="text-gray-900 text-center italic text-sm sm:text-lg">{item.label}</p>
                            </a>
                        ) : (
                            <>
                                {item.icon}
                                <p className="text-gray-900 text-center italic text-sm sm:text-lg">{item.label}</p>
                            </>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            <div className="w-24 h-[2px] bg-white/20 mb-16"></div>

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-full sm:max-w-3xl flex flex-col gap-6 shadow-xl relative group px-2 sm:px-8 md:px-16"
            >
                <h2 className="text-center text-gray-300 text-2xl sm:text-5xl font-semibold mb-5">
                    Scrivimi un messaggio
                </h2>

                <input
                    type="text"
                    placeholder="Il tuo nome"
                    {...register("name")}
                    className="w-full bg-zinc-900 text-gray-300 border border-lime-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

                <input
                    type="email"
                    placeholder="La tua email"
                    {...register("email")}
                    className="w-full bg-zinc-900 text-gray-300 border border-lime-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}

                <textarea
                    placeholder="Il tuo messaggio"
                    {...register("message")}
                    className="w-full h-40 bg-zinc-900 text-gray-300 border border-lime-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    animate={isSubmitting ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.1 }}
                    className="w-full bg-gray-300 text-gray-900 font-semibold py-3 rounded-xl hover:bg-cyan-400 transition-all"
                >
                    {isSubmitting ? "Invio..." : "INVIA MESSAGGIO"}
                </motion.button>

                {/* Animated Toast */}
                <AnimatePresence>
                    {toast && (
                        <motion.p
                            key={toast.message}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`absolute top-[-2rem] left-1/2 -translate-x-1/2 px-4 py-2 rounded-md font-medium ${toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
                        >
                            {toast.message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </motion.form>

            {/* CTA finale */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-300 mt-16 text-center italic text-lg"
            >
                Hai un’idea, un progetto o vuoi semplicemente confrontarti? Scrivimi, sarò felice di leggerti!
            </motion.p>
        </div>
    );
};

export default ContactsPage;
