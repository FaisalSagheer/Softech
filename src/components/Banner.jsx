

import React, { useRef } from 'react';
import { useScroll, useTransform,motion } from 'motion/react';
import { BannerParagraph } from '../constants';



function Banner() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.2"],
    })
    const words = BannerParagraph.split(" ")
    const Word = ({ children, progress, range }) => {
        const opacity = useTransform(progress, range, [0, 1])
        return (
            <motion.span className='py-2 px-1 lg:p-2 font-semibold' style={{ opacity }}>{children}</motion.span>
        )
    }
    return (
        <>
            <div className="text-white py-10 lg:py-10 px-10 bg-[#000b1c]">
                <p ref={ref} className='capitalize text-2xl sm:text-5xl lg:text-7xl leading-5 flex flex-wrap justify-center'>
                    {words.map((word, index) => {
                        const start = index/words.length;
                        const end = start + (1/words.length)
                        return <Word key={index} range={[start,end]} progress={scrollYProgress}>{word}</Word>
                    })
                    }
                </p>

            </div>
        </>
    )
}
export default Banner;
