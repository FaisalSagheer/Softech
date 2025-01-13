import React from 'react'

export default function AppDev() {
    return (

        <>
            <div className='flex flex-col mx-auto px-8 text-center'>
                <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl py-0 lg:py-4 font-bold text-[#000b1c]'>App Development</h1>
                </div>
                <div className="line bg-about h-2 max-w-80 border mt-2 rounded mx-14"></div>
            </div>

            <div className="py-12 flex justify-center flex-wrap">

                <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
                    <img src='https://www.softechgoal.com/appdevport1.png' loading="lazy" className='shadow-lg' alt="#" />
                </div>


                <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
                    <img src='https://www.softechgoal.com/appdevport3.png' loading="lazy" className='shadow-lg' alt="#" />
                </div>

                <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
                    <img src='https://www.softechgoal.com/appdevport2.png' loading="lazy" className='shadow-lg' alt="#" />
                </div>

            </div>
        </>
    )
}
