import React from "react";
import HeroSection from "../components/HeroSection";
import BannerLogos from "../components/BannerLogos";
import HomeProjectsCard from "../components/HomeProjectsCard";
import featuredProjects from "../data/projects";
import HomeContactSection from "../components/HomeContactSection";

const Home: React.FC = () => {


    return (
        <>
            <HeroSection
                name="Benvenuto, sono Valerio!"
                title="Front-end Developer | UX/UI Focused"
                description="Junior Front-end Developer con formazione Fullstack e specializzazione UX/UI. Trasferisco nel codice un’attenzione unica al dettaglio per realizzare interfacce robuste e visivamente accattivanti."
            />
            <BannerLogos />

            <HomeProjectsCard projects={featuredProjects} interval={8000} />
            <HomeContactSection />

        </>
    );
};

export default Home;
