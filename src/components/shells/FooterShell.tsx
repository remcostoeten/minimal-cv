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
        <div className="flex gap-2 sm:text-right">
          <div className="flex flex-col-reverse">
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
          <div>
            <Paragraph>
              <Link
                className="underline hidden sm:block"
                href="https://portfolio.remcostoeten.com/"
                target="_blank"
              >
                Portfolio v1
              </Link>
              <Link className='sm:hidden underline'

              href={siteConfig.links.linkedin}
              target="_blank"
              >LinkedIn

              </Link>
            </Paragraph>
            <div className="flex flex-col">
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
      </div>
    </BentoBox>
  );
}
