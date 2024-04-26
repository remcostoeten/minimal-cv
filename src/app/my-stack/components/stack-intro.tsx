import Heading from "@/components/core/Heading";
import Paragraph from "@/components/core/Text";
import BentoBox from "@/components/shells/BentoShell";
import { stack } from "@/core/data/stack";

export default function StackIntro() {
  return (
    <BentoBox>
      <Heading leading="leading-7" as="h2" size="36">
        {stack.title}
      </Heading>
      <Paragraph>{stack.content}</Paragraph>
    </BentoBox>
  );
}
