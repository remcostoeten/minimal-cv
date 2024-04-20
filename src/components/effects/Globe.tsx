"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./GlobeConfig").then((m) => m.World), {
    ssr: false,
});

export function WorldGlobe() {
    const globeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#AC99FF",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 3,
        maxRings: 3,
        initialPosition: { lat: -53.3193, lng: 6.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.25,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: 52.3702, // Amsterdam
            startLng: 4.8952,
            endLat: 51.9225, // Rotterdam
            endLng: 4.47917,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.9225, // Rotterdam
            startLng: 4.47917,
            endLat: 52.0907, // Utrecht
            endLng: 5.12142,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: 52.0907, // Utrecht
            startLng: 5.12142,
            endLat: 53.2194, // Groningen
            endLng: 6.5665,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 53.2194, // Groningen
            startLng: 6.5665,
            endLat: 51.4416, // Eindhoven
            endLng: 5.4697,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 51.4416, // Eindhoven
            startLng: 5.4697,
            endLat: 52.3702, // Amsterdam
            endLng: 4.8952,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];

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
                >
                </motion.div>
                <div className=" w-full -bottom-20 h-72 md:h-96 z-10">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
            </div>
        </div>
    );
}
