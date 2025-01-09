

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
            <motion.span className='p-2 font-semibold' style={{ opacity }}>{children}</motion.span>
        )
    }
    return (
        <>
            <div className="text-white py-5 lg:py-28 px-10 bg-[#000b1c]">
                <p ref={ref} className='text-2xl sm:text-5xl lg:text-7xl leading-snug flex flex-wrap justify-center'>
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
