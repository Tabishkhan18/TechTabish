import React from 'react'

const About = () => {
  return (
    <div className='about bg-neutral-900 lg:px-28 px-10 lg:py-40 py-10' id='about'>
      <div className='flex flex-col lg:flex-row items-center'>
        <div className="skills lg:w-2/3">
          <h1 className="heading uppercase text-white font-semibold text-xl pb-10">
            My Story
          </h1>
          <h1 className="pt-5 font-thin text-neutral-500 lg:pe-52 leading-relaxed text-lg">
            Hello there, My name is Tabish Khan, 22 years old. A passionate full stack web developer and a graphic designer. I belong from a town in Uttar Pradesh. Completed my bachelors degree of computer applications in 2024, from MJPR University, bareilly.
          </h1>
          <h1 className="pt-5 font-thin text-neutral-500 lg:pe-52 leading-relaxed text-lg">
            I hold a strong understanding of Frontend, specially in web designing and dynamic components in order to enhance a user experience.
            Alongside I have expertise in JavaScript and Modern frameworks like Node.js & React.js.
          </h1>
        </div>
        <div className="aboutimage lg:w-1/3 py-20 lg:py-0" >
          <img src="./tabish3.jpg" alt="image" className='w-96 grayscale hover:grayscale-[25%] hover:scale-110 rounded-3xl transition ease-in-out duration-300 ' />
        </div>
      </div>
      <h1 className="lg:pt-32 text-center leading-loose text-white font-thin text-xl">
        &ldquo;Coding is like humor. When you have to explain it, it's bad.&rdquo; <span className='text-neutral-500'>-&lt;/Cory House &gt;</span>
      </h1>
    </div>
  )
}

export default About
