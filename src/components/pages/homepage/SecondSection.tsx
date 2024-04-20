import Flex from '@/components/core/Flexer'
import BentoBox from '@/components/shells/BentoShell'
import React from 'react'

export default function SecondSection() {
    return (
        <div className='flex w-full gap-24'>
            <BentoBox width='full'>
                <div className='flex flex-col gap-4'>
                    <BentoTitle icon={locationIcon()}>Lemmer, the Netherlands</BentoTitle>
                </div>

            </BentoBox>
            <BentoBox width='full'>
                <div className='flex flex-col gap-4'>
                    <BentoTitle icon={SkillIcon()}>Skills</BentoTitle>
                    <InfiniteSlider />
                </div>
            </BentoBox>
        </div >
    )
}

const BentoTitle = ({ children, icon }) => {
    return (
        <Flex align='center'>
            {icon}
            <h3 className='ml-4 text-[18px]'>{children}</h3>
        </Flex>)
}

function locationIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))"
            style={{
                userSelect: "none",
                width: "21",
                height: "21",
                display: "inline-block",
                fill: "var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))",
                color: "var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))",
                flexShrink: 0
            }}
        >
            <g
                color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))"
            >
                <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
            </g>
        </svg>
    );
}

function SkillIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))"
            style={{
                userSelect: "none",
                width: "21",
                height: "21",
                display: "inline-block",
                fill: "var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))",
                color: "var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))",
                flexShrink: 0
            }}
        >
            <g
                color="var(--token-82600c9b-73af-46dc-b10d-4e1f7985fe89, rgb(0, 204, 150))"
            >
                <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
            </g>
        </svg>
    );
}