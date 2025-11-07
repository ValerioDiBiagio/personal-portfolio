import React from "react";
import HeroSection from "../components/HeroSection";
import BannerLogos from "../components/BannerLogos";

const Home: React.FC = () => {
    return (
        <>
            <HeroSection name='Benvenuto, sono Valerio!' title='Front-end Developer | UX/UI Focused' description="Junior Front-end Developer con formazione Fullstack e specializzazione UX/UI. Trasferisco nel codice un’attenzione unica al dettaglio per realizzare interfacce robuste e visivamente accattivanti." />
            <BannerLogos />
        </>

    )
}

export default Home;