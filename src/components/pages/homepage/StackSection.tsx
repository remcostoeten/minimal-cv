import CTAButton from "@/components/core/Cta";
import Paragraph from "@/components/core/Text";
import { SkillIcon } from "@/components/core/icons";
import BentoBox from "@/components/shells/BentoShell";
import BentoTitle from "@/components/shells/BentoTitle";
import { skillsData } from "@/core/data/skills";

type StackSectionProps = {
  limit?: boolean;
};

export default function StackSection({ limit = false }: StackSectionProps) {
  const displayedSkills = limit ? skillsData.slice(0, 3) : skillsData;

  return (
    <BentoBox>
      <BentoTitle icon={SkillIcon()}>Techstack</BentoTitle>
      <div className="flex flex-col gap-2">
        <Paragraph spacing="4">
          I transitioned from Magento 2 (PHP) to a modern stack. Now, I
          primarily use React, GraphQL, and Django at work. In my free time, I
          build apps with NextJS and TypeScript. Besides that, I have dabbled a
          little bit in Python, Lua, Svelte, and Bash. I find all technologies
          interesting and am planning on playing around with Go, eventually
          transitioning into full-stack (real full stack, not just JS + CRUD)."
        </Paragraph>
        {displayedSkills.map((skill) => (
          <>
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
          </>
        ))}
        <CTAButton href="/my-stack" hasIcon>
          More about my stack
        </CTAButton>
      </div>
    </BentoBox>
  );
}
