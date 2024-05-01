import React, { Suspense, useEffect, useState } from "react";
import { SkillIcon, locationIcon } from "@/components/core/icons";
import InfiniteSlider from "@/components/effects/InfiniteSlider";
import BentoBox from "@/components/shells/BentoShell";
import BentoTitle from "@/components/shells/BentoTitle";

export default function SecondSection() {
  const [WorldGlobe, setWorldGlobe] = useState<React.FC | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const waitForDomThenRenderWorldGlobe = async () => {
      if (typeof window !== "undefined") {
        const { WorldGlobe } = await import("@/components/effects/Globe");
        setTimeout(() => {
          setWorldGlobe(() => WorldGlobe);
          setIsLoading(false);
        }, 1000);
      }
    }

    waitForDomThenRenderWorldGlobe();
  }, []);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-24 overflow-hidden">
      <BentoBox maxHeight noPadding width="full">
        <div className="flex flex-col gap-4 overflow-hidden">
          <BentoTitle padding icon={locationIcon()}>
            Lemmer, the Netherlands
          </BentoTitle>
          {isLoading ? (
            <div className='fake-globe'/>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              {WorldGlobe && <WorldGlobe />}
            </Suspense>
          )}
        </div>
      </BentoBox>
      <BentoBox infiniteSliderFade width="full">
        <div className="flex flex-col gap-4">
          <BentoTitle icon={SkillIcon()}>Skills</BentoTitle>
          <InfiniteSlider />
        </div>
      </BentoBox>
    </div>
  );
}