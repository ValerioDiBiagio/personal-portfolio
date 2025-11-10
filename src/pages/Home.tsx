import React from "react";
import HeroSection from "../components/HeroSection";
import BannerLogos from "../components/BannerLogos";
import HomeProjectsCard from "../components/HomeProjectsCard";

const Home: React.FC = () => {
    const featuredProjects = [
        {
            title: "Top Games",
            category: "UX/UI Design",
            description:
                "Un’app moderna per la gestione della mobilità urbana, con un’interfaccia intuitiva, dark mode e un design accessibile.",
            image: "/image/topgames-hero.png",
            link: "/projects",
        },
        {
            title: "BooRoad",
            category: "UX/UI Design",
            description:
                "Un’app moderna per la gestione della mobilità urbana, con un’interfaccia intuitiva, dark mode e un design accessibile.",
            image: "/image/booroad-hero.png",
            link: "/projects",
        },
        {
            title: "Componente Header",
            category: "UX/UI Design",
            description:
                "Un’app moderna per la gestione della mobilità urbana, con un’interfaccia intuitiva, dark mode e un design accessibile.",
            image: "/image/header-light-desktop.png",
            link: "/projects",
        },

    ];

    return (
        <>
            <HeroSection
                name="Benvenuto, sono Valerio!"
                title="Front-end Developer | UX/UI Focused"
                description="Junior Front-end Developer con formazione Fullstack e specializzazione UX/UI. Trasferisco nel codice un’attenzione unica al dettaglio per realizzare interfacce robuste e visivamente accattivanti."
            />
            <BannerLogos />

            <HomeProjectsCard projects={featuredProjects} interval={8000} />

        </>
    );
};

export default Home;
