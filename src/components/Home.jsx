import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'

const headings = ['Full Stack Developer', 'Web Designer', 'Software Engineer'];
const Home = () => {
    const [currentHeading, setCurrentHeading] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
        const handleType = () => {
            const currentFullHeading = headings[currentIndex];
            setCurrentHeading(prev => isDeleting ? currentFullHeading.substring(0, prev.length - 1) : currentFullHeading.substring(0, prev.length + 1));

            if (!isDeleting && currentHeading === currentFullHeading) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentHeading === '') {
                setIsDeleting(false);
                setCurrentIndex((currentIndex + 1) % headings.length);
            }
            setSpeed(isDeleting ? 30 : 150);
        };

        const typingTimer = setTimeout(handleType, speed);

        return () => clearTimeout(typingTimer);
    }, [currentHeading, isDeleting, currentIndex, speed]);

    return (
        <div id='home'>
            <div className="home flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:h-lvh px-10 md:px-52 md:py-20 py-32 bg-neutral-800">
                <div className="homeInfo font-sans">
                    <div className="headings my-10">
                        <h4 className='text-white md:text-2xl text-sm  uppercase '>Hello, I'm</h4>
                        <h1 className='text-white md:text-8xl text-5xl uppercase '>Tabish Khan</h1>
                        <h3 className='text-white md:text-4xl text-xl uppercase'>{currentHeading}<span className="blinking-cursor  md:text-5xl text-3xl">|</span></h3>
                    </div>
                    <div className="buttons flex gap-5 md:gap-10">
                        <button className='font-semibold transition ease-in-out duration-300 md:px-5 px-3 py-2 text-white border border-white hover:text-neutral-800 hover:bg-white rounded-full '>Download Resume</button>
                        <button className='font-semibold transition ease-in-out duration-300 md:px-5 px-3 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact Info</Link></button>
                    </div>
                </div>
                <div className="homeImage w-72 md:w-96">
                    <img src="public/tabish.jpg" alt="" className='rounded-full'/>
                </div>
            </div>
        </div>
    );
};

export default Home;
