import { ReactNode } from "react";

type HeaderShellProps = {
    children: ReactNode;
}

export default function HeaderShell({
    children,
    ...props
}: HeaderShellProps) {
    return (
        <header
            className={`font flex gap-[24px] h-[80px] flex-col shadow-sm rounded-[30px] max-md:max-w-full bg-card text w-full`}
            {...props}
        >
            {children}
        </header>
    );
}
