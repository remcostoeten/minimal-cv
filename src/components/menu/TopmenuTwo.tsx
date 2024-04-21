import { GithubIcon, Linkedin, MailIcon, Phone, PhoneCallIcon, PhoneIcon } from "lucide-react";
import Flex from "../core/Flexer";
import Pill, { PulseDot } from "../core/Pill";
import HeaderShell from "./HeaderShell";
import { themeColors } from "@/core/constants/colors";
import Link from "next/link";

export default function Header() {
    return (
        <HeaderShell>
            <Flex justify="between" align="center">
                <Flex>
                    {userImage()}
                    <Flex dir="col" justify="center" gap="small">
                        <div className="font leading-[1] text-[24px] font-medium  text-pink">
                            Remco Stoeten
                        </div>
                        <div className=" text-[14px] font-light  text-neutral-400">
                            Front-end engineer
                        </div>
                    </Flex>
                </Flex>
                <Pill bg="cardalt" borderColor="green" color="neutral-200">
                    <PulseDot />
                    Available for work
                </Pill>
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
                        <Link target="_blank" href="https://www.linkedin.com/in/remco-stoeten/">
                            <Linkedin width={16} height={16} color={themeColors.pink} />
                        </Link>
                    </HeaderIcon>
                </Flex>
            </Flex>
        </HeaderShell>
    );
}

const HeaderIcon = ({ children }) => (
    <div className="flex gap-3 bg-blend-normal">
        <div className="bg-cardalt w-8 h-8 rounded-lg flex items-center justify-center">
            {children}
        </div>
    </div>
)

function userImage() {
    return (
        <img
            className="rounded-lg px-4 py-8"
            loading="lazy"
            srcSet="https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=100 100w, https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=200 200w, https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=400 400w, https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=800 800w, https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1200 1200w, https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=1600 1600w, https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&width=2000 2000w, https:cdn.builder.io/api/v1/image/assets/TEMP/b776b30afa9fa81cd079dc540e41234f5cf74e8cbcdaab721ef2cb248477b6f7?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="shrink-0 aspect-square w-[68px]"
        />
    );
}
