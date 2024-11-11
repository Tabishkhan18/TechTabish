import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <div className='bg-neutral-50 flex justify-between md:p-20 p-7' id='skills'>
            <div className="skillheading hidden lg:flex w-1/2">
                <img src="./skills4.jpg" alt="image" className='w-[40rem] rounded-3xl grayscale-[50%]' />
            </div>
            <div className="skills lg:ps-28 lg:w-1/2">
                <h1 className="heading py-10 font-semibold text-xl">
                    MY SKILLS
                </h1>
                <div className="skillcards flex flex-wrap justify-between">
                    <SkillCard skill="HTML" image="./html.png" />
                    <SkillCard skill="CSS" image="./css.png" />
                    <SkillCard skill="JavaScript" image="./js.png" />
                    <SkillCard skill="React" image="./react.png" />
                    <SkillCard skill="Tailwind" image="./tailwind.png" />
                    <SkillCard skill="Bootstrap" image="./bootstrap.png" />
                    <SkillCard skill="Node.js" image="./node.png" />
                    <SkillCard skill="Express.js" image="./express.png" />
                    <SkillCard skill="MongoDB" image="./mongo.png" />
                    <SkillCard skill="Git" image="./git.png" />
                    <SkillCard skill="GitHub" image="./github.png" />
                </div>
                <h1 className="pt-10 uppercase font-semibold md:text-md text-sm">
                    Also some bunch of ordinary skills:
                </h1>
                <h1 className="py-3 md:pe-20 md:leading-loose text-neutral-500 uppercase font-semibold md:text-xl text-md">
                    Styled-components, figma, canva, ms-excel, ms-word. 
                </h1>
                <button className='font-semibold mt-5 transition ease-in-out duration-300 md:px-5 px-3 py-2 text-neutral-800 border border-neutral-800 bg-white hover:text-white hover:bg-neutral-800 hover:border-white rounded-full'><a href="./Tabish Khan Resume.pdf" download>Get My Resume</a></button>
                    
            </div>
        </div>
    )
}

export default Skills
