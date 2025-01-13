import React from 'react'
import { serviceItems } from '../constants'

export default function Services() {
  return (
    <>
      <div className="flex justify-evenly flex-col text-white py-10 px-20 bg-services" id='Services'>
        <div className='flex mx-auto lg:px-8 pt-8 text-center'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl py-4 font-bold'>Our Services</h1>
        </div>
        <div className="py-12 flex flex-wrap justify-center">
        {
          serviceItems.map((item, index) => (
              <div key={index} className="max-w-80 h-72 my-5 mx-0 lg:mx-5 p-0 lg:p-5 rounded overflow-hidden shadow-lg bg-white text-[#1f2b37] text-center flex flex-col justify-center">
                <div className='text-7xl'>{item.icon}</div>
                <div className="px-6 pt-10">
                  <div className="font-bold text-lg sm:text-lg lg:text-2xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-sm lg:text-base">
                    {item.paragrapgh}
                  </p>
                </div>
              </div>
          ))
        }
        </div>

      </div>
    </>
  )
}
