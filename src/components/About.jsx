import React from 'react'

const About = () => {
  return (
    <div className='about bg-neutral-900 md:px-28 px-10 md:py-40 py-10' id='about'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className="skills md:w-2/3">
          <h1 className="heading uppercase text-white font-semibold text-xl pb-10">
            My Story
          </h1>
          <h1 className="pt-5 text-neutral-500 md:pe-52 leading-relaxed text-lg">
            Hello there, My name is Tabish Khan, I am 22 years old. A passionate full stack web developer and a graphic designer. I live in small town Shahabad, district Hardoi, Uttar Pradesh, India. Completed Bachelors of Computer Applications, in 2024, from MJPR University.
          </h1>
          <h1 className="pt-5 text-neutral-500 md:pe-52 leading-relaxed text-lg">
            I have a strong knowledge of Front-End, specially in web designing and dynamic components to increase user experience. Along side i have expertise in JavaScript and modern framework and libraries like Node.js and React.js.
          </h1>
        </div>
        <div className="aboutimage md:w-1/3 py-20 md:py-0" >
          <img src="./tabish3.jpg" alt="image" className='w-96 grayscale hover:grayscale-[25%] hover:scale-110 rounded-3xl transition ease-in-out duration-300 ' />
        </div>
      </div>
      <h1 className="md:pt-32 text-center leading-loose text-white font-thin text-xl">
        &ldquo;Coding is like humor. When you have to explain it, it's bad.&rdquo; <span className='text-neutral-500'>-&lt;/Cory House &gt;</span>
      </h1>
    </div>
  )
}

export default About
