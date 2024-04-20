import React, { HTMLProps, ReactNode } from "react";

type FlexProps<T extends keyof JSX.IntrinsicElements> = HTMLProps<T> & {
    dir?: "row" | "row-reverse" | "col" | "col-reverse";
    justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
    align?: "start" | "end" | "center" | "stretch" | "baseline";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
    as?: any;
    gap?: string;
};

const Flex = <T extends keyof JSX.IntrinsicElements = 'div'>({
    dir = "row",
    justify = "start",
    align = "start",
    wrap = "nowrap",
    className = "",
    children,
    gap,
    as = 'div',
    ...props
}: FlexProps<T>) => {
    const Component = as;
    return (
        <Component
            className={`flex ${dir !== "row" ? `flex-${dir}` : ""} justify-${justify} items-${align} ${wrap !== "nowrap" ? `flex-${wrap}` : ""} gap-${gap} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Flex;
/**
 * Flex is a flexible container component using the Flexbox layout model.
 *
 * @param direction - The direction of the flex container. Defaults to 'row'.
 * @param justify - The alignment of flex items along the main axis. Defaults to 'start'.
 * @param align - The alignment of flex items along the cross axis. Defaults to 'start'.
 * @param wrap - Whether flex items should wrap if they exceed the container width. Defaults to 'nowrap'.
 * @returns A flexible container with customizable flexbox properties.
 */

/**
 * Example usage:
 *
 * ```tsx
 * <Flex col justify="center">
 *   <div>Content 1</div>
 *   <div>Content 2</div>
 * </Flex>
 * ```
 *
 * This will render a flex container with a column layout and center alignment.
 */
