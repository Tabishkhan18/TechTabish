import React, { useState } from 'react'
import { Link } from 'react-scroll'

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
        className={`fixed top-16 right-0 w-[250px] h-full bg-neutral-800 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 text-black">
          <ul className="mt-4">
            <li className="my-10 font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 cursor-pointer"><Link to='home' spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
            <li className="my-10 font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 cursor-pointer"><Link to='skills' spy={true} smooth={true} offset={-100} duration={500} >Skills</Link></li>
            <li className="my-10 font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 cursor-pointer"><Link to='projects' spy={true} smooth={true} offset={-100} duration={500} >Projects</Link></li>
            <li className="my-10 font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 cursor-pointer"><Link to='about' spy={true} smooth={true} offset={-100} duration={500} >About</Link></li>
            <li className="my-10 font-semibold text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 cursor-pointer"><Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >Contact</Link></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Menu
