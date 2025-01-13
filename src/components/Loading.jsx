
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function Loading() {
    useGSAP(() => {
        let tl = gsap.timeline();
        
        tl.to(".box", {
            scale: 0,
            y: 60,
            duration: 1,
            rotate: 400,
            // delay:0.5,
            stagger: {
                amount: 3,
                from: "center"
            },
        });
        tl.to(".containerr",{
            scale:0,
            duration:1
        })
        tl.to(".wrapper", {
            opacity: 0,
            display:"none"
        })
    });
    return (
        <>
            <div className='wrapper absolute top-0 left-0 w-screen h-screen bg-[#000b1c] flex items-center justify-center'>
                <div className='containerr w-24 grid grid-cols-3 gap-1 rotate-45'>
                    {new Array(9).fill().map(() => (
                        <div className="box bg-[#52da7f] w-7 h-7"></div>
                    ))}
                </div>
            </div>
        </>
    )
}
