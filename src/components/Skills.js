import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faCss3, faNode, faNodeJs, } from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Skills(){
  return (
    <div id="skills" className=" h-auto sm:h-auto ">
      <h1 className="text-5xl text-center">
          Skills
      </h1>
        <div className="w-auto ">
          <ul className="flex flex-col  m-auto w-[280px] mt-9 lg:flex-row lg:w-auto ">
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faNodeJs} /> Javascript</li>
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faReact} /> React</li>
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faNode} /> Node.js</li>
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faCss3} /> Tailwind CSS</li>
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faCss3} /> Material UI</li>
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faLeaf} /> MongoDB</li>
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faNodeJs} /> Express.js</li>
            <li className=" text-2xl md:text-3xl mx-5 p-[10px]"><FontAwesomeIcon icon={faNodeJs} /> Mongoose</li>
          </ul>
        </div>
  </div>
  )
}