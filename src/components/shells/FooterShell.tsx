import BentoBox from "./BentoShell";
import Paragraph from "../core/Text";
import Link from "next/link";
import { siteConfig } from "@/core/data/personal-data";

export default function FooterShell() {
  return (
    <BentoBox>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-col sm:flex-row">
          <Paragraph>
            Made with <span className="pulse strong px-1">❤️</span> by{" "}
            <strong>Remco Stoeten</strong>
            <br /> in <strong>Nextjs</strong> & <strong>TypeScript</strong>.
          </Paragraph>
        </div>
        <span className="w-full h-[1px] bg-zinc-600 opacity-50 my-2 sm:hidden" />
        <div className="flex flex-col sm:text-right">
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
          <div className="flex flex-col sm:hidden">
            <Paragraph>
              <Link
                className="underline"
                href="https://portfolio.remcostoteten.com"
                target="_blank"
              >
                Portfolio v2
              </Link>
            </Paragraph>
            <Paragraph>
              <Link
                className="underline"
                href="        https://blog-remcostoetn-git-master2-remcostoetens-projects.vercel.app/
                "
                target="_blank"
              >
                Portfolio v3
              </Link>
            </Paragraph>
          </div>
        </div>
      </div>
    </BentoBox>
  );
}
