import React from 'react'

export default function GameDEv() {
    
  return (
    <>
    <div className='flex mx-auto px-8 text-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-5xl py-4 font-bold'>Game Development</h1>
    </div>

    <div className="py-12 flex justify-center flex-wrap">

        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
            <img src='https://www.softechgoal.com/gamedevport1.png' className='shadow-lg' alt="#" />
        </div>

        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
            <img src='https://www.softechgoal.com/gamedevport2.png' className='shadow-lg' alt="#" />
        </div>

        <div className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
            <img src='https://www.softechgoal.com/gamedevport3.png' className='shadow-lg' alt="#" />
        </div>

    </div>
</>

  )
}
