interface MediaItem {
    src: string;
    caption?: string;
    alt?: string;
}

interface Project {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    media: Array<string | MediaItem>;
    technologies: string[];
    featured?: boolean;
}

const featuredProjects: Project[] = [
    {
        slug: "portfolio-personale",
        title: "Portfolio Personale",
        category: "Front-End Development",
        featured: false,
        shortDescription:
            "Sviluppo del mio portfolio personale",
        longDescription:
            `Questo progetto è il mio portfolio personale, realizzato con l’obiettivo di presentare il mio lavoro attraverso un’interfaccia moderna, fluida e completamente responsiva.<br/><br/>
             L’applicazione è costruita con React e TypeScript, una combinazione che mi ha permesso di mantenere un’architettura pulita, facilmente scalabile e fortemente tipizzata.<br/><br/>
             Per la parte visuale ho scelto Tailwind CSS, che mi ha dato la possibilità di progettare un design consistente e modulare, curando nel dettaglio spacing, colori e transizioni.
             Il portfolio è organizzato in sezioni ben definite, che scorrono con animazioni morbide e micro-interazioni curate: dal menu allineato con un layout pulito, alla presentazione iniziale con elementi che compaiono in fade-in e slide.<br/><br/>
             Ogni componente è stato progettato per essere riutilizzabile e facilmente mantenibile.<br/><br/>
             La sezione dei progetti mette in evidenza card interattive con effetti hover e transizioni fluide, pensate per valorizzare i contenuti senza appesantire l’esperienza utente.<br/><br/>
             Ho prestato particolare attenzione all’accessibilità e alla leggibilità, utilizzando palette minimali e un design essenziale che mette il contenuto al centro.
             Complessivamente, questo portfolio rappresenta non solo la mia identità professionale, ma anche il mio modo di concepire lo sviluppo frontend: attenzione al dettaglio, cura dell’esperienza utente e pulizia del codice.<br/><br/>
             È un progetto che evolve insieme a me, ed è stato progettato per essere facilmente aggiornabile man mano che crescono le mie competenze e i miei lavori.`,
        image: "/image/portfolio-hero.png",
        media: [
            { src: "/image/portfolio/portfolio-hero.png", caption: "Hero section della Home", alt: "Hero section della home" },
            { src: "/image/portfolio/portfolio-progetti-in-evidenza.png", caption: "Progetti in evidenza", alt: "Progetti in evidenza" },
            { src: "/image/portfolio/portfolio-contattami.png", caption: "Sezione contattami", alt: "Sezione contattami" },
            { src: "/image/portfolio/portfolio-sezione-progetti-hero.png", caption: "Hero della pagina Progetti", alt: "Hero della pagina Progetti" },
            { src: "/image/portfolio/portfolio-sezione-i-miei-progetti.png", caption: "I miei progetti", alt: "I miei progetti" },
            { src: "/image/portfolio/portfolio-sezione-chi-sono-hero.png", caption: "Hero della pagina Chi Sono", alt: "Hero della pagina Chi Sono" },
            { src: "/image/portfolio/portfolio-il-mio-percorso-in-breve.png", caption: "Il mio percorso in breve", alt: "Il mio percorso in breve" },
            { src: "/image/portfolio/portfolio-soft-skills-passioni.png", caption: "Le mie soft skills e passioni", alt: "Le mie soft skills e passioni" },
            { src: "/image/portfolio/portfolio-sezione-contatti-hero.png", caption: "Hero della pagina Contatti", alt: "Hero della pagina Contatti" },
            { src: "/image/portfolio/portfolio-form-email.png", caption: "Form per inviare email", alt: "Form per inviare email" },
            { src: "/video/portfolio/portfolio-video.mp4", caption: "Video - Demo del mio portfolio", alt: "Video - Demo del mio portfolio" },
            { src: "/video/portfolio/portfolio-responsive-video.mp4", caption: "Video - Versione responsive del mio portfolio", alt: "Video - Versione responsive del mio portfolio" },
        ],
        technologies: ["React", "TypeScript", "HTML5", "CSS3", "Tailwind", "Vite", "GitHub", "Visual Studio Code"],
    },
    {
        slug: "componente-header",
        title: "Componente Header",
        category: "UX/UI Design",
        featured: true,
        shortDescription:
            "Sviluppo di un header UI component per un sito dedicato alla tecnologia.",
        longDescription:
            `Ho realizzato un header UI component per un sito web di tecnologia, utilizzando React, TypeScript e Storybook. L’obiettivo del progetto era creare un componente modulare, riutilizzabile e facilmente documentabile, seguendo le best practice dello sviluppo frontend moderno.<br/><br/>
             Con Storybook ho gestito la documentazione completa del componente, creando una libreria di casi d’uso e varianti, così da garantire che designer e sviluppatori potessero visualizzare e testare le funzionalità in maniera chiara e indipendente dal resto dell’applicazione.<br/><br/>
             Con React ho implementato la struttura del componente, gestendo la logica interna, lo stato e le interazioni. Ho prestato particolare attenzione alla responsività, assicurando che l’header si adattasse correttamente a diverse risoluzioni e dispositivi, dai desktop ai tablet e mobile.<br/><br/>
             Durante lo sviluppo, mi sono ispirato ai principi di Atomic Design per creare componenti modulari e scalabili, ai principi di Gestalt per garantire un layout chiaro e intuitivo, e alle linee guida di accessibilità per assicurare che tutti gli utenti potessero navigare facilmente.<br/><br/>
             Questo progetto mi ha permesso di consolidare competenze nella creazione di componenti UI modulari, responsivi e accessibili, nella documentazione con Storybook e nell’adozione di metodologie di design e sviluppo orientate alla qualità e alla scalabilità del codice.`,
        image: "/image/header-light-desktop.png",
        media: [
            { src: "/image/header-design/light-desktop.png", caption: "Header nella versione desktop light", alt: "Header nella versione desktop light" },
            { src: "/image/header-design/light-tablet.png", caption: "Header nella versione tablet light", alt: "Header nella versione tablet light" },
            { src: "/image/header-design/dark-desktop.png", caption: "Header nella versione desktop dark", alt: "Header nella versione desktop dark" },
            { src: "/image/header-design/dark-tablet.png", caption: "Header nella versione tablet dark", alt: "Header nella versione tablet dark" },
            { src: "/video/header-design/header-video.mp4", caption: "Video - Demo dell'header", alt: "Video - Demo dell'header" },
        ],
        technologies: ["React", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Storybook", "Vite", "GitHub", "Visual Studio Code"],
    },
    {
        slug: "top-games",
        title: "Top Games",
        category: "Full Stack Development",
        featured: true,
        shortDescription:
            "Progetto di gruppo per lo sviluppo di un e-commerce di videogiochi, con contributo sia al frontend che al backend.",
        longDescription:
            `Progetto di gruppo per lo sviluppo di un e-commerce di videogiochi, occupandomi sia del backend che del frontend.<br/><br/>
             Sul backend, ho lavorato con Express e MySQL, creando API RESTful, gestendo la connessione al database e sviluppando middleware per la gestione degli errori e per garantire la sicurezza delle richieste.<br/><br/>
             Sul frontend, ho contribuito allo sviluppo con React, implementando componenti dinamici e interattivi, e utilizzando Bootstrap e CSS puro per garantire un design accattivante e coerente con l’esperienza utente complessiva.<br/><br/>
             All’interno del team, il mio ruolo principale si è concentrato sulla UI/UX e sul design responsivo. Mi sono occupato della progettazione della struttura dei componenti React, della gestione delle rotte per una navigazione fluida e dell’implementazione di interazioni dinamiche come le card dei prodotti e la barra di ricerca, oltre a ottimizzare la responsività e l’accessibilità per garantire una fruizione ottimale su tutti i dispositivi.<br/><br/>
             Grazie a questa esperienza, ho consolidato le mie competenze nello sviluppo full-stack, nella creazione di interfacce moderne e funzionali e nel lavoro collaborativo all’interno di un team.`,
        image: "/image/topgames-hero.png",
        media: [
            { src: "/image/topgames/topgames-popup.png", caption: "Popup di benvenuto", alt: "Popup di benvenuto" },
            { src: "/image/topgames/topgames-hero-detail.png", caption: "Hero section", alt: "Hero section" },
            { src: "/image/topgames/topgames-ultimiarrivi.png", caption: "Sezione Ultimi Arrivi", alt: "Sezione Ultimi Arrivi" },
            { src: "/image/topgames/topgames-cards.png", caption: "Cards dei prodotti", alt: "Cards dei prodotti" },
            { src: "/image/topgames/topgames-footer.png", caption: "Footer del sito", alt: "Footer del sito" },
            { src: "/image/topgames/topgames-details.png", caption: "Pagina con card di dettaglio del prodotto", alt: "Pagina con card di dettaglio del prodotto" },
            { src: "/image/topgames/topgames-ps5.png", caption: "Pagina PS5", alt: "Pagina PS5" },
            { src: "/image/topgames/topgames-wishlist.png", caption: "Pagina della wishlist", alt: "Pagina della wishlist" },
            { src: "/image/topgames/topgames-cart.png", caption: "Sezione del carrello", alt: "Sezione del carrello" },
            { src: "/image/topgames/topgames-checkout.png", caption: "Pagina del checkout", alt: "Pagina del checkout" },
            { src: "/video/topgames/top-games-video.mp4", caption: "Video - Demo del sito", alt: "Video - Demo del sito" },
            { src: "/video/topgames/top-games-responsive.mp4", caption: "Video - Versione responsive del sito", alt: "Video - Versione responsive del sito" },
        ],
        technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "MySQL", "Node.js", "Express.js", "Vite", "Postman", "GitHub", "Visual Studio Code"],
    },
    {
        slug: "booroad",
        title: "BooRoad",
        category: "Front-End Development",
        featured: true,
        shortDescription:
            "Sviluppo del frontend di un prototipo per la gestione di viaggiatori e viaggi con dati statici.",
        longDescription:
            `Ho partecipato allo sviluppo del frontend di un prototipo per la gestione di viaggiatori e viaggi, basato su dati statici, occupandomi dell’intera progettazione visiva e dell’implementazione delle interazioni utente.<br/><br/>
             Mi sono concentrato sul design e sul layout del sito, curando la disposizione dei componenti, la struttura delle pagine e la coerenza visiva dell’interfaccia. Ho prestato particolare attenzione alla responsività, assicurando che l’applicazione fosse perfettamente fruibile su dispositivi desktop, tablet e mobile.<br/><br/>
             Ho gestito la scelta dei colori, delle icone, della tipografia e delle immagini, garantendo un aspetto visivo armonioso e una chiara gerarchia delle informazioni. Ho inoltre implementato la navigazione tra le pagine e la visualizzazione dei dati statici, creando componenti React modulari e riutilizzabili per semplificare la manutenzione e la scalabilità del progetto.<br/><br/>
             Per lo sviluppo ho utilizzato React per la struttura dei componenti e la gestione dello stato locale, Bootstrap per velocizzare lo styling dei layout e dei componenti interattivi, e CSS puro per personalizzazioni avanzate e dettagli grafici.<br/><br/>
             Grazie a questo progetto, ho consolidato le mie competenze nella progettazione e realizzazione di interfacce moderne, nello sviluppo frontend modulare e nella gestione della responsività e dell’usabilità, migliorando anche la capacità di tradurre esigenze di design in implementazioni funzionali.`,
        image: "/image/booroad-hero.png",
        media: [
            { src: "/image/booroad/booroad-hero-detail.png", caption: "Hero section", alt: "Hero section" },
            { src: "/image/booroad/booroad-home.png", caption: "Home del sito", alt: "Home del sito" },
            { src: "/image/booroad/booroad-travel.png", caption: "Pagina di dettaglio del viaggio", alt: "Pagina di dettaglio del viaggio" },
            { src: "/image/booroad/booroad-travellers.png", caption: "Pagina con la lista dei viaggiatori", alt: "Pagina con la lista dei viaggiatori" },
            { src: "/image/booroad/booroad-travellers-details.png", caption: "Sezione con dettaglio dei viaggiatori", alt: "Sezione con dettaglio dei viaggiatori" },
            { src: "/image/booroad/booroad-guides.png", caption: "Pagina con l'elenco delle guide", alt: "Pagina con l'elenco delle guide" },
            { src: "/video/booroad/booroad-video.mp4", caption: "Video - Demo del sito", alt: "Video - Demo del sito" },
        ],
        technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Vite", "GitHub", "Visual Studio Code"],
    },
    {
        slug: "photo-blog",
        title: "Photo Blog",
        category: "Front-End Development",
        featured: false,
        shortDescription:
            "Sviluppo frontend di un blog fotografico delle vacanze estive",
        longDescription:
            `Questo progetto nasce dal desiderio di trasformare una semplice raccolta di immagini in qualcosa di più caldo e narrativo. Ho realizzato una galleria fotografica utilizzando HTML5, CSS e JavaScript, ispirandomi all’estetica analogica delle vecchie bacheche in sughero e delle foto Polaroid.<br/><br/>
            L’interfaccia è costruita come una vera bacheca: lo sfondo richiama il sughero e ogni foto è presentata come se fosse appuntata con una puntina. L’obiettivo era dare la sensazione di trovarsi davanti a un angolo personale, quasi fisico, fatto di ricordi dell’“Estate ’24”.<br/><br/>
            Le immagini sono inserite all’interno di cornici bianche tipiche delle Polaroid, complete di data e titolo. Questa scelta stilistica aiuta a creare un’atmosfera nostalgica e immediata, come se ogni scatto raccontasse un momento preciso: lo skate park, una passeggiata tra i fiori, le Alpi… piccoli frammenti di viaggio che si compongono in una griglia ordinata e visivamente equilibrata.<br/><br/>
            Per rendere l’esperienza più viva, ho integrato transizioni e micro–interazioni tramite JavaScript. Le foto entrano in scena con gradualità, reagiscono al passaggio del mouse e mantengono un ritmo fluido durante lo scorrimento. Tutto è pensato per dare continuità al racconto visivo e rendere la fruizione più naturale.<br/><br/>`,
        image: "/image/photo-blog.png",
        media: [
            { src: "/image/photo-blog/photo-blog.png", caption: "Photo Blog", alt: "Photo Blog" },
            { src: "/image/photo-blog/photo-blog-panoramica.png", caption: "Panoramica del sito", alt: "Panoramica del sito" },
            { src: "/image/photo-blog/photo-blog-panoramica-2.png", caption: "Panormica del sito", alt: "Panoramica del sito" },
            { src: "/image/photo-blog/photo-blog-hover.png", caption: "Effetto hover delle card", alt: "Effetto hover delle card" },
            { src: "/image/photo-blog/photo-blog-overlay.png", caption: "Effetto overlay sulle immagini", alt: "Effetto overlay sulle immagini" },
            { src: "/video/photo-blog/photo-blog-video.mp4", caption: "Video - Demo di Photo Blog", alt: "Video - Demo di Photo Blog" },
        ],
        technologies: ["JavaScript", "HTML5", "CSS3", "Postman", "GitHub", "Visual Studio Code"],
    }
];

export default featuredProjects;




