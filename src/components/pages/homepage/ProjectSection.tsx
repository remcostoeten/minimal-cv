import CTAButton from "@/components/core/Cta";
import BentoBox from "@/components/shells/BentoShell";
import BentoTitle from "@/components/shells/BentoTitle";
import { projectsData } from "@/core/data/projects";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MovingBorderButton } from "@/components/core/BorderButton";
import ColoredLabel from "@/components/core/ColoredLabel";
import Paragraph from "@/components/core/Text";
import ProjectList from "./ProjectList";

export default function ProjectSection() {
  return (
    <BentoBox>
      <BentoTitle icon={projectIcon()}>Projects</BentoTitle>
      <div className="flex flex-col gap-2">
        <Paragraph spacing="4">
          As any hobby developer I tend to start a lot of projects but never
          finish themotion. This site for instance, is probably the 10th
          itteration. Althrough most projects are not done or even abbandoned,
          they are showworthy.
        </Paragraph>
        {projectsData.map((project) => (
          <>
            <div className="flex items-center gap-4">
              <div className="w-[68px] h-[68px] flex items-center justify-center bg-cardalt rounded-lg">
                {project.icon}
              </div>
              <div className="flex flex-col">
                <h2 className="text-[16px]">{project.name}</h2>
                <p className="text-[14px] text-text">{project.description}</p>
              </div>
            </div>
            <div className="flex gap-4 pb-4">
              <div className="seperator">
                <div className="seperator__inner" />
              </div>
              <div className="text-[16px] text-text font-[300]">
                {useReadMore(project.paragraph)}
              </div>
            </div>
            <div className="flex gap-1 overflow-x-auto whitespace-nowrap">
              {project.technologies.map((tech) => (
                <ColoredLabel>{tech}</ColoredLabel>
              ))}
            </div>
            {project.link && (
              <MovingBorderButton>
                <Link target="_blank" href={project.link}>
                  Source code here
                </Link>
              </MovingBorderButton>
            )}
            <div className="w-full h-[1px] bg-cardalt" />
          </>
        ))}
        <div className="flex flex-col">
          <ProjectList />
        </div>

        <Link href="/about">
          <CTAButton hasIcon>More about my projects</CTAButton>
        </Link>
      </div>
    </BentoBox>
  );
}

function projectIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height="24"
      width="24"
      focusable="false"
      color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))"
      style={{
        userSelect: "none",
        display: "inline-block",
        fill: "var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))",
        color:
          "var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))",
        flexShrink: 0,
      }}
    >
      <g color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))">
        <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path>
      </g>
    </svg>
  );
}

function useReadMore(text, maxCharacters = 150) {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphRef = useRef(null);

  const paragraphVariants = {
    collapsed: { maxHeight: maxCharacters + "px" },
    expanded: { maxHeight: "100%" },
  };

  const toggleExpand = () => setIsExpanded(!isExpanded);

  if (text.length <= maxCharacters) {
    return text;
  }

  return (
    <div ref={paragraphRef}>
      <motion.div
        variants={paragraphVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <p className="text-[16px] text-text font-[300]">
          {isExpanded ? text : text.substring(0, maxCharacters) + "..."}
        </p>
      </motion.div>

      {!isExpanded && (
        <button className="underline" onClick={toggleExpand}>
          Read More
        </button>
      )}
      {isExpanded && (
        <button className="underline" onClick={toggleExpand}>
          Read Less
        </button>
      )}
    </div>
  );
}
