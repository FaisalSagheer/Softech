



import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { navItems } from '../constants/index';
import { Link } from 'react-scroll';



function Navbar() {

    const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!MobileDrawerOpen)
    }
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    
    return (
        <nav className={`sticky top-0 z-50 border-b
    border-neutral-700/80 text-white transition ease-in delay-[.3s] ${color}?'bg-black':'backdrop-blur-lg'`}>
            <div className="container lg:px-9 mx-auto relative text-sm">
                <div className="flex justify-between items-center -mb-5">
                    <Link smooth={true}
                        offset={-120} duration={500} to="Hero">
                        <img src="https://www.softechgoal.com/Logo.png" className='w-40' />
                    </Link>
                    <ul className='hidden lg:flex ml-14 space-x-12 font-medium'>
                        {
                            navItems.map((item, index) => (
                                <li key={index}>
                                    <Link aria-current="page"
                                        smooth={true}
                                        offset={item.offset}
                                        duration={item.duration}
                                        to={item.to}
                                        className='cursor-pointer'
                                    >{item.prop}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="lg:hidden md:flex justify-end pr-5 pt-2">
                        <button onClick={toggleNavbar}>
                            {MobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {
                    MobileDrawerOpen && (
                        <div className="fixed right-0 flex flex-col justify-center items-center lg:hidden
                        w-full p-5 text-center bg-[#000b1c]">
                            <ul>
                                {
                                    navItems.map((item, index) => (
                                        <li key={index} className='py-2'>
                                            <Link aria-current="page"
                                                smooth={true}
                                                offset={item.offset}
                                                duration={item.duration}
                                                to={item.to}
                                            >{item.prop}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar;
