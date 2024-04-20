import React, { ReactNode, HTMLAttributes } from "react";

interface BentoBoxProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    bg?: string;
    color?: string;
    width?: 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4';
}

export default function BentoBox({
    children,
    bg = "card",
    color = "neutral-200",
    width = "full",
    ...props
}: BentoBoxProps) {

    return (
        <div
            className={`font flex gap-[24px] flex-col p-24 shadow-sm rounded-[30px] max-md:px-5 max-md:max-w-full bg-${bg} text-${color} w-${width} $`}
            {...props}
        >
            {children}
        </div>
    );
}
