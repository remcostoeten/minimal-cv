"use client";
import Intro from "@/components/pages/homepage/Intro";
import SecondSection from "@/components/pages/homepage/SecondSection";
import StackSection from "@/components/pages/homepage/StackSection";
import ProjectSection from "@/components/pages/homepage/ProjectSection";

export default function page() {
    return (
        <>
            <Intro />
            <SecondSection />
            <StackSection />
            <ProjectSection />
        </>
    );
}
