import Heading from "@/components/core/Heading";
import BentoBox from "@/components/shells/BentoShell";
import Paragraph from "@/components/core/Text";
import CTAButton from "@/components/core/Cta";
import { introduction } from "@/core/data/homepage";
export default function Intro() {
  return (
    <BentoBox>
      <Heading  leading='leading-7' as="h2" size="36">
        {introduction.title}
      </Heading>
      <Paragraph>
        I am a recovering ex-Magento developer and currently building open
        source software at Pleio. Primarily working with TypeScript & Next.js,
        have done a little Python, Shell & Lua, and want to learn Go, OCaml,
        and, and and and.... ⌛
      </Paragraph>
      <CTAButton hasIcon>{introduction.button}</CTAButton>
    </BentoBox>
  );
}
