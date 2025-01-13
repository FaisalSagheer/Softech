


import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import "../App.css"
import { Link } from "react-scroll";



function Hero() {

    const style = {
        lineHeight: '1.3',
    };



    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    return (
        <>
            {init && <Particles options={particlesOptions} />}
       <div className='max-w-7xl mx-auto pt-12 lg:pt-20 px-8' id="Hero">
 
            <div className='flex flex-col items-center mt-0 lg:mt-12 text-white lg:px-10 py-0 lg:py-8'>
                <h1 style={style} className='capitalize text-2xl sm:text-3xl lg:text-6xl text-center tracking-wider font-semibold bg-[#000b1c]'>
                Transform your online 
                    <span className='text-[#77f2a1] bg-clip-text'>
                        {" "}
                        presence 
                    </span>{" "}
                    with our expert services. Let us elevate your brand and drive results!
                </h1>
                {/* <h6 className='mt-3 text-sm lg:text-lg'>Frontend Developer</h6> */}
                <div className="flex justify-center py-8 lg:py-0 lg:my-10">
                    <Link to="Email" smooth={true} offset={-100}
                        className='bg-[#77f2a1] py-3 px-8 mx-3 rounded-md text-sm lg:text-lg text-[#000b1c] font-bold'>
                        Contact Us
                    </Link>
                </div>
                {/* <div className="flex justify-center mt-4 bg-[#111]">
                    <img src={Tech} alt="Tech" />
                </div> */}
            </div>
      </div>

        </>
    )
}

export default Hero;