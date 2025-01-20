import React from 'react'

const WorkCard = (props) => {
  return (
    <div>
      <div className="workEx cursor-pointer flex items-center transition-all ease-in-out duration-300 hover:bg-white text-white hover:text-neutral-900 py-5 border-y border-neutral-700">
        <div className="box flex justify-start ps-5 lg:ps-20 lg:gap-28 items-center w-1/3">
          <div className="duration">
            <div className="year lg:text-xl text-base text-neutral-500">
              {props.date}
            </div>
            <div className="time lg:text-base text-sm text-neutral-500">
              {props.time}
            </div>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col ps-5 lg:ps-0 justify-start items-start lg:items-center text-xl lg:gap-28 font-mono w-2/3">
          <div className="company lg:w-1/3 text-base lg:text-xl">
            {props.company}
          </div>
          <h1 className='role lg:w-2/3 text-base lg:text-xl'>{props.role}</h1>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
