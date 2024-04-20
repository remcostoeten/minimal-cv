'use client'
import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import Pill from '../core/Pill';
import { pills } from '@/core/data/homepage';

const slidesRow1: ReactElement[] = pills.map((pill, index) => <Pill hasStar key={index}>{pill}</Pill>);
const slidesRow2: ReactElement[] = pills.slice().reverse().map((pill, index) => <Pill hasStar key={index}>{pill}</Pill>);
const slidesRow3: ReactElement[] = pills.map((pill, index) => <Pill hasStar key={index}>{pill}</Pill>);

const InfiniteSlider: React.FC = () => {
    return (
        <div className="relative w-max overflow-hidden infinite-slider-fade">
            <div className="flex w-full">
                <div className="flex-shrink-0" style={{ overflowX: 'auto' }}>
                    <motion.div
                        className="flex"
                        animate={{
                            x: ['-65%', '0%'],
                            transition: {
                                ease: 'linear',
                                duration: 80,
                                repeat: Infinity,
                            }
                        }}
                    >
                        {slidesRow1.map((slide, index) => (
                            <div key={index} className="flex items-center justify-center h-full text-6xl">
                                {slide}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="flex w-full mt-4">
                <div className="flex-shrink-0" style={{ overflowX: 'auto' }}>
                    <motion.div
                        className="flex"
                        animate={{
                            // Swap the values to make the slide move in the reverse direction
                            x: ['0%', '-90%'],
                            transition: {
                                ease: 'linear',
                                duration: 80,
                                repeat: Infinity,
                            }
                        }}
                    >
                        {slidesRow2.map((slide, index) => (
                            <div key={index} className="flex items-center justify-center h-full text-6xl">
                                {slide}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="flex w-full mt-4">
                <div className="flex-shrink-0" style={{ overflowX: 'auto' }}>
                    <motion.div
                        className="flex"
                        animate={{
                            x: ['-80%', '0%'],
                            transition: {
                                ease: 'linear',
                                duration: 85,
                                repeat: Infinity,
                            }
                        }}
                    >
                        {slidesRow3.map((slide, index) => (
                            <div key={index} className="flex items-center justify-center h-full text-6xl">
                                {slide}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default InfiniteSlider;