"use client";
import CTAButton from "@/components/core/Cta";
import Paragraph from "@/components/core/Text";
import { SkillIcon } from "@/components/core/icons";
import BentoBox from "@/components/shells/BentoShell";
import BentoTitle from "@/components/shells/BentoTitle";
import { skillsData } from "@/core/data/skills";
import { BEZIER_CURVES } from "@/core/lib/bezier-curves";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type StackSectionProps = {
  limit?: boolean;
};

export default function StackSection({ limit = false }: StackSectionProps) {
  const displayedSkills = limit ? skillsData.slice(0, 3) : skillsData;
  const [isStackPage, setIsStackPage] = useState(true);
  const pathname = usePathname();
  const stackPage = pathname === "/my-stack";

  useEffect(() => {
    if (!stackPage) {
      setIsStackPage(false);
    }
  }, [pathname]);

  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: BEZIER_CURVES.BEZIERONE,
        duration: 0.6,
      },
    },
  };

  return (
    <BentoBox>
      <BentoTitle icon={SkillIcon()}>Techstack</BentoTitle>
      <div className="flex flex-col gap-2">
        <Paragraph spacing="4">
          I train NextJS and TypeScript. Besides that, I have dabbled a little
          bit in Python, Lua, Svelte, and Bash. I find all technologies
          interesting and am planning on playing around with Go, eventually
          transitioning into full-stack (real full stack, not just JS + CRUD).
        </Paragraph>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {displayedSkills.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <div className="flex items-center gap-4">
                <div className="w-[68px] h-[68px] flex items-center justify-center bg-cardalt rounded-lg">
                  {skill.icon}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[16px]">{skill.name}</h2>
                  <p className="text-[14px] text-text">{skill.description}</p>
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="seperator">
                  <div className="seperator__inner" />
                </div>
                <div className="text-[16px] text-text font-[300]">
                  {skill.paragraph}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {isStackPage === false && (
          <CTAButton href="/my-stack" hasIcon>
            More about my stack
          </CTAButton>
        )}
      </div>
    </BentoBox>
  );
}
