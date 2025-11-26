import React from "react";

// Lista loghi con URL alla documentazione ufficiale
const logos = [
    { src: "./image/javascript.png", alt: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { src: "./image/typescript.png", alt: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
    { src: "./image/html.png", alt: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { src: "./image/css.png", alt: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { src: "./image/react.png", alt: "React", url: "https://react.dev/" },
    { src: "./image/bootstrap.png", alt: "Bootstrap", url: "https://getbootstrap.com/docs/" },
    { src: "./image/tailwind.png", alt: "Tailwind CSS", url: "https://tailwindcss.com/docs/" },
    { src: "./image/mysql.png", alt: "MySQL", url: "https://dev.mysql.com/doc/" },
    { src: "./image/nodejs.png", alt: "Node.js", url: "https://nodejs.org/en/docs/" },
    { src: "./image/express.png", alt: "Express.js", url: "https://expressjs.com/en/guide/routing.html" },
    { src: "./image/vite.png", alt: "Vite", url: "https://vitejs.dev/guide/" },
    { src: "./image/github.png", alt: "GitHub", url: "https://docs.github.com/en" },
    { src: "./image/storybook.png", alt: "Storybook", url: "https://storybook.js.org/docs" },
    { src: "./image/postman.png", alt: "Postman", url: "https://learning.postman.com/" },
    { src: "./image/vsc.png", alt: "Visual Studio Code", url: "https://code.visualstudio.com/docs" },
];

const BannerLogos: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-6 mt-20">
            <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10">
                Le mie competenze tecniche
            </h2>

            <div className="relative overflow-hidden w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] p-4">
                {/* Gradient ai lati */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Banner continuo */}
                <div className="scroll-container">
                    <div className="scroll-content">
                        {logos.map((logo, i) => (
                            <a
                                key={`a-${i}`}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mx-4 hover:scale-110 transition-transform duration-200"
                            >
                                <img src={logo.src} alt={logo.alt} className="h-14 w-auto inline-block" />
                            </a>
                        ))}
                    </div>
                    <div className="scroll-content">
                        {logos.map((logo, i) => (
                            <a
                                key={`b-${i}`}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mx-4 hover:scale-110 transition-transform duration-200"
                            >
                                <img src={logo.src} alt={logo.alt} className="h-14 w-auto inline-block" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerLogos;
