import React from 'react'
import { Link } from 'react-scroll'
import Menu from './Menu';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar z-10 fixed top-0 right-0 left-0 flex justify-between items-center md:px-20 px-10 bg-neutral-800 h-16">
                <div className="logo font-sans font-semibold text-xl text-white">
                    TechTabish
                </div>
                <div className="menu hidden md:flex">
                    <ul className='flex gap-5'>
                        <li className='font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-800  hover:border-white cursor-pointer'><Link to='home' spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                        <li className='font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-800  hover:border-white cursor-pointer'><Link to='skills' spy={true} smooth={true} offset={-100} duration={500}>Skills</Link></li>
                        <li className='font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-800  hover:border-white cursor-pointer'><Link to='projects' spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                        <li className='font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-800  hover:border-white cursor-pointer'><Link to='about' spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                        <li className='font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-800  hover:border-white cursor-pointer'><Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                    </ul>
                </div>
                <button className="md:hidden"> <Menu /></button>
            </nav>
        </div>
    )
}

export default Navbar
