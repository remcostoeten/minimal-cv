import CTAButton from "@/components/core/Cta";
import Paragraph from "@/components/core/Text";
import BentoBox from "@/components/shells/BentoShell";
import BentoTitle from "@/components/shells/BentoTitle";
import { skillsData } from "@/core/data/skills";

export default function StackSection() {
  return (
    <BentoBox>
      <BentoTitle icon={skillIcon()}>Techstack</BentoTitle>
      <div className="flex flex-col gap-2">
        <Paragraph spacing="4">
          I transitioned from Magento 2 (PHP) to a modern stack. Now, I
          primarily use React, GraphQL, and Django at work. In my free time, I
          build apps with NextJS and TypeScript, and experiment with Python,
          Lua, Solid.JS, and Svelte.{" "}
        </Paragraph>
        {skillsData.map((skill) => (
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

function skillIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      style={{
        userSelect: "none",
        width: "18",
        height: "18",
        display: "inline-block",
        fill: "rgb(0, 204, 150)",
        color: "rgb(0, 204, 150)",
        flexShrink: 0,
      }}
    >
      <g color="rgb(0, 204, 150)">
        <path d="M12,111l112,64a8,8,0,0,0,7.94,0l112-64a8,8,0,0,0,0-13.9l-112-64a8,8,0,0,0-7.94,0l-112,64A8,8,0,0,0,12,111ZM128,49.21,223.87,104,128,158.79,32.13,104ZM246.94,140A8,8,0,0,1,244,151L132,215a8,8,0,0,1-7.94,0L12,151A8,8,0,0,1,20,137.05l108,61.74,108-61.74A8,8,0,0,1,246.94,140Z"></path>
      </g>
    </svg>
  );
}