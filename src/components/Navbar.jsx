import React from 'react'
import { HiMiniCodeBracket } from "react-icons/hi2";
import { Link } from 'react-scroll'
import Menu from './Menu';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar z-10 fixed top-0 right-0 left-0 flex justify-between items-center md:px-20 px-10 bg-neutral-900 h-16">
                <div className="logo flex gap-1 items-center font-sans font-semibold text-xl text-white">
                    <HiMiniCodeBracket style={{ fontSize: '1.75rem', fontWeight: 'bold' }} />TechTabish
                </div>
                <div className="menu hidden md:flex">
                    <ul className='flex gap-5'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >
                            <li className='text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-900  hover:border-neutral-500 cursor-pointer'>
                                Home
                            </li>
                        </Link>
                        <Link to='skills' spy={true} smooth={true} offset={-100} duration={500}>
                            <li className='text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-900  hover:border-neutral-500 cursor-pointer'>
                                Skills
                            </li>
                        </Link>
                        <Link to='projects' spy={true} smooth={true} offset={-100} duration={500}>
                            <li className='text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-900  hover:border-neutral-500 cursor-pointer'>
                                Projects
                            </li>
                        </Link>
                        <Link to='work' spy={true} smooth={true} offset={-100} duration={500}>
                            <li className='text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-900  hover:border-neutral-500 cursor-pointer'>
                                Work
                            </li>
                        </Link>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={500}>
                            <li className='text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-900  hover:border-neutral-500 cursor-pointer'>
                                About
                            </li>
                        </Link>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                            <li className='text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-neutral-900  hover:border-neutral-500 cursor-pointer'>
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <button className="md:hidden"> <Menu /></button>
            </nav>
        </div>
    )
}

export default Navbar
