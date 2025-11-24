interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    media: string[];
};


const featuredProjects: Project[] = [
    {
        slug: "top-games",
        title: "Top Games",
        category: "Full Stack Development",
        description:
            "Progetto di gruppo per lo sviluppo di un e-commerce di videogiochi, con contributo sia al frontend che al backend.",
        image: "/image/topgames-hero.png",
        media: [
            "/image/topgames/topgames-popup.png",
            "/image/topgames/topgames-hero-detail.png",
            "/image/topgames/topgames-ultimiarrivi.png",
            "/image/topgames/topgames-cards.png",
            "/image/topgames/topgames-footer.png",
            "/image/topgames/topgames-details.png",
            "/image/topgames/topgames-ps5.png",
            "/image/topgames/topgames-wishlist.png",
            "/image/topgames/topgames-cart.png",
            "/image/topgames/topgames-checkout.png",
            "/video/topgames/top-games-video.mp4",
            "/video/topgames/top-games-responsive.mp4",
        ]
    },
    {
        slug: "booroad",
        title: "BooRoad",
        category: "Front-End Development",
        description:
            "Sviluppo del frontend di un prototipo per la gestione di viaggiatori e viaggi con dati statici.",
        image: "/image/booroad-hero.png",
        media: [
            "/image/topgames/1.png",
            "/image/topgames/2.png",
            "/image/topgames/3.png",
        ]
    },
    {
        slug: "componente-header",
        title: "Componente Header",
        category: "UX/UI Design",
        description:
            "Sviluppo di un header UI component per un sito dedicato alla tecnologia.",
        image: "/image/header-light-desktop.png",
        media: [
            "/image/topgames/1.png",
            "/image/topgames/2.png",
            "/image/topgames/3.png",
        ]
    },

];

export default featuredProjects;