export const projectsData = [
  {
    name: "Personal All-in-One Dashboard",
    description: "A collection of tools I've built. WiP",
    icon: gameicon(),
    paragraph:
      "A personal dashboard which (eventually) will contain all my tools I've built. HTML to TSX converter, (reverse) geo-location tool, SVG to pseudo-CSS, notes, kanban, file storage, experiments...",
    technologies: ["TypeScript", "NextJS", "TailwindCSS", "SQLite", "Turso"],
    link: "https://panel.remcostoeten.com",
  },
  {
    name: "Custom Commitizen Adapter",
    description: "Makes it look like you know what you're doing",
    icon: ToolIcon(),
    paragraph: "A custom adapter for Commitizen to standardize commit messages.",
    link: "https://www.npmjs.com/package/cleaner-commitizen-adapter",
    technologies: [
      "node",
      "javascript",
      "NPM",
      "cli",
    ],
  },
  {
    name: "Password Manager Prototype",
    description: "A prototype password manager",
    icon: PasswordIcon(),
    paragraph: "An assessment I've made. No back-end allowed, all local storage and not encrypted/hashed. Purely an MVP prototype.",
    link: "https://password-manager.remcostoeten.com/",
    technologies: [
      "NextJS 15 RC",
      "React 19",
      "Local Storage",
      "Api",
      "Server actions",
      ],
  },
  {
    name: "WhatsApp Status Scraper",
    description: "Rework postponed: An automated scraper for WhatsApp statuses",
    icon: whatsappicon(),
    paragraph:
      "No, I don't condone stalking, but I love exploring new technologies. I've built a Python Selenium Chromedriver WhatsApp status scraper but wanted more UI. Thus, I ported it over to a NextJS API. Scrapable settings are configurable via a config file, launches up Chromedriver, navigates to WhatsApp Web, and starts monitoring the online status which then gets saved to local objects and displayed nicely in real-time in a table UI.",
    technologies: [
      "TypeScript",
      "NextJS",
      "TailwindCSS",
      "Python",
      "Selenium",
      "Chromedriver",
    ],
    link: "https://github.com/remcostoeten/personal-platform/blob/master/pages/api/status/index.ts#L113",
  },
];

function ToolIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M14.74,9.35L15,9.59L15.23,9.34A5.84,5.84,0,0,0,18,4.92V4A1,1,0,0,0,17,3H14.06a1,1,0,0,0-.89.55L12.67,5.6a1,1,0,0,0,.2,1.11l1.86,1.86A7.81,7.81,0,0,0,14.74,9.35ZM20.29,3.71a1,1,0,0,0-1.42,0l-.93.93a7.82,7.82,0,0,0-6.36-3.28,7.83,7.83,0,0,0-7.79,7.86,7.93,7.93,0,0,0,4.24,7.11L1.67,20.93a2.62,2.62,0,0,0,0,3.71,2.62,2.62,0,0,0,3.71,0l6.37-6.37a7.92,7.92,0,0,0,7.11,4.24A7.83,7.83,0,0,0,23,9.93a7.82,7.82,0,0,0-3.28-6.36l.93-.93A1,1,0,0,0,20.29,3.71Z"/>
</svg>

  )
}
  function PasswordIcon() {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M12 2C8.14 2 5 5.14 5 9v3H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2h-1V9c0-3.86-3.14-7-7-7zm-4 9V9a4 4 0 018 0v2H8zm10 2h-4v4h4v-4zm-6 0H6v4h6v-4z"/>
</svg>


    )
}
function whatsappicon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#fff"
        d="M14.9978834,5 C18.8638767,5 21.9978834,8.13400675 21.9978834,12 C21.9978834,15.7854517 18.9931001,18.8690987 15.2385332,18.995941 L14.9978834,19 L9.00211656,19 C5.13612331,19 2.00211656,15.8659932 2.00211656,12 C2.00211656,8.21454828 5.00689994,5.13090132 8.76146681,5.00405902 L9.00211656,5 L14.9978834,5 Z M14.75,12.5 C14.0596441,12.5 13.5,13.0596441 13.5,13.75 C13.5,14.4403559 14.0596441,15 14.75,15 C15.4403559,15 16,14.4403559 16,13.75 C16,13.0596441 15.4403559,12.5 14.75,12.5 Z M8,9 C7.62030423,9 7.30650904,9.28215388 7.25684662,9.64822944 L7.25,9.75 L7.25,11.248 L5.75,11.2487458 C5.33578644,11.2487458 5,11.5845322 5,11.9987458 C5,12.3784415 5.28215388,12.6922367 5.64822944,12.7418991 L5.75,12.7487458 L7.25,12.748 L7.25,14.25 C7.25,14.6642136 7.58578644,15 8,15 C8.37969577,15 8.69349096,14.7178461 8.74315338,14.3517706 L8.75,14.25 L8.75,12.748 L10.25,12.7487458 C10.6642136,12.7487458 11,12.4129593 11,11.9987458 C11,11.61905 10.7178461,11.3052548 10.3517706,11.2555924 L10.25,11.2487458 L8.75,11.248 L8.75,9.75 C8.75,9.33578644 8.41421356,9 8,9 Z M16.75,9 C16.0596441,9 15.5,9.55964406 15.5,10.25 C15.5,10.9403559 16.0596441,11.5 16.75,11.5 C17.4403559,11.5 18,10.9403559 18,10.25 C18,9.55964406 17.4403559,9 16.75,9 Z"
      />
    </svg>
  );
}

function gameicon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="🔍-Product-Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="ic_fluent_games_24_filled" fill="#fff" fillRule="nonzero">
          <path
            d="M14.9978834,5 C18.8638767,5 21.9978834,8.13400675 21.9978834,12 C21.9978834,15.7854517 18.9931001,18.8690987 15.2385332,18.995941 L14.9978834,19 L9.00211656,19 C5.13612331,19 2.00211656,15.8659932 2.00211656,12 C2.00211656,8.21454828 5.00689994,5.13090132 8.76146681,5.00405902 L9.00211656,5 L14.9978834,5 Z M14.75,12.5 C14.0596441,12.5 13.5,13.0596441 13.5,13.75 C13.5,14.4403559 14.0596441,15 14.75,15 C15.4403559,15 16,14.4403559 16,13.75 C16,13.0596441 15.4403559,12.5 14.75,12.5 Z M8,9 C7.62030423,9 7.30650904,9.28215388 7.25684662,9.64822944 L7.25,9.75 L7.25,11.248 L5.75,11.2487458 C5.33578644,11.2487458 5,11.5845322 5,11.9987458 C5,12.3784415 5.28215388,12.6922367 5.64822944,12.7418991 L5.75,12.7487458 L7.25,12.748 L7.25,14.25 C7.25,14.6642136 7.58578644,15 8,15 C8.37969577,15 8.69349096,14.7178461 8.74315338,14.3517706 L8.75,14.25 L8.75,12.748 L10.25,12.7487458 C10.6642136,12.7487458 11,12.4129593 11,11.9987458 C11,11.61905 10.7178461,11.3052548 10.3517706,11.2555924 L10.25,11.2487458 L8.75,11.248 L8.75,9.75 C8.75,9.33578644 8.41421356,9 8,9 Z M16.75,9 C16.0596441,9 15.5,9.55964406 15.5,10.25 C15.5,10.9403559 16.0596441,11.5 16.75,11.5 C17.4403559,11.5 18,10.9403559 18,10.25 C18,9.55964406 17.4403559,9 16.75,9 Z"
          ></path>
        </g>
      </g>
    </svg>
  );
}
