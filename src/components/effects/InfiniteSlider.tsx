  "use client";
  import React, { ReactElement, useEffect, useState } from "react";
  import { motion } from "framer-motion";
  import Pill from "../core/Pill";
  import { pills } from "@/core/data/homepage";
  import { BEZIER_CURVES } from "@/core/lib/bezier-curves";

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const InfiniteSlider: React.FC = () => {
    const [randomizedPills1, setRandomizedPills1] = useState(pills);
    const [randomizedPills2, setRandomizedPills2] = useState(pills);
    const [randomizedPills3, setRandomizedPills3] = useState(pills);

    useEffect(() => {
      setRandomizedPills1(shuffleArray([...pills]));
      setRandomizedPills2(shuffleArray([...pills]));
      setRandomizedPills3(shuffleArray([...pills]));
    }, []);

    const slidesRow1: ReactElement[] = randomizedPills1.map((pill, index) => (
      <Pill hasStar key={pill.id}>
        {pill}
      </Pill>
    ));
    const slidesRow2: ReactElement[] = randomizedPills2
      .slice()
      .reverse()
      .map((pill, index) => (
        <Pill hasStar key={pill.id}>
          {pill}
        </Pill>
      ));
    const slidesRow3: ReactElement[] = randomizedPills3.map((pill, index) => (
      <Pill hasStar key={pill.id}>
        {pill}
      </Pill>
    ));

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.9,
            delay: 1,
            ease: BEZIER_CURVES.BEZIERWTO,
          },
        }}
        viewport={{ once: true }}
        className="relative w-max overflow-hidden infinite-slider-fade"
      >
        <div className="flex w-full">
          <div className="flex-shrink-0" style={{ overflowX: "auto" }}>
            <motion.div
              className="flex"
              animate={{
                x: ["-65%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 80,
                  repeat: Infinity,
                },
              }}
            >
              {slidesRow1.map((slide, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-full text-6xl"
                >
                  {slide}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex w-full mt-4">
          <div className="flex-shrink-0" style={{ overflowX: "auto" }}>
            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-90%"],
                transition: {
                  ease: "linear",
                  duration: 80,
                  repeat: Infinity,
                },
              }}
            >
              {slidesRow2.map((slide, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-full text-6xl"
                >
                  {slide}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex w-full mt-4">
          <div className="flex-shrink-0" style={{ overflowX: "auto" }}>
            <motion.div
              className="flex"
              animate={{
                x: ["-80%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 85,
                  repeat: Infinity,
                },
              }}
            >
              {slidesRow3.map((slide, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-full text-6xl"
                >
                  {slide}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default InfiniteSlider;
