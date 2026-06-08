import type { AstroObject } from "../types/AstroObject";

export const initialObjects: AstroObject[] = [
    {
        id: 1,
        name: "Saturn",
        type: "Planeta",
        distance: "1.4 mld km",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    },
    {
        id: 2,
        name: "Ziemia",
        type: "Planeta",
        distance: "0 km",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    },
    {
        id: 3,
        name: "Syriusz",
        type: "Gwiazda",
        distance: "8.6 lat świetlnych",
        image:
            "https://images.immediate.co.uk/production/volatile/sites/63/2024/08/gwiazda-syriusz-gdzie-ja-znalezc-na-niebie-i-co-o-niej-wiemy-fot-getty-images-04d3e00.jpg?quality=90&webp=true&resize=1000,667",
    },
    {
        id: 4,
        name: "Halley",
        type: "Kometa",
        distance: "Zmienia się",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Lspn_comet_halley.jpg/960px-Lspn_comet_halley.jpg",
    },
    {
        id: 5,
        name: "Księżyc",
        type: "Satelita",
        distance: "384 400 km",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
    },
];