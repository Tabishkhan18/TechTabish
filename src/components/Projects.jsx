import React from 'react'

const Projects = () => {
    return (
        <div id='projects'>
            <div className="project bg-neutral-50 lg:py-36 py-20">
                <h1 className="heading  text-center lg:pb-36 pb-20 uppercase text-neutral-800 font-semibold text-xl">
                    My Projects
                </h1>

                <div className="projectCards flex flex-col lg:gap-36 gap-10 lg:px-36 px-5">

                    <div className='projectcard rounded-xl bg-neutral-800'>
                        <div className='flex lg:flex-row flex-col items-center justify-around'>
                            <div className="skills p-5 lg:ps-5 lg:w-1/4">
                                <h1 className="heading pb-5 uppercase text-white font-semibold text-xl">
                                    Spotify Clone
                                </h1>
                                <h1 className="uppercase text-neutral-300 leading-relaxed text-lg">
                                    Tech used: Html, Css, JavaScript, React and Tailwind
                                </h1>
                                <h1 className="pt-5 text-neutral-500 leading-relaxed text-lg">
                                    This is a Spotify clone website. Created with responsive web designing techniques.
                                </h1>
                                <div className="buttons flex gap-5 py-10">
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-white border border-white hover:text-neutral-800 hover:bg-white rounded-full'><a href="https://github.com/Tabishkhan18/SpotifyClone">Github</a></button>
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><a href="https://tabishkhan18.github.io/SpotifyClone">Live</a></button>
                                </div>
                            </div>
                            <div className="aboutimage lg:py-10 lg:pe-5">
                                <img src="./spotify.png" alt="image" className='w-[50rem] rounded-lg' />
                            </div>
                        </div>
                    </div>

                    <div className='projectcard rounded-xl bg-neutral-800'>
                        <div className='flex lg:flex-row flex-col-reverse items-center justify-around'>
                            <div className="aboutimage lg:py-10 md::pe-5">
                                <img src="./todo.png" alt="image" className='w-[50rem] rounded-lg' />
                            </div>
                            <div className="skills p-5 lg:ps-5 lg:w-1/4">
                                <h1 className="heading pb-5 uppercase text-white font-semibold text-xl">
                                    Todo Manager
                                </h1>
                                <h1 className="uppercase text-neutral-300 leading-relaxed text-lg">
                                    Tech used: Html, Css, JavaScript, React and Tailwind
                                </h1>
                                <h1 className="pt-5 text-neutral-500 leading-relaxed text-lg">
                                    A Todo Manager is used to Create, Edit and Delete multiple tasks.
                                </h1>
                                <div className="buttons flex gap-5 py-10">
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-white border border-white hover:text-neutral-800 hover:bg-white rounded-full'><a href="https://github.com/Tabishkhan18/ToDo-Manager">Github</a></button>
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><a href="https://tabishkhan18.github.io/ToDo-Manager">Live</a></button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='projectcard rounded-xl bg-neutral-800'>
                        <div className='flex lg:flex-row flex-col items-center justify-around'>
                            <div className="skills p-5 lg:ps-5 lg:w-1/4">
                                <h1 className="heading pb-5 uppercase text-white font-semibold text-xl">
                                    Calculator
                                </h1>
                                <h1 className="uppercase text-neutral-300 leading-relaxed text-lg">
                                    Tech used: Html, JavaScript and Tailwind
                                </h1>
                                <h1 className="pt-5 text-neutral-500 leading-relaxed text-lg">
                                    A clean user friendly UI like iOS Calculator. Created using basic HTML, Tailwind and JavaScript.
                                </h1>
                                <div className="buttons flex gap-5 py-10">
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-white border border-white hover:text-neutral-800 hover:bg-white rounded-full'><a href="https://github.com/Tabishkhan18/Calculator">Github</a></button>
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><a href="https://tabishkhan18.github.io/Calculator">Live</a></button>
                                </div>
                            </div>
                            <div className="aboutimage lg:py-10 lg:pe-5">
                                <img src="./calculator.png" alt="image" className='w-[50rem] rounded-lg' />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Projects
