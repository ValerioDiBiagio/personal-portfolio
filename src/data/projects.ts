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
            "/image/booroad/booroad-hero-detail.png",
            "/image/booroad/booroad-home.png",
            "/image/booroad/booroad-travel.png",
            "/image/booroad/booroad-travellers.png",
            "/image/booroad/booroad-travellers-details.png",
            "/image/booroad/booroad-guides.png",
            "/video/booroad/booroad-video.mp4",
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
            "/image/header-design/light-desktop.png",
            "/image/header-design/light-tablet.png",
            "/image/header-design/dark-desktop.png",
            "/image/header-design/dark-tablet.png",
            "/video/header-design/header-video.mp4",
        ]
    },

];

export default featuredProjects;