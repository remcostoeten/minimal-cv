"use client";

import AnimatedElement from "@/components/effects/AnimatedElement";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.body.classList.add("error-page");
    return () => {
      document.body.classList.remove("error-page");
    };
  }, []);

  return (
    <AnimatedElement
      opacity={0}
      duration={0.5}
      delay={0}
      className="error-contained mb-24 mr-3 mt-32 max-md:mx-auto max-md:my-10 max-md:mr-2.5 max-md:max-w-full"
    >
      <div className="flex items-center justify-between gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
        <AnimatedElement
          opacity={0}
          duration={0.2}
          className="flex flex-col items-stretch max-md:ml-0 max-md:w-full"
        >
          <AnimatedElement
            opacity={0}
            duration={0.6}
            delay={0.2}
            className="flex grow flex-col items-stretch pr-8 max-md:mx-auto max-md:mt-10 max-md:max-w-full max-md:pr-5"
          >
            <div className="text-base font-semibold leading-6 text-neutral-300 max-md:max-w-full">
              404 error
            </div>
            <AnimatedElement
              opacity={0}
              duration={0.4}
              delay={0.4}
              className="mt-3 text-6xl font-semibold leading-[72px] tracking-tighter text-neutral-100 max-md:max-w-full max-md:text-4xl"
            >
              Under maintenance
            </AnimatedElement>
            <AnimatedElement
              opacity={0}
              duration={0.6}
              delay={0.6}
              className="mt-6 max-w-[480px] text-xl leading-8 text-neutral-400 max-md:max-w-full"
            >
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved. Please go back to{" "}
              <Link href="/" className="underline">
                home
              </Link>
            </AnimatedElement>{" "}
          </AnimatedElement>
        </AnimatedElement>
        <AnimatedElement
          opacity={0}
          duration={0.5}
          delay={0.5}
          x={15}
          className="error-svg ml-5 flex w-[46%] flex-col items-stretch max-md:mx-auto max-md:ml-0 max-md:w-full smw30"
        >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="514"
      height="164"
      fill="none"
      viewBox="0 0 514 164"
    >
      <circle cx="101" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="101"
        cy="142"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <circle cx="21" cy="102" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="141"
        cy="102"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <circle cx="193" cy="82" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle cx="313" cy="82" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle cx="253" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="253"
        cy="142"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M1 102c0-11.046 8.954-20 20-20h120c11.046 0 20 8.954 20 20s-8.954 20-20 20H21c-11.046 0-20-8.954-20-20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M101 162c-11.046 0-20-8.954-20-20V22c0-11.046 8.954-20 20-20s20 8.954 20 20v120c0 11.046-8.954 20-20 20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M7.142 115.995c-7.81-7.81-7.81-20.474 0-28.284L86.711 8.142c7.81-7.81 20.473-7.81 28.284 0 7.81 7.81 7.81 20.474 0 28.285l-79.569 79.568c-7.81 7.811-20.473 7.811-28.284 0z"
      ></path>
      <circle cx="453" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
      <circle
        cx="453"
        cy="142"  <svg
        xmlns="http://www.w3.org/2000/svg"
        width="514"
        height="164"
        fill="none"
        viewBox="0 0 514 164"
      >
        <circle cx="101" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
        <circle
          cx="101"
          cy="142"
          r="20"
          stroke="#94969C"
          strokeWidth="2"
        ></circle>
        <circle cx="21" cy="102" r="20" stroke="#94969C" strokeWidth="2"></circle>
        <circle
          cx="141"
          cy="102"
          r="20"
          stroke="#94969C"
          strokeWidth="2"
        ></circle>
        <circle cx="193" cy="82" r="20" stroke="#94969C" strokeWidth="2"></circle>
        <circle cx="313" cy="82" r="20" stroke="#94969C" strokeWidth="2"></circle>
        <circle cx="253" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
        <circle
          cx="253"
          cy="142"
          r="20"
          stroke="#94969C"
          strokeWidth="2"
        ></circle>
        <path
          stroke="#94969C"
          strokeWidth="2"
          d="M1 102c0-11.046 8.954-20 20-20h120c11.046 0 20 8.954 20 20s-8.954 20-20 20H21c-11.046 0-20-8.954-20-20z"
        ></path>
        <path
          stroke="#94969C"
          strokeWidth="2"
          d="M101 162c-11.046 0-20-8.954-20-20V22c0-11.046 8.954-20 20-20s20 8.954 20 20v120c0 11.046-8.954 20-20 20z"
        ></path>
        <path
          stroke="#94969C"
          strokeWidth="2"
          d="M7.142 115.995c-7.81-7.81-7.81-20.474 0-28.284L86.711 8.142c7.81-7.81 20.473-7.81 28.284 0 7.81 7.81 7.81 20.474 0 28.285l-79.569 79.568c-7.81 7.811-20.473 7.811-28.284 0z"
        ></path>
        <circle cx="453" cy="22" r="20" stroke="#94969C" strokeWidth="2"></circle>
        <circle
          cx="453"
      ></circle>
      <circle
        cx="373"
        cy="102"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <circle
        cx="493"
        cy="102"
        r="20"
        stroke="#94969C"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M353 102c0-11.046 8.954-20 20-20h120c11.046 0 20 8.954 20 20s-8.954 20-20 20H373c-11.046 0-20-8.954-20-20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M453 162c-11.046 0-20-8.954-20-20V22c0-11.046 8.954-20 20-20s20 8.954 20 20v120c0 11.046-8.954 20-20 20z"
      ></path>
      <path
        stroke="#94969C"
        strokeWidth="2"
        d="M359.142 115.995c-7.81-7.81-7.81-20.474 0-28.284l79.569-79.569c7.81-7.81 20.473-7.81 28.284 0 7.81 7.81 7.81 20.474 0 28.285l-79.569 79.568c-7.81 7.811-20.473 7.811-28.284 0z"
      ></path>
      <circle cx="253" cy="82" r="80" stroke="#94969C" strokeWidth="2"></circle>
      <circle cx="253" cy="82" r="40" stroke="#94969C" strokeWidth="2"></circle>
      <path stroke="#94969C" strokeWidth="2" d="M0 1L513 1"></path>
      <path stroke="#94969C" strokeWidth="2" d="M0 163L513 163"></path>
    </svg>
          </AnimatedElement>
      </div>
    </AnimatedElement>
  );
};

export default NotFound;
