export const projectsData = [
    {
        name: "MineSweeper",
        description: "A replica of an online minesweeper game",
        icon: gameicon(),
        paragraph:
            "This is a replica of the online casino game Dare 2 Mine by Hacksaw Gaming. I implemented a currency system which syncs all the data (bet size, wins, losses) to a database (Convex BaaS). The main core game is done, and the currency system is almost there. Most of the work that still needs to be done is UI, and basic game logic regarding the currency/game history.",
        technologies: ["Typescript", "NextJS", "TailwindCSS", "Convex"],
        link: "https://github.com/remcostoeten/minesweeper"
    },
    {
        name: "Whatsapp Status Scraper",
        description: "An automated scraper for WhatsApp statuses",
        icon: whatasppicon(),
        paragraph:
            "No, I don't condone stalking, but I love exploring new technologies. I've built a Python Selenium Chromedriver WhatsApp status scraper but wanted more UI. Thus, I ported it over to a NextJS API. Scrapable settings are configurable via a config file, launches up Chromedriver, navigates to WhatsApp Web, and starts monitoring the online status which then gets saved to local objects and displayed nicely in real-time in a table UI.",
        technologies: ["Typescript", "NextJS", "TailwindCSS", "Python", "Selenium", "Chromedriver"],
        link: "https://github.com/remcostoeten/personal-platform/blob/master/pages/api/status/index.ts#L113"
    },
];

function whatasppicon() {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24   " viewBox="0 0 24 24"><path fill="#fff" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
    );
}

function gameicon() {
    return (

        <svg width="36" height="36" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="ic_fluent_games_24_filled" fill="#fff" fill-rule="nonzero">
                    <path d="M14.9978834,5 C18.8638767,5 21.9978834,8.13400675 21.9978834,12 C21.9978834,15.7854517 18.9931001,18.8690987 15.2385332,18.995941 L14.9978834,19 L9.00211656,19 C5.13612331,19 2.00211656,15.8659932 2.00211656,12 C2.00211656,8.21454828 5.00689994,5.13090132 8.76146681,5.00405902 L9.00211656,5 L14.9978834,5 Z M14.75,12.5 C14.0596441,12.5 13.5,13.0596441 13.5,13.75 C13.5,14.4403559 14.0596441,15 14.75,15 C15.4403559,15 16,14.4403559 16,13.75 C16,13.0596441 15.4403559,12.5 14.75,12.5 Z M8,9 C7.62030423,9 7.30650904,9.28215388 7.25684662,9.64822944 L7.25,9.75 L7.25,11.248 L5.75,11.2487458 C5.33578644,11.2487458 5,11.5845322 5,11.9987458 C5,12.3784415 5.28215388,12.6922367 5.64822944,12.7418991 L5.75,12.7487458 L7.25,12.748 L7.25,14.25 C7.25,14.6642136 7.58578644,15 8,15 C8.37969577,15 8.69349096,14.7178461 8.74315338,14.3517706 L8.75,14.25 L8.75,12.748 L10.25,12.7487458 C10.6642136,12.7487458 11,12.4129593 11,11.9987458 C11,11.61905 10.7178461,11.3052548 10.3517706,11.2555924 L10.25,11.2487458 L8.75,11.248 L8.75,9.75 C8.75,9.33578644 8.41421356,9 8,9 Z M16.75,9 C16.0596441,9 15.5,9.55964406 15.5,10.25 C15.5,10.9403559 16.0596441,11.5 16.75,11.5 C17.4403559,11.5 18,10.9403559 18,10.25 C18,9.55964406 17.4403559,9 16.75,9 Z" id="🎨-Color">

                    </path>
                </g>
            </g>
        </svg>
    );
}
