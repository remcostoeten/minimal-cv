import React from "react";

type PillProps = {
  children: React.ReactNode;
  hasStar?: boolean;
};

export default function Pill({ hasStar, children }: PillProps) {
  return (
    <div className="flex items-center justify-center flex-nowrap gap-3 h-auto overflow-hidden py-0 px-2  relative w-auto">
      {hasStar && <StarIcon />}
      <div className="text-[16px]  bg-cardalt   p-[12px] h-[36px] rounded-[12px] flex w-full break-words items-center justify-center ">
        {children}
      </div>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      version="1.1"
      fill="#ac99ff"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        d="M495.469 241.969c-113.594 0-152.875-28.5-174.906-50.531-22.031-22.125-50.578-61.344-50.578-174.922 0-4.328-.453-16.516-14.016-16.516C242.531 0 242 12.188 242 16.516c0 113.578-28.563 152.797-50.594 174.922-22.094 22.031-61.375 50.531-174.906 50.531-4.344 0-16.5.5-16.5 14.047 0 13.453 12.156 13.938 16.5 13.938 113.531 0 152.813 28.578 174.906 50.625C213.438 342.625 242 381.922 242 495.5c0 4.344.531 16.5 13.969 16.5 13.563 0 14.016-12.156 14.016-16.5 0-113.578 28.547-152.875 50.578-174.922 22.031-22.078 61.313-50.625 174.906-50.625 4.328 0 16.531-.422 16.531-13.984 0-13.453-12.203-14-16.531-14z"
        className="st0"
      ></path>
    </svg>
  );
}
