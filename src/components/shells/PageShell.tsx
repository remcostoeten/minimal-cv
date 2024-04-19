import React, { ReactNode, HTMLAttributes } from "react";

interface BentoBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  bg?: string;
  color?: string;
}

export default function BentoBox({
  children,
  bg = "stone-950",
  color = "neutral-200",
  ...props
}: BentoBoxProps) {
  return (
    <div
      className={`flex flex-col px-6 py-7 mt-6 shadow-sm rounded-[30px] max-md:px-5 max-md:max-w-full bg-${bg} text-${color}`}
      {...props}
    >
      {children}
    </div>
  );
}
