import React, { HTMLAttributes } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLDivElement> {
    textSize?: string;
    lineHeight?: string;
    textColor?: string;
    spacing?: string;
    fontWeight?: "regular" | "[600]";
}

export default function Paragraph({
    children,
    textSize = "base",
    lineHeight = "6",
    textColor = "neutral-400",
    spacing,
    fontWeight = "regular",
    ...props
}: ParagraphProps) {
    const weightClass = fontWeight === "[600]" ? "font-semibold" : "font-normal";
    return (
        <p
            className={`text-${textSize} mb-${spacing} leading-${lineHeight} text-${textColor} ${weightClass}`}
            {...props}
        >
            {children}
        </p>
    );
}
