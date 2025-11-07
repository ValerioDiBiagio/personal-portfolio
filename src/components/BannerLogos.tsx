import React from "react";

const logos = [
    { src: "./image/javascript.png", alt: "JavaScript" },
    { src: "./image/typescript.png", alt: "TypeScript" },
    { src: "./image/html.png", alt: "HTML5" },
    { src: "./image/css.png", alt: "CSS3" },
    { src: "./image/react.png", alt: "React" },
    { src: "./image/bootstrap.png", alt: "Bootstrap" },
    { src: "./image/tailwind.png", alt: "Tailwind CSS" },
    { src: "./image/mysql.png", alt: "MySQL" },
    { src: "./image/nodejs.png", alt: "Node.js" },
    { src: "./image/express.png", alt: "Express.js" },
    { src: "./image/vite.png", alt: "Vite" },
    { src: "./image/github.png", alt: "GitHub" },
    { src: "./image/storybook.png", alt: "Storybook" },
    { src: "./image/postman.png", alt: "Postman" },
    { src: "./image/vsc.png", alt: "Visual Studio Code" },
];

const BannerLogos: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-6">
            <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-1">
                Le mie competenze tecniche:
            </h2>

            <div className="relative overflow-hidden w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] p-4">
                {/* Gradient ai lati */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Banner continuo */}
                <div className="scroll-container">
                    <div className="scroll-content">
                        {logos.map((logo, i) => (
                            <img key={i} src={logo.src} alt={logo.alt} className="h-14 w-auto mx-4 inline-block" />
                        ))}
                    </div>
                    <div className="scroll-content">
                        {logos.map((logo, i) => (
                            <img key={i} src={logo.src} alt={logo.alt} className="h-14 w-auto mx-4 inline-block" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerLogos;
