import { SkillIcon, locationIcon } from "@/components/core/icons";
import { WorldGlobe } from "@/components/effects/Globe";
import InfiniteSlider from "@/components/effects/InfiniteSlider";
import BentoBox from "@/components/shells/BentoShell";
import BentoTitle from "@/components/shells/BentoTitle";

export default function SecondSection() {
  return (
    <div className="grid grid-cols-2 gap-24  overflow-hidden   ">
      <BentoBox maxHeight noPadding width="full">
        <div className="flex flex-col gap-4">
          <BentoTitle padding icon={locationIcon()}>
            Lemmer, the Netherlands
          </BentoTitle>
          <WorldGlobe />
        </div>
      </BentoBox>
      <BentoBox width="full">
        <div className="flex flex-col gap-4">
          <BentoTitle icon={SkillIcon()}>Skills</BentoTitle>
          <InfiniteSlider />
        </div>
      </BentoBox>
    </div>
  );
}
