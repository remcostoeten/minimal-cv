"use client";

import Paragraph from "@/components/core/Text";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BEZIER_CURVES } from "@/core/lib/bezier-curves";
import { motion } from "framer-motion";
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
  ];

  return (
    <div>
      <Paragraph>
        And loads more which can be found on my resume here:
        <Drawer>
          <DrawerTrigger><span className="underline pl-2">open resume</span></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>My CV</DrawerTitle>
              <DrawerDescription>This is my CV.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
            <embed
  src="/cvremcostoeten.pdf"
  type="application/pdf"
  width="100%"
  height="600px"
/>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Paragraph>
      <ul>
        {articles.map((article, index) => (
          <motion.li
            className="group"
            key={index}
            initial={{ opacity: 0, y: -20, x: -40, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              x: 0,
              transition: {
                duration: 0.9,
                ease: BEZIER_CURVES.BEZIERWTO,
                delay: 0.3,
              },
            }}
            viewport={{ once: true }}
          >
            <Link
              target="_blank"
              className="flex px-2 py-4 justify-between items-center text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white group-hover:translate-x-1 transition transition-colors ease-bezier"
              href={article.anchor}
            >
              <span>{article.title}</span>
              <IconAngleupright className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <hr className="border-[#57534e] hover:border-white transition-colors ease-bezier" />
          </motion.li>
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
