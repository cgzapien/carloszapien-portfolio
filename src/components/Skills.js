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
        <div className="text-center">
          <ul className="flex flex-col justify-center mt-9 lg:flex-row">
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px] list-item">
              <FontAwesomeIcon icon={faNodeJs} /><p>Javascript</p>
            </li>
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px]">
              <FontAwesomeIcon icon={faReact} /> <p>React</p>
            </li>
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px]">
              <FontAwesomeIcon icon={faCss3} /> <p>Tailwind CSS</p>
            </li>
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px]">
              <FontAwesomeIcon icon={faNode} /> <p>Node.js</p>
            </li>
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px]">
              <FontAwesomeIcon icon={faCss3} /> <p>Material UI</p>
            </li>
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px]">
              <FontAwesomeIcon icon={faLeaf} /> <p>MongoDB</p>
            </li>
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px]">
              <FontAwesomeIcon icon={faNodeJs} /> <p>Express.js</p>
            </li>
            <li className=" text-2xl md:text-3xl  mx-5 p-[8px]">
              <FontAwesomeIcon icon={faNodeJs} /> <p>Mongoose</p>
            </li>
          </ul>
        </div>
  </div>
  )
}