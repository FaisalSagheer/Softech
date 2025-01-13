import React from 'react'

export default function AboutUs() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center text-white pt-5 lg:py-10 lg:px-20 lg:mt-20 bg-about" id="AboutUs">
        <div className='flex flex-col max-w-7xl mx-auto px-8 lg:w-3/6'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl py-8 lg:py-10 font-bold text-center lg:text-left'>About Us</h1>
          <p className='text-sm sm:text-xs lg:text-lg mt-2 leading-5 tracking-wide font-extralight'>At Softechgoal, we are more than just a digital marketing agency; we are your partners in success. Founded on the principles of innovation, integrity, and excellence, we specialize in transforming ideas into reality through technology and creativity. Our mission is to empower businesses to thrive in the digital landscape. We strive to deliver customized solutions that drive growth, enhance online presence, and foster meaningful connections with your audience.
          </p>
        </div>
        <div className="image_about -mt-6 lg:-mt-0 lg:pt-20">
          <img src="https://www.softechgoal.com/About%20us%20Img.png" className='max-lg:w-screen' alt="laptop img" />
        </div>
      </div>
    </>
  )
}
