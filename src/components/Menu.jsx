import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { HiMiniCodeBracket } from "react-icons/hi2";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="flex flex-col gap-2 w-8 cursor-pointer" onClick={toggleMenu}>
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-neutral-400 duration-500 ${isOpen ? 'rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]' : ''
            }`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-full bg-neutral-400 duration-500 ${isOpen ? '-rotate-45' : ''
            }`}
        ></div>
        <div
          className={`rounded-2xl h-[3px] w-1/2 bg-neutral-400 duration-500 place-self-end ${isOpen ? 'rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]' : ''
            }`}
        ></div>
      </label>

      <div
        className={`fixed top-16 right-0 w-3/4 h-full bg-neutral-900 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-black">
          <ul className="mt-4 flex flex-col items-center">
            <li className="my-2 w-1/2 text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 rounded-full px-2 py-2 border border-neutral-900  hover:border-neutral-500 cursor-pointer">
              <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >
                Home
              </Link>
            </li>
            <li className="my-2 w-1/2 text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 rounded-full px-2 py-2 border border-neutral-900  hover:border-neutral-500 cursor-pointer">
              <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} >
                Skills
              </Link>
            </li>
            <li className="my-2 w-1/2 text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 rounded-full px-2 py-2 border border-neutral-900  hover:border-neutral-500 cursor-pointer">
              <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} >
                Projects
              </Link>
            </li>
            <li className="my-2 w-1/2 text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 rounded-full px-2 py-2 border border-neutral-900  hover:border-neutral-500 cursor-pointer">
              <Link to='work' spy={true} smooth={true} offset={-100} duration={500} >
                Work
              </Link>
            </li>
            <li className="my-2 w-1/2 text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 rounded-full px-2 py-2 border border-neutral-900  hover:border-neutral-500 cursor-pointer">
              <Link to='about' spy={true} smooth={true} offset={-100} duration={500} >
                About
              </Link>
            </li>
            <li className="my-2 w-1/2 text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 rounded-full px-2 py-2 border border-neutral-900  hover:border-neutral-500 cursor-pointer">
              <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <h1 className='text-neutral-500 mt-60 text-xs font-semibold flex justify-center gap-1'>&copy;<HiMiniCodeBracket style={{ fontSize: '1rem', fontWeight: 'bold' }} />TechTabish 2025.</h1>
      </div>

    </div>
  );
};

export default Menu
