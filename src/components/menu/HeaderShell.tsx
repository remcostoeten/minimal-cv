import { ReactNode } from "react";

type HeaderShellProps = {
    children: ReactNode;
};

export default function HeaderShell({ children, ...props }: HeaderShellProps) {
    return (
        <header
            className={`font  justify-around flex gap-[24px] h-[80px] flex-col shadow-sm rounded-[30px] pr-24 max-md:max-w-full bg-card  w-full`}
            {...props}
        >
            {children}
        </header>
    );
}
