interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
};


const featuredProjects: Project[] = [
    {
        slug: "top-games",
        title: "Top Games",
        category: "Full Stack Development",
        description:
            "Progetto di gruppo per lo sviluppo di un e-commerce di videogiochi, con contributo sia al frontend che al backend.",
        image: "/image/topgames-hero.png"
    },
    {
        slug: "booroad",
        title: "BooRoad",
        category: "Front-End Development",
        description:
            "Sviluppo del frontend di un prototipo per la gestione di viaggiatori e viaggi con dati statici.",
        image: "/image/booroad-hero.png"
    },
    {
        slug: "componente-header",
        title: "Componente Header",
        category: "UX/UI Design",
        description:
            "Sviluppo di un header UI component per un sito dedicato alla tecnologia.",
        image: "/image/header-light-desktop.png"
    },

];

export default featuredProjects;