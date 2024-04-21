import { HTMLAttributes, ReactNode } from "react";

interface BentoBoxProps extends HTMLAttributes<HTMLDivElement> {
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
    <div
      className={`font flex gap-[24px] justify-around flex-col ${noPadding ? "" : "p-24"} shadow-sm rounded-[30px] max-md:px-5 max-md:max-w-full bg-${bg} text-${color} w-${width} ${maxHeight ? "max-h-260" : ""} ${infiniteSliderFade ? "infinite-slider-fade" : ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
