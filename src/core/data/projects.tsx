import { link } from "fs";

const iconSize = 32;

export const projectsData = [
    {
        name: "MineSweeper",
        description: "A replica of a online minesweeper game",
        icon: typescriptIcon(),
        paragraph:
            "This is a replica of the onine casino game Dare 2 mine by hacksaw gaming. I implemented a currency system which syncs all the data (bet size, wins, loses, to a database (convex BaaS). The main core game is done, currency system is almost there. Most off the work that still needs to be done is UI, and baisc game logic regarding the currency/game history.",
        technologies: ["Typescript", "NextJS", "TailwindCSS", "Convex"],
        link: "https://github.com/remcostoeten/minesweeper"
    },
    {
        name: "Whatsapp status scraper",
        description: "A automated scraper for whatsapp statuses",
        icon: NextIcon(),
        paragraph:
            "No I don't condone stalking, but I love exploring new technologies. I've build a python selenium chromedriver whatsapp status scraper but wanted more UI. Thus I ported it over to a NextJS api. Scrapable settings are configurable via a config file, launches up chromedriver, navigates to whatsapp web and starts monitoring the onine status which then gets saved to local objects and displayed nicely realtime in a table ui.",
        technologies: ["Typescript", "NextJS", "TailwindCSS", "Python", "Selenium", "Chromedriver"],
        link: "https://github.com/remcostoeten/personal-platform/blob/master/pages/api/status/index.ts#L113"
    },
];

function typescriptIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconSize}
            height={iconSize}
            viewBox="0 0 32 32"
        >
            <path
                fill="#007acc"
                d="M23.827 8.243a4.424 4.424 0 012.223 1.281 5.853 5.853 0 01.852 1.143c.011.045-1.534 1.083-2.471 1.662-.034.023-.169-.124-.322-.35a2.014 2.014 0 00-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 00.153.666c.237.49.677.784 2.059 1.383 2.544 1.095 3.636 1.817 4.31 2.843a5.158 5.158 0 01.416 4.333 4.764 4.764 0 01-3.932 2.815 10.9 10.9 0 01-2.708-.028 6.531 6.531 0 01-3.616-1.884 6.278 6.278 0 01-.926-1.371 2.655 2.655 0 01.327-.208c.158-.09.756-.434 1.32-.761l1.024-.6.214.312a4.771 4.771 0 001.35 1.292 3.3 3.3 0 003.458-.175 1.545 1.545 0 00.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 01-3.349-2.055 4.687 4.687 0 01-.976-1.777 7.116 7.116 0 01-.062-2.268 4.332 4.332 0 013.644-3.374 9 9 0 012.691.084zm-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a13.986 13.986 0 01.04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017z"
            ></path>
        </svg>
    );
}

function NextIcon() {
    return (
        <svg
            height={iconSize}
            viewBox=".5 -.2 1023 1024.1"
            width={iconSize}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#fff"
                d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
            />
            <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
        </svg>
    );
}
