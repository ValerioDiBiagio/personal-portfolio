import React from "react";

const logos = [
    "./image/apple.png",
    "./image/google.png",
];

const BannerLogos: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-6">
            <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-1 ">
                Le mie competenze:
            </h2>

            {/* Contenitore del banner */}
            <div className="relative overflow-hidden w-[50%]">
                {/* Gradient ai lati */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#000000] to-transparent z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#000000] to-transparent z-10"></div>

                {/* Banner scorrevole */}
                <div className="flex scroll-animation space-x-6 p-3">
                    {[...logos, ...logos].map((logo, i) => (
                        <img key={i} src={logo} alt="logo" className="h-10 w-auto" />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default BannerLogos;
