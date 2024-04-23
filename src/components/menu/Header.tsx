import {
  GithubIcon,
  Linkedin,
  MailIcon,
  Phone,
  PhoneCallIcon,
  PhoneIcon,
} from "lucide-react";
import Flex from "../core/Flexer";
import Pill, { PulseDot } from "../core/Pill";
import HeaderShell from "./HeaderShell";
import { themeColors } from "@/core/constants/colors";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <HeaderShell>
      <div className="flex justify-between items-center">
        <Flex>
          <Flex dir="col" justify="center" gap="small">
            <div className="font leading-[1] text-[24px] font-medium  text-pink">
              <span className="flex gap-2">
                Remco <span className="hidden sm:block">Stoeten</span>
              </span>
            </div>
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
              <MailIcon width={16} height={16} color={themeColors.pink} />
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
        </Flex>
      </div>
    </HeaderShell>
  );
}

const HeaderIcon = ({ children }) => (
  <div className="flex gap-3 bg-blend-normal">
    <div className="bg-cardalt w-8 h-8 rounded-lg flex items-center justify-center">
      {children}
    </div>
  </div>
);
