import BentoBox from "./BentoShell";
import Paragraph from "../core/Text";
import Link from "next/link";
import { siteConfig } from "@/core/data/personal-data";
import Flex from "../core/Flexer";

export default function FooterShell() {
  return (
    <BentoBox>
      <Flex justify="between">
        <div className="flex flex-col ">
          <Paragraph>
            Made with <span className="pulse strong">❤️</span> by{" "}
            <strong>Remco Stoeten</strong>
            <br /> in <strong>Nextjs</strong> & <strong>TypeScript</strong>.
          </Paragraph>
        </div>
        <div className="flex flex-col text-right">
          <Paragraph>
            <Link
              className="underline"
              href={siteConfig.links.snippets}
              target="_blank"
            >
              Snippets
            </Link>
          </Paragraph>
          <Paragraph>
            <Link
              className="underline"
              href={siteConfig.links.github}
              target="_blank"
            >
              Github
            </Link>
          </Paragraph>
        </div>
      </Flex>
    </BentoBox>
  );
}
