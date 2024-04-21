import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTAButton from "@/components/core/Cta";
import BentoBox from "@/components/shells/BentoShell";
import BentoTitle from "@/components/shells/BentoTitle";
import { projectsData } from "@/core/data/projects";

function Project({ project }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded ? project.description : `${project.description.substring(0, 100)}...`;

    return (
        <div className="flex items-center gap-4">
            <div className="w-[68px] h-[68px] flex items-center justify-center bg-cardalt rounded-lg"></div>
            <div className="flex flex-col">
                <h2 className="text-[16px]">{project.name}</h2>
                <AnimatePresence>
                    <motion.p
                        key={project.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {displayText}
                    </motion.p>
                </AnimatePresence>
                <button onClick={() => setIsExpanded(!isExpanded)}>
                    Read {isExpanded ? 'less' : 'more'}
                </button>
            </div>
        </div>
    );
}

export default function ProjectSection() {
    return (
        <BentoBox>
            <BentoTitle icon={projectIcon()}>Projects</BentoTitle>
            <div className="flex flex-col gap-2">
                <p>As any hobby developer I tend to start a lot of projects but never finish them. This site for instance, is probably the 10th iteration. Although most projects are not done or even abandoned, they are showworthy. </p>
                {projectsData.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
                <CTAButton hasIcon>More about my stack</CTAButton>
            </div>
        </BentoBox>
    );
}

function projectIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))" style={{ userSelect: 'none', width: '24', height: '24', display: 'inline-block', fill: 'var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))', color: 'var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))', flexShrink: 0 }}>
            <g color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))">
                <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H216a8,8,0,0,0,0-16H115.32l112-112A16,16,0,0,0,227.32,73.37ZM136,75.31,152.69,92,68,176.69,51.31,160ZM48,208V179.31L76.69,208Zm48-3.31L79.32,188,164,103.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z"></path>
            </g>
        </svg>
    );
}