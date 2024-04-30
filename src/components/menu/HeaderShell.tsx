"use client";
import { BEZIER_CURVES } from "@/core/lib/bezier-curves";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type HeaderShellProps = {
  children: ReactNode;
};

export default function HeaderShell({ children, ...props }: HeaderShellProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.9, ease: BEZIER_CURVES.BEZIERONE },
      }}
      transition={{ duration: 0.5, delay: 0.3, ease: BEZIER_CURVES.BEZIERONE }}
      className={`font pl-24  justify-around flex gap-[24px] h-[80px] flex-col shadow-sm rounded-[30px] pr-24 max-md:max-w-full bg-card  w-full`}
      {...props}
    >
      {children}
    </motion.header>
  );
}
