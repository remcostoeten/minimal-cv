"use client";
import { BEZIER_CURVES } from "@/core/lib/bezier-curves";
import { ReactNode } from "react";
import { MotionWrapperProps } from "../effects/motion-element";
import { motion } from "framer-motion";

interface BentoBoxProps extends MotionWrapperProps {
  children: ReactNode;
  bg?: string;
  color?: string;
  width?: "full" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4";
  noPadding?: boolean;
  maxHeight?: boolean;
  infiniteSliderFade?: boolean;
}

export default function BentoBox({
  children,
  bg = "card",
  color = "neutral-200",
  width = "full",
  noPadding = false,
  maxHeight = false,
  infiniteSliderFade = false,
  ...props
}: BentoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.9,
          ease: BEZIER_CURVES.BEZIERONE,
          delay: 0.3,
        },
      }}
      viewport={{ once: true }}
      className={`font flex gap-[24px] justify-around flex-col ${noPadding ? "" : "p-24"} shadow-sm rounded-[30px] max-md:px-5 max-md:max-w-full bg-${bg} text-${color} w-${width} ${maxHeight ? "max-h-260" : ""} ${infiniteSliderFade ? "infinite-slider-fade" : ""}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
