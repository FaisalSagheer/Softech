



import React from 'react'
import WebDev from './WebDev'
import GraphicDes from './GraphicDes'
import AppDev from './AppDev'
import GraphicsD from './GraphicsD'
import GameDEv from './GameDEv'
import Videography from './videography'

export default function Portfolio() {
    return (
        <>
            <div className="flex justify-evenly flex-col bg-[url('./assets/white-concrete-wall-textures.jpg')] Color" id='Portfolio'>
               
                {/* <div className='flex mx-auto px-8 pt-8 text-center'>
                    <h1 className='text-xl sm:text-2xl lg:text-5xl py-4 font-bold'>Our Portfolio</h1>
                </div> */}
                <WebDev />
                <GraphicDes />
                <GraphicsD/>
                <Videography/>
                <AppDev/>
                <GameDEv/>
            </div>
        </>
    )
}



