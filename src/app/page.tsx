"use client";
import Intro from "@/components/pages/homepage/Intro";
import ProjectSection from "@/components/pages/homepage/ProjectSection";
import SecondSection from "@/components/pages/homepage/SecondSection";
import StackSection from "@/components/pages/homepage/StackSection";

export default function page() {
  return (
    <>
      <Intro />
      <SecondSection />
      <StackSection limit />
      <ProjectSection />
    </>
  );
}
