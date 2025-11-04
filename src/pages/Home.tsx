import React from "react";
import HeroSection from "../components/HeroSection";

const Home: React.FC = () => {
    return (
        <div>
            <h2 className="text-white">Sono nella Home</h2>
            <HeroSection name='Valerio Di Biagio' title='Front-end Developer' subtitle='' description='' />

        </div>
    )
}

export default Home;