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
        category: "UX/UI Design",
        description:
            "Un’app moderna per la gestione della mobilità urbana, con un’interfaccia intuitiva, dark mode e un design accessibile.",
        image: "/image/topgames-hero.png"
    },
    {
        slug: "booroad",
        title: "BooRoad",
        category: "UX/UI Design",
        description:
            "Un’app moderna per la gestione della mobilità urbana, con un’interfaccia intuitiva, dark mode e un design accessibile.",
        image: "/image/booroad-hero.png"
    },
    {
        slug: "componente-header",
        title: "Componente Header",
        category: "UX/UI Design",
        description:
            "Un’app moderna per la gestione della mobilità urbana, con un’interfaccia intuitiva, dark mode e un design accessibile.",
        image: "/image/header-light-desktop.png"
    },

];

export default featuredProjects;