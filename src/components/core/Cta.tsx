import Link from "next/link";
import React, { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  bgColor?: string;
  href?: string;
  hasIcon?: boolean;
};

export default function CTAButton({
  children,
  bgColor = "cardalt",
  href,
  hasIcon = false,
  ...props
}: CTAButtonProps) {
    return href ? (
      <Link
          href={href}
          className={`cta-button flex flex-row items-center justify-center gap-1.5 h-[64px] px-6 text-green hover:bg-cardalt/80 hover:border-green/10 border border-transparent transition-all duration-400 ease-in-out bg-cardalt rounded-lg shadow-md cursor-pointer overflow-hidden relative hover:glow-green`}
          {...props}
      >
          {children}
          {hasIcon && <span className="ml-2">{arrowIcon}</span>}
      </Link>
  ) : (
      <button
          className={`cta-button flex flex-row items-center justify-center gap-1.5 h-[64px] px-6 text-green hover:bg-cardalt/80 hover:border-green/10 border border-transparent transition-all duration-600 ease-in-out bg-cardalt rounded-lg shadow-md cursor-pointer overflow-hidden relative hover:glow-green`}
          {...props}
      >
          {children}
          {hasIcon && <span className="ml-2">{arrowIcon}</span>}
      </button>
  );
}

const arrowIcon = (
  <svg
    width="12"
    height="10"
    viewBox="0 0 12 10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.8538 5.35375L7.35375 9.85375C7.25993 9.94757 7.13268 10.0003 7 10.0003C6.86732 10.0003 6.74007 9.94757 6.64625 9.85375C6.55243 9.75993 6.49972 9.63269 6.49972 9.5C6.49972 9.36732 6.55243 9.24007 6.64625 9.14625L10.2931 5.5H0.5C0.367392 5.5 0.240215 5.44733 0.146447 5.35356C0.0526785 5.25979 0 5.13261 0 5C0 4.86739 0.0526785 4.74022 0.146447 4.64645C0.240215 4.55268 0.367392 4.5 0.5 4.5H10.2931L6.64625 0.853753C6.55243 0.759933 6.49972 0.632685 6.49972 0.500003C6.49972 0.367321 6.55243 0.240074 6.64625 0.146253C6.74007 0.052433 6.86732 -0.000274658 7 -0.000274658C7.13268 -0.000274658 7.25993 0.052433 7.35375 0.146253L11.8538 4.64625C11.9002 4.69269 11.9371 4.74783 11.9623 4.80853C11.9874 4.86923 12.0004 4.9343 12.0004 5C12.0004 5.06571 11.9874 5.13077 11.9623 5.19147C11.9371 5.25217 11.9002 5.30732 11.8538 5.35375Z"
  fill='#00cc96'
/>
  </svg>
);
