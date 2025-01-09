import React from 'react'

export default function Services() {
  return (
    <>
      <div className="flex justify-evenly flex-col text-white py-10 px-20 bg-services" id='Services'>
        <div className='flex mx-auto px-8 pt-8 text-center'>
          <h1 className='text-xl sm:text-2xl lg:text-5xl py-4 font-bold'>Our Services</h1>
        </div>
        <div className="py-12 flex justify-center flex-wrap">
          
          <div className="max-w-80 h-72 m-5 p-0 lg:p-5 rounded overflow-hidden shadow-lg bg-white text-[#1f2b37] text-center flex flex-col justify-center">
            <div className='text-7xl'>🌐</div>
            <div className="px-6 pt-10">
                <div className="font-bold text-lg sm:text-lg lg:text-2xl mb-2">Web Development</div>
                <p className="text-gray-700 text-sm lg:text-base">
                Custom web development solutions tailored to your business needs.
                </p>
              </div>
          </div>
          
          <div className="max-w-80 h-72 m-5 p-0 lg:p-5 rounded overflow-hidden shadow-lg bg-white text-[#1f2b37] text-center flex flex-col justify-center">
            <div className="text-7xl">📱</div>
            <div className="px-6 pt-10">
                <div className="font-bold text-lg sm:text-lg lg:text-2xl mb-2">App Development</div>
                <p className="text-gray-700 text-sm lg:text-base">
                Innovative mobile app development for iOS and Android platforms.
                </p>
              </div>
          </div>

          <div className="max-w-80 h-72 m-5 p-0 lg:p-5 rounded overflow-hidden shadow-lg bg-white text-[#1f2b37] text-center flex flex-col justify-center">
            <div className='text-7xl'>🎮</div>
            <div className="px-6 pt-10">
                <div className="font-bold text-lg sm:text-lg lg:text-2xl mb-2">Game Development</div>
                <p className="text-gray-700 text-sm lg:text-base">
                Engaging game development services for all platforms.
                </p>
              </div>
          </div>

          <div className="max-w-80 h-72 m-5 p-0 lg:p-5 rounded overflow-hidden shadow-lg bg-white text-[#1f2b37] text-center flex flex-col justify-center">
            <div className='text-7xl'>🔍</div>
            <div className="px-6 pt-10">
                <div className="font-bold text-lg sm:text-lg lg:text-2xl mb-2">SEO</div>
                <p className="text-gray-700 text-sm lg:text-base">
                Expert SEO strategies to boost your online visibility.
                </p>
              </div>
          </div>

          <div className="max-w-80 h-72 m-5 p-0 lg:p-5 rounded overflow-hidden shadow-lg bg-white text-[#1f2b37] text-center flex flex-col justify-center">
            <div className='text-7xl'>📢</div>
            <div className="px-6 pt-10">
                <div className="font-bold text-lg sm:text-lg lg:text-2xl mb-2">Social Media Marketing</div>
                <p className="text-gray-700 text-sm lg:text-base">
                Dynamic social media campaigns to grow your brand.
                </p>
              </div>
          </div>

          <div className="max-w-80 h-72 m-5 p-0 lg:p-5 rounded overflow-hidden shadow-lg bg-white text-[#1f2b37] text-center flex flex-col justify-center">
            <div className='text-7xl'>🖌️</div>
            <div className="px-6 pt-10">
                <div className="font-bold text-lg sm:text-lg lg:text-2xl mb-2">2D/3D Graphics</div>
                <p className="text-gray-700 text-sm lg:text-base">
                High-quality 2D and 3D graphics to enhance your projects.
                </p>
              </div>
          </div>

          
        </div>
      </div>
    </>
  )
}
