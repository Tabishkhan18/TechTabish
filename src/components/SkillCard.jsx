import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='flex items-center md:me-14 md:mb-8 gap-2 md:w-52 w-1/2 h-20 grayscale hover:grayscale-0 text-neutral-500 hover:text-black  transition ease-in-out duration-200 cursor-pointer'>
      <div className="image">
        <img src={props.image} alt="" className='w-14 rounded-md'/>
      </div>
      <div className="skill md:text-xl text-sm font-semibold uppercase">
        {props.skill}
      </div>
    </div>
  )
}

export default SkillCard
