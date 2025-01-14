import React from 'react'
import Video from '../../assets/Videos/3DGraphics1.mp4';
import art1 from '../../assets/2D Arts/2danimationport1.jpg';
import art2 from '../../assets/2D Arts/2danimationport3.jpg';


export default function GraphicsD() {
  return (
    <>
    <div className='flex flex-col mx-auto px-8 text-center'>
        <div>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl py-0 lg:py-4 font-bold text-[#000b1c]'>2D/3D Graphics</h1>
        </div>
    <div className="line bg-about h-2 max-w-80 border mt-2 rounded mx-14"></div>
    </div>

    <div className="py-12 flex justify-center flex-wrap">

        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
          <video autoPlay loop muted>
            <source src={Video} loading="lazy"/>
          </video>
        </div>
        
        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
            <img src={art2} loading="lazy" className='shadow-lg' alt="#" />
        </div>

        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
            <img src={art1} loading="lazy" className='shadow-lg' alt="#" />
        </div>


    </div>
</>

  )
}
