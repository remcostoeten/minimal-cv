"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { themeColors } from "@/core/constants/colors";
import { sampleArcs } from "@/core/data/homepage";

const World = dynamic(() => import("./GlobeConfig").then((m) => m.World), {
  ssr: false,
});

export function WorldGlobe() {
  const globeConfig = {
    pointSize: 9,
    globeColor: themeColors.grey,
    showAtmosphere: true,
    atmosphereColor: themeColors.pink, // the gausian-ish blurred ring around the globe
    atmosphereAltitude: 0.09, //  gauasian ring strength.
    emissive: themeColors.grey,
    emissiveIntensity: 0.1,
    shininess: 0.2,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#fff",
    directionalTopLight: themeColors.pink,
    pointLight: "#AC99FF",
    arcTime: 2500,
    arcLength: 1,
    rings: 1,
    initialPos1tion: { lat: -26.2041, lng: 28.0473 },
    autoRotate: true,
    autoRotateSpeed: 0.1,
  };

  return (
    <div className="flex flex-row items-center justify-center h-[400px] -translate-y-10 w-full z-10">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full ">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        ></motion.div>
        <div className=" w-full -bottom-20 h-72 md:h-96 z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
