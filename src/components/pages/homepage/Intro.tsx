import Heading from "@/components/core/Heading";
import BentoBox from "@/components/shells/PageShell";
import * as React from "react";
export default function Intro() {
  return (
    <BentoBox>
      <Heading as="h2" size="36">
        Hello there! Remco here
      </Heading>
      <div className="flex justify-center items-center px-16 py-4 mt-6 text-sm text-violet-400 rounded-xl shadow-sm bg-zinc-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 px-0.5">
          <div className="grow">More about Me</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fdf5e2f8337dc24ddca9eea3aaa1b3da235f7a12f3c1b015dde00067d71c972?apiKey=2a72745ec00444ad9fe2bd2391d98932&"
            className="shrink-0 w-3 aspect-[1.2]"
          />
        </div>
      </div>
    </BentoBox>
  );
}
