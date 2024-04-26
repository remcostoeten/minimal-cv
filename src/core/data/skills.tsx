const iconSize = 32;

export const skillsData = [
  {
    name: "TypeScript",
    description: "Because I love compilers",
    icon: typescriptIcon(),
    paragraph:
      "Hello, in 2024, using JavaScript is frowned upon, although I still enjoy using dollar signs, aka jQuery. However, my time is not precious and I love wasting hours messing with compilers and .tsconfigs, so TypeScript it is:any.",
  },
  {
    name: "NextJS",
    description: "So.... Also react obviously",
    icon: nextIcon(),
    paragraph:
      "Fun fact I actually started the world of modern frameworks by learning NextJS, React only came during my employmenet. I think NextJS has a better DX but they are one pot nat as we say in the dutchland. Also interessted in Svelte, Qwik, Solid or any other signal based framework.",
  },
  {
    name: "React",
    description: "For building user interfaces",
    icon: reactIcon(),
    paragraph:
      "Although I prefer NextJS, they're basically the same except NextJS has used a little bit more steroids. My interest for React obviously also transfers to frameworks like SolidJS, etc.",
  },
  {
    name: "Databases / BaaS / SQ(lite,noSQL,Postgress)",
    description: "BaaS, SKweeeeel, ORM's and raw SQL",
    paragraph:
      "I love using BaaS for quick projects. Firebase is my goto but lately I have been exploring Convex which basically is SQL. At work we use GraphQL which then uses Postgress. I have also used MongoDB and SQLite for smaller projects. Also used Prisma and Drizzle as ORM but they are not needed when using a BaaS. And for the heck of it i'd like to write raw sql queries, but there's only so much time.",
    icon: SqlIcon(),
  },
  {
    name: "CSS / Styled Components / SASS / Tailwind",
    description: "Styling the web",
    icon: cssIcon(),
    paragraph:
      "I love building UIs. I've lost count of how many different kinds of UIs I've built. I started off with native CSS, later moved to SCSS which we used at an agency, and even built my own starter-kit/boilerplate. Nowadays, for private projects, I use TailwindCSS because of the DX. At my job, we use styled components which was something I had to get used to, but I see the beauty of it.",
  },
  {
    name: "JavaScript",
    description: "The language of the web",
    icon: javascriptIcon(),
    paragraph:
      "I started off my career writing good old jQuery. Later on, a little KnockoutJS got added, which I still despise 🤒. Nowadays, for private projects, I exclusively write TypeScript except for some handy utility Node scripts. At work, we still have our codebase in JS, so there I write JSX. I've done a little Vue and Svelte, and I'm down for all variants as long as it's in the ecosystem. I love exploring.",
  },
  {
    name: "Visual Studio Code",
    description: "My favorite code editor",
    icon: vscodeIcon(),
    paragraph:
      "I mostly use vscode, but I get frustrated quite a lot with the terrible performance, especially with larger TypeScript projects. For small projects and quick editing, I use NeoVim like a real man. But due to skill issues, I haven't been able to switch entirely.",
  },
  {
    name: "NeoVim",
    description: "For efficient text editing",
    icon: neovimIcon(),
    paragraph:
      "Like I said, trying to become a real man. I do know how to quit it, except for when sharing my screen in meetings, then I seem to blackout. I'm way faster with Vim bindings and performance is also great, but it's a long road to become a Vim master.",
  },
  {
    name: "Figma",
    description: "For UI/UX design",
    icon: figmaIcon(),
    paragraph:
      "I have a degree in graphic design. Although I don't actively design anymore, I still prototype and dabble around in some designs here and there. Especially with the new AI features. Sometimes I even opt for the good old Photoshop suite.",
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

function nextIcon() {
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

function cssIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 296297 333333"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      width={35}
    >
      <defs>
        <linearGradient
          id="id4"
          gradientUnits="userSpaceOnUse"
          x1="54128.7"
          y1="79355.5"
          x2={240318}
          y2="79355.5"
        >
          <stop offset={0} stopColor="#e8e7e5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="id5"
          gradientUnits="userSpaceOnUse"
          x1="62019.3"
          y1={202868}
          x2={233515}
          y2={202868}
        >
          <stop offset={0} stopColor="#e8e7e5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="id6"
          gradientUnits="userSpaceOnUse"
          x1={104963}
          y1="99616.9"
          x2={104963}
          y2={171021}
        >
          <stop offset={0} stopColor="#d1d3d4" />
          <stop offset=".388" stopColor="#d1d3d4" />
          <stop offset={1} stopColor="#d1d3d4" />
        </linearGradient>
        <linearGradient
          id="id7"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#id6"
          x1={194179}
          y1="61185.8"
          x2={194179}
          y2={135407}
        />
        <mask id="id0">
          <linearGradient
            id="id1"
            gradientUnits="userSpaceOnUse"
            x1={104963}
            y1="99616.9"
            x2={104963}
            y2={171021}
          >
            <stop offset={0} stopOpacity={0} stopColor="#fff" />
            <stop offset=".388" stopColor="#fff" />
            <stop offset={1} stopOpacity=".831" stopColor="#fff" />
          </linearGradient>
          <path fill="url(#id1)" d="M61737 99467h86453v71704H61737z" />
        </mask>
        <mask id="id2">
          <linearGradient
            id="id3"
            gradientUnits="userSpaceOnUse"
            x1={194179}
            y1="61185.8"
            x2={194179}
            y2={135407}
          >
            <stop offset={0} stopOpacity={0} stopColor="#fff" />
            <stop offset=".388" stopColor="#fff" />
            <stop offset={1} stopOpacity=".831" stopColor="#fff" />
          </linearGradient>
          <path fill="url(#id3)" d="M147890 61036h92578v74521h-92578z" />
        </mask>
        <style
          dangerouslySetInnerHTML={{
            __html: ".fil6{fill:#000;fill-opacity:.05098}",
          }}
        />
      </defs>
      <g id="Layer_x0020_1">
        <g id="_513085304">
          <path
            fill="#2062af"
            d="M268517 300922l-120369 32411-120371-32411L0 0h296297z"
          />
          <path
            fill="#3c9cd7"
            d="M148146 24374v283109l273 74 97409-26229 22485-256954z"
          />
          <path
            fill="#fff"
            d="M148040 99617l-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z"
          />
          <path
            mask="url(#id0)"
            fill="url(#id6)"
            d="M61887 135497l2857 35524 83295-35614V99617z"
          />
          <path
            mask="url(#id2)"
            fill="url(#id7)"
            d="M240318 61186l-92278 38431v35790l88604-37883z"
          />
          <path
            fill="url(#id5)"
            d="M62019 135497l2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z"
          />
          <path
            className="fil6"
            d="M148040 135497H61888l2857 35524 83295 266v-35790zm0 95022l-408 114-40422-10208-2450-29399H67197l4899 56756 75944 22457v-39720z"
          />
          <path
            fill="url(#id4)"
            d="M54129 61186h186189l-3674 36339H58620l-4491-36339z"
          />
          <path className="fil6" d="M148040 61186H54129l4491 36339h89420z" />
        </g>
      </g>
    </svg>
  );
}

function javascriptIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="35s"
      height="48px"
    >
      <path fill="#ffd600" d="M6,42V6h36v36H6z" />
      <path
        fill="#000001"
        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
      />
    </svg>
  );
}

function vscodeIcon() {
  return (
    <svg
      width="800px"
      height="35"
      viewBox="-0.55 0 235.1 235.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ fill: "#0179cb" }}
        d="M83.3 143.9l-58 45.2L0 176.5V58.7L25.2 46l57.6 45.3L174 0l60 23.9v186.9l-59.7 24.3-91-91.2zm88.9 15.9V75.3l-54.6 42.3 54.6 42.2zM27.3 144.6L56 118.5 27.3 89.9v54.7z"
      />
    </svg>
  );
}

function neovimIcon() {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 602 734"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop
            stop-color="#16B0ED"
            stop-opacity="0.800235524"
            offset="0%"
          ></stop>
          <stop
            stop-color="#0F59B2"
            stop-opacity="0.83700023"
            offset="100%"
          ></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-2"
        >
          <stop stop-color="#7DB643" offset="0%"></stop>
          <stop stop-color="#367533" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-3"
        >
          <stop stop-color="#88C649" stop-opacity="0.8" offset="0%"></stop>
          <stop stop-color="#439240" stop-opacity="0.84" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="markCopy" transform="translate(2.000000, 3.000000)">
          <path
            d="M0,155.5704 L155,-1 L154.999997,727 L0,572.237919 L0,155.5704 Z"
            id="Left--Green"
            fill="url(#linearGradient-1)"
          ></path>
          <path
            d="M443.060403,156.982405 L600,-1 L596.818792,727 L442,572.219941 L443.060403,156.982405 Z"
            id="Right--Blue"
            fill="url(#linearGradient-2)"
            transform="translate(521.000000, 363.500000) scale(-1, 1) translate(-521.000000, -363.500000) "
          ></path>
          <path
            d="M154.986294,0 L558,615.189696 L445.224605,728 L42,114.172017 L154.986294,0 Z"
            id="Cross--Blue"
            fill="url(#linearGradient-3)"
          ></path>
          <path
            d="M155,283.83232 L154.786754,308 L31,124.710606 L42.4619486,113 L155,283.83232 Z"
            id="Shadow"
            fillOpacity="0.13"
            fill="#000000"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function figmaIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_102_1483)">
        <path
          d="M171.333 512C218.437 512 256.667 473.771 256.667 426.667V341.333H171.333C124.229 341.333 86 379.563 86 426.667C86 473.771 124.229 512 171.333 512Z"
          fill="#0ACF83"
        />
        <path
          d="M86 256C86 208.896 124.229 170.667 171.333 170.667H256.667V341.333H171.333C124.229 341.333 86 303.104 86 256Z"
          fill="#A259FF"
        />
        <path
          d="M86 85.3333C86 38.2293 124.229 0 171.333 0H256.667V170.667H171.333C124.229 170.667 86 132.437 86 85.3333Z"
          fill="#F24E1E"
        />
        <path
          d="M256.667 0H342C389.104 0 427.333 38.2293 427.333 85.3333C427.333 132.437 389.104 170.667 342 170.667H256.667V0Z"
          fill="#FF7262"
        />
        <path
          d="M427.333 256C427.333 303.104 389.104 341.333 342 341.333C294.896 341.333 256.667 303.104 256.667 256C256.667 208.896 294.896 170.667 342 170.667C389.104 170.667 427.333 208.896 427.333 256Z"
          fill="#1ABCFE"
        />
      </g>
      <defs>
        <clipPath id="clip0_102_1483">
          <rect width="512" height="512" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function reactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="32" width="32">
      <path d="M13.785 11.245 A1.785 1.785 0 0 1 12 13.03 A1.785 1.785 0 0 1 10.215 11.245 A1.785 1.785 0 0 1 13.785 11.245 z" />
      <path d="M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 001.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 01-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 00-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 01-.987 2.542z" />
      <path d="M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 00-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 00-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 011.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 002.021-2.477l.112-.16.194-.019a19.473 19.473 0 003.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 01-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 01-1.71 2.124z" />
      <path d="M17.58 8.695l-.395-.099a19.477 19.477 0 00-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0011.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 01-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 01-1.713-2.123 20.692 20.692 0 01-2.696-.419z" />
      <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 01-1.126-1.769 26.028 26.028 0 01-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 014.198 0l.194.019.113.16a25.136 25.136 0 012.1 3.628l.083.179-.083.177a24.742 24.742 0 01-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 001.832-3.168 23.916 23.916 0 00-1.832-3.168 23.877 23.877 0 00-3.667 0 23.743 23.743 0 00-1.832 3.168 24.82 24.82 0 001.832 3.168z" />
    </svg>
  );
}

function SqlIcon() {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 76 76"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      baseProfile="full"
      enableBackground="new 0 0 76.00 76.00"
      xmlSpace="preserve"
    >
      <path
        fill="#000000"
        fillOpacity="0.701961"
        strokeWidth="0.2"
        strokeLinejoin="round"
        d="M 38,33C 47.384,33 54.9921,30.9874 55,28.5039L 55,52.5C 55,54.9853 47.3888,57 38,57L 38,49.1579L 38.0675,49.16L 39.23,50.4137C 39.6033,50.8029 39.9871,51.1417 40.3813,51.43C 40.7754,51.7183 41.1875,51.9454 41.6175,52.1113C 42.0475,52.2771 42.5183,52.36 43.03,52.36L 44.1075,52.2913L 44.8,52.155L 44.8,50.085L 44.5425,50.1663L 44.25,50.2288L 43.9487,50.2675L 43.675,50.28L 42.8237,50.215L 42.0613,49.9813L 41.3237,49.5213L 40.55,48.7775C 41.635,48.3892 42.4808,47.72 43.0875,46.77C 43.6958,45.81 44,44.6633 44,43.33C 44,41.6233 43.5025,40.2508 42.5075,39.2125C 41.5175,38.1642 40.2233,37.64 38.625,37.64L 38,37.6653L 38,33 Z M 52,23.5L 55,23.5L 55,25.5C 55,27.9853 47.3888,30 38,30L 38,25C 45.732,25 52,24.3285 52,23.5 Z M 38.5375,39.88C 39.3975,39.88 40.07,40.1992 40.555,40.8375C 41.0383,41.4658 41.28,42.34 41.28,43.46C 41.28,44.54 41.0275,45.3892 40.5225,46.0075C 40.0242,46.6158 39.3417,46.92 38.475,46.92L 38,46.8837L 38,39.9251L 38.5375,39.88 Z M 52.48,49L 52.48,46.92L 48.32,46.92L 48.32,37.8L 45.76,37.8L 45.76,49L 52.48,49 Z "
      />
      <path
        fill="#000000"
        fillOpacity="1"
        strokeWidth="0.2"
        strokeLinejoin="round"
        d="M 38,57C 28.6111,57 21,54.9853 21,52.5L 21,28.5C 21,30.9853 28.6112,33 38,33L 38,37.6436C 36.5609,37.7589 35.3876,38.296 34.48,39.2549C 33.4533,40.3399 32.94,41.7666 32.94,43.5349C 32.94,44.3083 33.0616,45.0324 33.305,45.7074C 33.5483,46.3824 33.8929,46.9704 34.3387,47.4712C 34.7846,47.972 35.3216,48.3703 35.95,48.6662C 36.5654,48.9559 37.2487,49.1134 38,49.1385L 38,57 Z M 55,23.5L 52,23.5C 52,22.6716 45.732,22 38,22C 30.268,22 24,22.6716 24,23.5C 24,24.3285 30.268,25 38,25L 38,30C 28.6111,30 21,27.9853 21,25.5L 21,23.5C 21,21.0148 28.6112,19 38,19C 47.384,19 54.9921,21.0127 55,23.5 Z M 24.14,48.5324C 24.5483,48.7341 25.0312,48.8858 25.5887,48.9874C 26.1462,49.0891 26.7341,49.1399 27.3525,49.1399C 27.9541,49.1399 28.5258,49.0829 29.0675,48.9687C 29.6091,48.8545 30.0841,48.6666 30.4925,48.4049C 30.9008,48.1433 31.2241,47.8016 31.4625,47.3799C 31.7008,46.9583 31.82,46.4366 31.82,45.8149C 31.82,45.3649 31.7533,44.9704 31.62,44.6312C 31.4866,44.292 31.2941,43.9904 31.0425,43.7262C 30.7908,43.462 30.4891,43.2249 30.1375,43.0149L 28.9475,42.4199L 28.0775,42.0287L 27.4225,41.6399L 27.0062,41.2212C 26.9087,41.0737 26.86,40.9066 26.86,40.7199C 26.86,40.5416 26.9037,40.3804 26.9912,40.2362L 27.3612,39.8649L 27.9475,39.6249L 28.7175,39.5399L 29.37,39.5874L 30.06,39.7349L 30.735,39.9874L 31.34,40.3399L 31.34,38.0424C 30.96,37.8991 30.5445,37.7929 30.0937,37.7237L 28.5425,37.6199C 27.9475,37.6199 27.3841,37.6833 26.8525,37.8099C 26.3208,37.9366 25.8529,38.1349 25.4487,38.4049C 25.0445,38.6749 24.7254,39.0183 24.4912,39.4349C 24.257,39.8516 24.14,40.3499 24.14,40.9299C 24.14,41.6699 24.3516,42.3016 24.775,42.8249C 25.1983,43.3483 25.8416,43.7908 26.705,44.1524L 27.6512,44.5649L 28.41,44.9849L 28.915,45.4587C 29.0383,45.6295 29.1,45.8233 29.1,46.0399L 28.9837,46.5074C 28.9062,46.6508 28.7883,46.7754 28.63,46.8812L 28.0387,47.1299L 27.21,47.2199C 26.6716,47.2199 26.1383,47.1266 25.61,46.9399C 25.0816,46.7533 24.5916,46.4733 24.14,46.0999L 24.14,48.5324 Z M 36.4325,40.8324C 36.8449,40.3182 37.3674,40.0079 38,39.9016L 38,46.8667C 37.3683,46.7709 36.8433,46.4678 36.425,45.9574C 35.915,45.3241 35.66,44.4699 35.66,43.3949C 35.66,42.3299 35.9175,41.4758 36.4325,40.8324 Z "
      />
    </svg>
  );
}
