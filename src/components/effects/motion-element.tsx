'use client';

import { BEZIER_CURVES } from "@/core/lib/bezier-curves";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";


export interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  initial?: object;
  whileInView?: object;
  className?: string;
}

export default function MotionWrapper({
  children,
  className,
  as = "div",
  initial = { opacity: 0, y: -20, scale: .8 },
  whileInView = { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: BEZIER_CURVES.BEZIERONE } },
  ...props
}: MotionWrapperProps) {
  const Element = motion[as];

  return (
    <Element
      initial={initial}
      whileInView={whileInView}
      className={className}
      {...props}
    >
      {children}
    </Element>
  );
}