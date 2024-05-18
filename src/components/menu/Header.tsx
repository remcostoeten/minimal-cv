"use client";

import {
  CrossIcon,
  GithubIcon,
  Linkedin,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import Flex from "../core/Flexer";
import Pill, { PulseDot } from "../core/Pill";
import HeaderShell from "./HeaderShell";
import { themeColors } from "@/core/constants/colors";
import Link from "next/link";
import { m } from "framer-motion";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
} from "../ui/drawer";
import { MovingBorderButton } from "../core/BorderButton";

export default function Header() {
  return (
    <HeaderShell>
      <div className="flex justify-between items-center">
        <Flex>
          <Flex dir="col" justify="center" gap="small">
            <Link
              href="/"
              className="font leading-[1] text-[24px] font-medium  text-pink"
            >
              <span className="flex gap-2">
                Remco <span className="hidden sm:block">Stoeten</span>
              </span>
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
            <Link href="mailto:remcostoeten@hotmail.com">
              <MailIcon width={20} height={20} color={themeColors.pink} />
            </Link>
          </HeaderIcon>
          <HeaderIcon>
            <Link target="_blank" href="https://github.com/remcostoeten">
              <GithubIcon width={16} height={16} color={themeColors.pink} />
            </Link>
          </HeaderIcon>
          <HeaderIcon>
            <Link href="https://wa.me/0636590707">
              <PhoneIcon width={16} height={16} color={themeColors.pink} />
            </Link>
          </HeaderIcon>
          <HeaderIcon>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/remco-stoeten/"
            >
              <Linkedin width={16} height={16} color={themeColors.pink} />
            </Link>
          </HeaderIcon>
          <Drawer>
            <DrawerTrigger>
              <HeaderIcon>
                <ResumeIcon width={20} height={20} color={themeColors.pink} />
              </HeaderIcon>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex gap-4 mb-2 justify-end pr-3  w-full">
                <button className="download w-8 h-8 bg-cardalt rounded-lg flex items-center justify-center z-[9999]">
                  <a href="/cvremcostoeten.pdf" download>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      width={18}
                      height={18}
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </button>
                <DrawerClose>
                  <button className="download w-8 h-8 bg-cardalt rounded-lg flex items-center justify-center z-[9999]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </DrawerClose>
              </div>
              <embed
                src="/cvremcostoeten.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </DrawerContent>
          </Drawer>
        </Flex>
      </div>
    </HeaderShell>
  );
}

const HeaderIcon = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cardalt">
      {children}
    </div>
  );
};

function ResumeIcon({ width = 24, height = 24, color }) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   strokeWidth={1.5}
    //   stroke="currentColor"
    //   width={width}
    //   height={height}
    // >
    //   <path
    //     strokeLinecap="round"
    //     fill={color}
    //     strokeLinejoin="round"
    //     d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
      />
    </svg>
  );
}
