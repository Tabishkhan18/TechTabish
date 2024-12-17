import React from 'react'

const Projects = () => {
    return (
        <div id='projects'>
            <div className="project bg-neutral-50 lg:py-36 py-20">
                <h1 className="heading  text-center lg:pb-36 pb-20 uppercase text-neutral-800 font-semibold text-xl">
                    Projects
                </h1>

                <div className="projectCards flex flex-col lg:gap-36 gap-10 lg:px-36 px-5">

                    <div className='projectcard rounded-xl bg-neutral-800'>
                        <div className='flex lg:flex-row flex-col lg:items-center justify-around'>
                            <div className="skills p-10 lg:ps-5 lg:w-1/4">
                                <h1 className="heading pb-5 uppercase text-white font-semibold text-xl">
                                    Spotify Clone
                                </h1>
                                <h1 className="uppercase text-neutral-300 leading-relaxed text-lg">
                                    Html, Css, JavaScript, React and Tailwind
                                </h1>
                                <h1 className="pt-5 text-neutral-500 leading-relaxed text-sm">
                                    A fully responsive Spotify clone website built with React and styled using Tailwind CSS. This design closely replicates the original Spotify interface, showcasing advanced web design techniques for a seamless and visually appealing experience.
                                </h1>
                                <div className="buttons flex gap-5 py-10">
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-white border border-white hover:text-neutral-800 hover:bg-white rounded-full'><a href="https://github.com/Tabishkhan18/SpotifyClone">Github</a></button>
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><a href="https://tabishkhan18.github.io/SpotifyClone">Live</a></button>
                                </div>
                            </div>
                            <div className="aboutimage lg:py-10 lg:pe-5">
                                <img src="./spotify.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                            </div>
                        </div>
                    </div>

                    <div className='projectcard rounded-xl bg-neutral-800'>
                        <div className='flex lg:flex-row flex-col-reverse lg:items-center justify-around'>
                            <div className="aboutimage lg:py-10 lg:pe-5">
                                <img src="./todo.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                            </div>
                            <div className="skills p-10 lg:ps-5 lg:w-1/4">
                                <h1 className="heading pb-5 uppercase text-white font-semibold text-xl">
                                    Todo Manager
                                </h1>
                                <h1 className="uppercase text-neutral-300 leading-relaxed text-lg">
                                    Html, Css, JavaScript, React and Tailwind
                                </h1>
                                <h1 className="pt-5 text-neutral-500 leading-relaxed text-sm">
                                    A responsive Todo List app built with React and Tailwind CSS. It allows users to create, edit, and delete tasks, with offline support via local storage, ensuring todos are saved and reappear when the app is reopened.
                                </h1>
                                <div className="buttons flex gap-5 py-10">
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-white border border-white hover:text-neutral-800 hover:bg-white rounded-full'><a href="https://github.com/Tabishkhan18/ToDo-Manager">Github</a></button>
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><a href="https://tabishkhan18.github.io/ToDo-Manager">Live</a></button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='projectcard rounded-xl bg-neutral-800'>
                        <div className='flex lg:flex-row flex-col lg:items-center justify-around'>
                            <div className="skills p-10 lg:ps-5 lg:w-1/4">
                                <h1 className="heading pb-5 uppercase text-white font-semibold text-xl">
                                    Triangle Calculator
                                </h1>
                                <h1 className="uppercase text-neutral-300 leading-relaxed text-lg">
                                    Html, JavaScript and Tailwind
                                </h1>
                                <h1 className="pt-5 text-neutral-500 leading-relaxed text-sm">
                                    This website enables users to create triangles by providing inputs and calculates properties such as area, perimeter, and semi-perimeter. It uses JavaScript events and canvas funtions like drawing lines and calculate angles.
                                </h1>
                                <div className="buttons flex gap-5 py-10">
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-white border border-white hover:text-neutral-800 hover:bg-white rounded-full'><a href="https://github.com/Tabishkhan18/Triangle-Calculator">Github</a></button>
                                    <button className='font-semibold transition ease-in-out duration-300 px-5 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><a href="https://tabishkhan18.github.io/Triangle-Calculator">Live</a></button>
                                </div>
                            </div>
                            <div className="aboutimage lg:py-10 lg:pe-5">
                                <img src="./triangle-calculator.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Projects
