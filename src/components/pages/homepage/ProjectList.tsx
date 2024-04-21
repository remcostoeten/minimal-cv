"use client";

import Paragraph from "@/components/core/Text";
import { m } from "framer-motion";
import Link from "next/link";

export default function ProjectList() {
  const articles = [
    {
      title: "A HTML to JSX converter",
      anchor: "https://portfolio.remcostoeten.com/html-to-jsx",
    },
    {
      title: "A perfect blackjack strategy helper",
      anchor: "https://portfolio.remcostoeten.com/blackjack",
    },
    {
      title: "A visualize component debugger NPM package",
      anchor:
        "https://www.npmjs.com/package/@remcostoeten/visualize-component-debugger",
    },
    {
      title: "Visual studio code UI recreated in React",
      anchor: "https://vsc.remcostoeten.com/",
    },
    {
      title: "Bezier curve CSS showcase (buggy)",
      anchor: "cubic-bezier(0.47, 0, 0.745, 0.715)",
    },
    {
      title: "SVG to react component converter",
      anchor:
        "https://github.com/remcostoeten/svg-to-react-component-icon-generator",
    },
    {
      title: "ShadCN ui lazymans auto importer helper",
      anchor:
        "https://github.com/remcostoeten/shadcn-ui-lazymans-auto-importer",
    },
  ];

  return (
    <div>
      <Paragraph>And loads more...</Paragraph>
      <ul>
        {articles.map((article, index) => (
          <m.li className="group" key={index}>
            <Link
              target="_blank"
              className="flex px-2 py-4 justify-between items-center text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white group-hover:translate-x-1 transition-transform transition-colors ease-bezier"
              href={article.anchor}
            >
              <span>{article.title}</span>
              <IconAngleupright className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <hr className="border-[#57534e] hover:border-white transition-colors ease-bezier" />
          </m.li>
        ))}
      </ul>
      <div className="my-4">
        And so much more... Some snippets over at{" "}
        <Link
          className="underline"
          target="_blank"
          href="http://snippets.remcostoeten.com"
        >
          snippets.remcostoeten.com
        </Link>
      </div>
    </div>
  );
}

function IconAngleupright(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
