import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
    id: number;
    size: number;
    x: number;
    y: number;
    color: string;
    duration: number;
    delay: number;
}

const HeroBackground: React.FC = () => {
    const particles: Particle[] = useMemo(() => {
        const colors = [
            "rgba(0,255,255,0.9)",
            "rgba(0,128,255,0.9)",
            "rgba(255,255,255,0.9)",
            "rgba(238, 236, 238, 0.9)",
            "rgba(18, 202, 58, 0.9)",
        ];

        return Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            size: Math.random() * 5 + 2,
            x: Math.random() * 100,
            y: Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            duration: 9 + Math.random() * 9, // velocità movimento
            delay: Math.random() * 4,
        }));
    }, []);

    return (
        <div className="fade-contenitor absolute inset-0 overflow-hidden bg-black">
            {/* leggero bagliore centrale per profondità */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.25),rgba(0,0,0,1))]" />

            {/* particelle che si muovono realmente per tutto lo sfondo */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full mix-blend-screen"
                    style={{
                        width: p.size,
                        height: p.size,
                        top: `${p.y}%`,
                        left: `${p.x}%`,
                        backgroundColor: p.color,
                        filter: `drop-shadow(0 0 6px ${p.color})`,
                    }}
                    animate={{
                        // movimento continuo in tutte le direzioni
                        x: ["0vw", `${Math.random() * 200 - 100}vw`],
                        y: ["0vh", `${Math.random() * 200 - 100}vh`],
                        opacity: [1, 0.6, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "linear",
                    }}
                />
            ))}

            {/* bagliore globale leggero */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]"
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default HeroBackground;
