import * as React from "react";
export default function Intro() {
  return (
    <div className="flex flex-col px-6 py-7 mt-6 shadow-sm bg-card leading-[120%] rounded-[30px] max-md:px-5 max-md:max-w-full">
      <div className="text-4xl text-neutral-200 max-md:max-w-full">
        Hello there! Leon here!
      </div>
      <div className="mt-7 mr-7 text-base leading-6 text-neutral-400 max-md:mr-2.5 max-md:max-w-full">
        I'm a passionate web designer who crafts digital experiences with a
        perfect blend of creativity and functionality. With an eye for detail
        and a love for clean, user-friendly designs, I bring websites to life
        that not only look stunning but also deliver seamless and enjoyable user
        journeys.
      </div>
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
    </div>
  );
}
