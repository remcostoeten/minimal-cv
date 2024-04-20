import { Children } from "react";

type HeadingProps = {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "text-36" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | string;
    color?: "text-neutral-200" | "text-neutral-300" | "text-neutral-400" | string;
    maxWidth?: "max-w-full" | "max-w-md" | "max-w-lg" | "max-w-xl" | string;
    children: React.ReactNode;
};

export default function Heading({
    children,
    as,
    size = "36",
    color = "text-neutral-200",
    maxWidth,
    ...props
}: HeadingProps) {
    const Component = as;

    return (
        <Component className={`text-${size} ${color} ${maxWidth}`} {...props}>
            {children}
        </Component>
    );
}

/**
 * Heading component
 *
 * Props:
 * - level: Specifies the heading level. Accepts 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'.
 * - size: Specifies the text size. Accepts 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | string. Default is 'text-2xl'.
 * - color: Specifies the text color. Accepts 'text-neutral-200' | 'text-neutral-300' | 'text-neutral-400' | string. Default is 'text-neutral-200'.
 * - maxWidth: Specifies the maximum width. Accepts 'max-w-full' | 'max-w-md' | 'max-w-lg' | 'max-w-xl' | string.
 * - children: The content inside the heading.
 *
 * Usage:
 * ```tsx
 * <Heading level="h1" size="text-3xl" color="text-neutral-300" maxWidth="max-w-md">
 *   Hello, world!
 * </Heading>
 * ```
 */
