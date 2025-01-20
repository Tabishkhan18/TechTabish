import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {

  return (
    <div className="bg-neutral-900 flex flex-col justify-center" id="work">

      <h1 className="heading text-center lg:py-20 py-10 uppercase text-white font-semibold text-xl">
        Work
      </h1>
      <div className="workCards py-10">
        <WorkCard date="June - Aug 2024" time="2 months" company="iLearnings" role="Full Stack Developer Intern | React & Node" />
        <WorkCard date="June - Sep 2023" time="3 months" company="SoftMaji Infotech" role="Graphic Designer Intern | Canva" />
      </div>
      <div className="totalworkex flex flex-col items-end lg:px-20 px-5">
        <h1 className="font-thin text-neutral-400 text-2xl">Work experience</h1>
        <h1 className="font-thin italic text-white text-2xl">5 Months</h1>
      </div>

    </div>
  );
};

export default Work;