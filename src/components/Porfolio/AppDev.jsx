import React from 'react'

export default function AppDev() {
    return (

        <>
            <div className='flex mx-auto px-8 text-center'>
                <h1 className='text-2xl sm:text-3xl lg:text-5xl py-0 lg:py-4 font-bold'>App Development</h1>
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
