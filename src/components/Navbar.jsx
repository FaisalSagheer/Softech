import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { navItems } from '../constants/index';
import { Link } from 'react-scroll';
import Logo from '../assets/Logo.png';
function Navbar() {
    const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [color, setColor] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!MobileDrawerOpen);
    };

    const changeColor = () => {
        setColor(window.scrollY >= 500);
    };
    useEffect(() => {
        window.addEventListener('scroll', changeColor);

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80 text-white ${color ? 'bg-[#000b1c]' : ''}`}>
            <div className="container lg:px-9 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <Link smooth={true} offset={-120} duration={500} to="Hero">
                        <img src={Logo} alt="Logo" className="w-36" />
                    </Link>
                    <ul className="hidden lg:flex ml-14 space-x-12 font-medium items-center">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    aria-current="page"
                                    smooth={true}
                                    offset={item.offset}
                                    duration={item.duration}
                                    to={item.to}
                                    className="cursor-pointer"
                                >
                                    {item.prop}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex justify-end pr-5 pt-2">
                        <button onClick={toggleNavbar} aria-label="Toggle navigation">
                            {MobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {MobileDrawerOpen && (
                    <div className="fixed right-0 flex flex-col justify-center items-center lg:hidden w-full p-5 text-center bg-[#000b1c]">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-2">
                                    <Link
                                        aria-current="page"
                                        smooth={true}
                                        offset={item.offset}
                                        duration={item.duration}
                                        to={item.to}
                                    >
                                        {item.prop}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
