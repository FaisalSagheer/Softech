import React from 'react'
import Video from '../../assets/Videos/3DGraphics1.mp4';
// import video2 from '../assets/Videos/videography2.mp4';


export default function GraphicsD() {
  return (
    <>
    <div className='flex mx-auto px-8 text-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-5xl py-4 font-bold'>2D/3D Graphics</h1>
    </div>

    <div className="py-12 flex justify-center flex-wrap">

        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
          <video autoPlay loop muted>
            <source src={Video} loading="lazy"/>
          </video>
        </div>
        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
            <img src='https://www.softechgoal.com/2danimationport3.jpg' loading="lazy" className='shadow-lg' alt="#" />
        </div>

        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
            <img src='https://www.softechgoal.com/2danimationport1.jpg' loading="lazy" className='shadow-lg' alt="#" />
        </div>


    </div>
</>

  )
}
