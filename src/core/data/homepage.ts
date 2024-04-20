import { themeColors } from "../constants/colors";

export const introduction = {
  title: "Hello there! Remco here",
  content:
    "This is a sample project generated by the Bento CLI. It demonstrates the use of Bento's built-in features and tools. The project is structured in a way that is easy to understand and extend. It is a great starting point for building your next project.",
  button: "More about me",
};

export const pills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Adobe",
  "Vue.js",
  "Angular",
  "Svelte",
  "Redux",
  "Next.js",
  "Gatsby",
  "GraphQL",
  "Webpack",
  "Babel",
  "Jest",
  "Cypress",
  "Sass",
  "Less",
  "Bootstrap",
  "Material-UI",
  "Ant Design",
];

const colors = Object.values(themeColors);

export const sampleArcs = [
  {
    order: 1,
    startLat: 52.3702, // Amsterdam
    startLng: 4.8952,
    endLat: 52.8408, // Lemmer
    endLng: 5.7128,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 2,
    startLat: 51.5074, // London
    startLng: -0.1278,
    endLat: 52.8408, // Lemmer
    endLng: 5.7128,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 3,
    startLat: 48.8566, // Paris
    startLng: 2.3522,
    endLat: 52.8408, // Lemmer
    endLng: 5.7128,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
  {
    order: 4,
    startLat: 52.52, // Berlin
    startLng: 13.405,
    endLat: 52.8408, // Lemmer
    endLng: 5.7128,
    arcAlt: 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  },
];
