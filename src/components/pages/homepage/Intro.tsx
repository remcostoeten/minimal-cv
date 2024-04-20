import Heading from "@/components/core/Heading";
import BentoBox from "@/components/shells/BentoShell";
import Paragraph from "@/components/core/Text";
import CTAButton from "@/components/core/Cta";
import { introduction } from "@/core/data/homepage";
export default function Intro() {
  return (
    <BentoBox>
      <Heading as="h2" size="36">
        {introduction.title}
      </Heading>
      <Paragraph>
        I'm a passionate web designer who crafts digital experiences with a
        perfect blend of creativity and functionality. With an eye for detail
        and a love for clean, user-friendly designs, I bring websites to life
        that not only look stunning but also deliver seamless and enjoyable user
        journeys.
      </Paragraph>
      <CTAButton hasIcon>{introduction.button}</CTAButton>
    </BentoBox>
  );
}
