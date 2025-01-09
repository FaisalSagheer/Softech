

import React from 'react';
import { footer1, footer2 } from '../constants';
import { Link } from 'react-scroll';

export default function Footer() {
    return (
        <>
            <div className='bg-[#000b1c] text-white list-none'>
                <div className="flex flex-wrap items-center lg:justify-between justify-center border-b-[.20px] border-b-white py-5 text-lg sm:text-lg lg:text-lg">
                    <div className='flex flex-wrap lg:justify-between justify-center'>
                        {
                            footer1.map((item, index) => (
                                <li className='px-5 pb-2 lg:last:pt-0' key={index}>
                                    <a href={item.href} target={item.target}><i className={item.icon}></i>{item.No}</a>
                                </li>
                            ))
                        }
                    </div>

                    <div className='flex pt-4 lg:pt-0'>

                        {
                            footer2.map((item, index) => (
                                <li className='px-5' key={index}>
                                    <a href={item.href} target={item.target}><i className={item.icon}></i>{item.No}</a>
                                </li>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-wrap items-center lg:justify-between justify-center'>
                    <div>
                        <Link smooth={true}
                            offset={-120} duration={500} to="Hero" className='flex items-center'>
                            <img src="https://www.softechgoal.com/Logo.png" className='h-32'/>
                            <p className='text-sm sm:text-sm lg:text-lg'>© 2024 Softechgoal. All rights reserved.</p>
                        </Link>
                    </div>
                    <div className='px-5'>
                        <h5 className='underline'>Privacy Policy</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
