import React from 'react'
import { GameDev } from '../../constants'

export default function GameDEv() {

    return (
        <>
            <div className='flex flex-col mx-auto px-8 text-center'>
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl py-0 lg:py-4 font-bold text-[#000b1c]'>Game Development</h1>
                </div>
                <div className="line bg-about h-2 max-w-80 border mt-2 rounded mx-20"></div>
            </div>
            <div className="py-12 flex justify-center flex-wrap">
                {GameDev.map((item, index) =>(
                        <div key={index} className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center" >
                            <img src={item.src} loading='lazy' className='shadow-lg' alt={item.alt} />
                        </div>
                        ))}
            </div >
        </>

    )
}
