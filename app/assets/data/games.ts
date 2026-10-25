export interface Game {
    title: string;
    slug: string;
    description: string;
    tech: string[];
    logo: string;
    banner?: string;
    screenshots: string[];
    color: string;
    releaseYear: string;
    playStoreUrl?: string;
    appStoreUrl?: string;
    itchUrl?: string;
    sourceUrl?: string;
}

export const gamesData: Game[] = [
    {
        title: "Risky Rocket",
        slug: "risky-rocket",
        description: "A high-stakes arcade game where precision is key.",
        tech: ["Unity", "C#"],
        logo: "rocket.webp",
        screenshots: ["risky_rocket_1.jpg", "risky_rocket_2.jpg", "risky_rocket_3.jpg", "risky_rocket_4.jpg", "risky_rocket_5.jpg", "risky_rocket_6.jpg"],
        color: "#31c381",
        releaseYear: "2021",
        itchUrl: "https://daniebeler.itch.io/risky-rocket",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.RiskyRocket",
        sourceUrl: "https://github.com/daniebeler/Risky-Rocket"
    },
    {
        title: "1D Pong",
        slug: "1d-pong",
        description: "Classic pong reimagined in a single dimension.",
        tech: ["Unity", "C#"],
        logo: "pong.webp",
        screenshots: [],
        color: "#ef6060",
        releaseYear: "2021",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.onedpong",
        sourceUrl: "https://github.com/daniebeler/1D-Pong"
    },
    {
        title: "Balance - The Game",
        slug: "balance",
        description: "Test your stability and patience in this physics-based puzzler.",
        tech: ["Unity", "C#"],
        logo: "balance.webp",
        screenshots: ["balance_1.png", "balance_2.png", "balance_3.png"],
        color: "#ffc656",
        releaseYear: "2020",
        itchUrl: "https://daniebeler.itch.io/balance",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.Balance",
        sourceUrl: "https://github.com/daniebeler/Balance"
    },
    {
        title: "Wrong Way",
        slug: "wrong-way",
        description: "A fast-paced driving game where the rules don't apply.",
        tech: ["Unity", "C#"],
        logo: "wrongway.webp",
        screenshots: [],
        color: "#32aa50",
        releaseYear: "2020",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.wrongway"
    },
    {
        title: "Parking Jam",
        slug: "parking-jam",
        description: "Solve the gridlock in this logic-based puzzle game.",
        tech: ["Unity", "C#", "Open source"],
        logo: "parkingjam.webp",
        screenshots: ["parking_jam_1.png", "parking_jam_2.png", "parking_jam_3.png", "parking_jam_4.png", "parking_jam_5.png", "parking_jam_6.png", "parking_jam_7.png", "parking_jam_8.png"],
        color: "#ed8923",
        releaseYear: "2020",
        itchUrl: "https://daniebeler.itch.io/parking-jam",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.RushHour",
        sourceUrl: "https://github.com/daniebeler/Parking-Jam"
    },
    {
        title: "Just Watch Ad",
        slug: "just-watch-ad",
        description: "A satirical take on modern mobile gaming loops.",
        tech: ["Android Studio", "Java"],
        logo: "justwatchad.webp",
        screenshots: [],
        color: "#ffb602",
        releaseYear: "2020",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.justwatchad"
    },
    {
        title: "Toggle Together",
        slug: "toggle-together",
        description: "A cooperative puzzle experience about synchronization.",
        tech: ["Unity", "C#"],
        logo: "toggle-together.webp",
        screenshots: [],
        color: "#2279ff",
        releaseYear: "2019",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.toggletogether"
    },
    {
        title: "MineBoy",
        slug: "mineboy",
        description: "Retro-inspired platforming deep underground.",
        tech: ["Unity", "C#", "Open source"],
        logo: "mine-boy.webp",
        banner: "mineboy_banner.jpg",
        screenshots: ["mineboy_0.jpg", "mineboy_1.jpg", "mineboy_2.jpg", "mineboy_3.jpg", "mineboy_4.jpg", "mineboy_5.jpg", "mineboy_6.jpg",],
        color: "#653814",
        releaseYear: "2019",
        itchUrl: "https://daniebeler.itch.io/mineboy",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.MineBoy"
    },
    {
        title: "Twentyone",
        slug: "twentyone",
        description: "A strategic card game based on the classic 21.",
        tech: ["Android Studio", "Java", "Open source"],
        logo: "21.webp",
        screenshots: ["twentyone_1.jpg", "twentyone_2.jpg", "twentyone_3.jpg", "twentyone_4.jpg", "twentyone_5.jpg"],
        color: "#5e35b1",
        releaseYear: "2019",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.twentyone",
        sourceUrl: "https://github.com/daniebeler/twentyone"
    },
    {
        title: "Speed Clicker",
        slug: "speed-clicker",
        description: "How fast can you tap? Test your limits here.",
        tech: ["Android Studio", "Java", "Open source"],
        logo: "speed-clicker.webp",
        screenshots: ["speed_clicker_1.jpg", "speed_clicker_2.jpg", "speed_clicker_3.jpg", "speed_clicker_4.jpg"],
        color: "#2ca6e9",
        releaseYear: "2018",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.speed_clicker",
        sourceUrl: "https://github.com/daniebeler/Speed-Clicker"
    },
    {
        title: "Reflextest",
        slug: "reflextest",
        description: "A simple but effective way to measure your reaction time.",
        tech: ["Android Studio", "Java", "Open source"],
        logo: "reflextest.webp",
        screenshots: ["reflextest_1.jpg", "reflextest_2.jpg", "reflextest_3.jpg", "reflextest_4.jpg"],
        color: "#0dbc3e",
        releaseYear: "2018",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.reflextest",
        sourceUrl: "https://github.com/daniebeler/Reflex-Test"
    }
];