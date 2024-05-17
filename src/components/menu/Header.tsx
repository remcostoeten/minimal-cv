"use client";

import { GithubIcon, Linkedin, MailIcon, PhoneIcon } from "lucide-react";
import Flex from "../core/Flexer";
import Pill, { PulseDot } from "../core/Pill";
import HeaderShell from "./HeaderShell";
import { themeColors } from "@/core/constants/colors";
import Link from "next/link";
import { m } from "framer-motion";
import { Button } from "../effects/moving-border";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
} from "../ui/drawer";

export default function Header() {
  return (
    <HeaderShell>
      <div className="flex justify-between items-center">
        <Flex>
          <Flex dir="col" justify="center" gap="small">
            <Link href="/">
              <a className="font leading-[1] text-[24px] font-medium  text-pink">
                <span className="flex gap-2">
                  Remco <span className="hidden sm:block">Stoeten</span>
                </span>
              </a>
            </Link>
            <div className=" text-[14px] font-light  text-neutral-400">
              Front-end engineer
            </div>
          </Flex>
        </Flex>
        <span className="hidden sm:block">
          <Pill bg="cardalt" borderColor="green" color="neutral-200">
            <PulseDot />
            Available for work
          </Pill>
        </span>
        <Flex gap="2">
          <HeaderIcon>
            <a href="mailto:remcostoeten@hotmail.com">
              <MailIcon width={16} height={16} color={themeColors.pink} />
            </a>
          </HeaderIcon>
          <HeaderIcon>
            <a target="_blank" href="https://github.com/remcostoeten">
              <GithubIcon width={16} height={16} color={themeColors.pink} />
            </a>
          </HeaderIcon>
          <HeaderIcon>
            <a href="https://wa.me/0636590707">
              <PhoneIcon width={16} height={16} color={themeColors.pink} />
            </a>
          </HeaderIcon>
          <HeaderIcon>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/remco-stoeten/"
            >
              <Linkedin width={16} height={16} color={themeColors.pink} />
            </a>
          </HeaderIcon>
          <Drawer>
            <DrawerTrigger>
              <HeaderIcon>
                <ResumeIcon width={16} height={16} color={themeColors.pink} />
              </HeaderIcon>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader></DrawerHeader>
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
        </Flex>
      </div>
    </HeaderShell>
  );
}

const HeaderIcon = ({ children }) => (
  <m.div
    whileHover={{
      scale: 1.2,
      transition: { duration: 1 },
    }}
    whileTap={{ scale: 0.9 }}
    className="flex gap-3 bg-blend-normal"
  >
    <div className="bg-cardalt w-8 h-8 rounded-lg flex items-center justify-center">
      {children}
    </div>
  </m.div>
);

function ResumeIcon({ width = 24, height = 24, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      width={width}
      height={height}
      fill={color}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}
