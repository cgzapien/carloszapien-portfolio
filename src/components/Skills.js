import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faReact, faCss3, faNode, faNodeJs, } from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Skills(){
  return (
    <div id="skills" className=" h-auto sm:h-auto ">
       <h1 style={{fontSize: "50px", textAlign: "center"}}>
          Skills I've Learned
      </h1>
      <div className="skillsContainer">
        <div className=" p-10">
          <h1 className="display: relative text-3xl underline">Languages</h1>
          <ul className="w-80 ">
            <li className="text-2xl"><FontAwesomeIcon icon={faJs}  /> Javascript</li>
            <li className="text-2xl"><FontAwesomeIcon icon={faHtml5} /> HTML</li>
            <li className="text-2xl"><FontAwesomeIcon icon={faCss3} /> CSS</li>
          </ul>
        </div>
        <div className=" p-10 ">
          <h1 className="display: relative text-3xl underline">Frameworks</h1>
          <ul className="w-80 ">
            <li className="text-2xl"><FontAwesomeIcon icon={faReact} /> React</li>
            <li className="text-2xl"><FontAwesomeIcon icon={faNode} /> Node.js</li>
          </ul>
        </div>
        <div className=" p-10">
          <h1 className="display: relative text-3xl underline">Database</h1>
          <ul className="w-80 ">
            <li className="text-2xl"><FontAwesomeIcon icon={faLeaf} /> MongoDB</li>
            <li className="text-2xl"><FontAwesomeIcon icon={faNodeJs} /> Express.js</li>
            <li className="text-2xl"><FontAwesomeIcon icon={faNodeJs} /> Mongoose</li>
          </ul>
        </div>
        <div className=" p-10">
          <h1 className="display: relative text-3xl underline">Been experimenting with</h1>
          <div className=" ">
            <ul className="w-80 ">
              <li className="text-2xl">React Native</li>
              <li className="text-2xl">Tailwind CSS</li>
              <li className="text-2xl">Material UI</li>
            </ul>

          </div>
        </div>

      </div>
  </div>
  )
}