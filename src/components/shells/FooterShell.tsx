import React from "react";
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
          <Paragraph>© 2024. All rights Reserved</Paragraph>
          <Paragraph>
            Made by <strong>Remco stoeten</strong> in <strong>Nextjs</strong>
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
              tFflex
              gap-4arget="_blank"
            >
              Github
            </Link>
          </Paragraph>
        </div>
      </Flex>
    </BentoBox>
  );
}
