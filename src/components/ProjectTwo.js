import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rockthevote from "../media/rockthevote.png"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectTwo() {
  return (
    <div id="projectTwo" className="h-max p-5 lg:flex lg:justify-evenly">
      <div id="project-content" className="  w-fit text-right ">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">Rock the Vote</h1>
        <div className=" py-2 w-fit ">
          <p className=" max-w-lg break-normal xl:text-xl ">Community based web application where users can go voice their opinions on issues regarding their communities. Utilizing the CRUD operations, users can add, delete and update issues. Back-end deployed using Heroku, MongoDB for database and front-end deployed using Netlify.</p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">JS</li>
          <li className=" p-[5px]">HTML</li>
          <li className=" p-[5px]">CSS</li>
          <li className=" p-[5px]">React</li>
          <li className=" p-[5px]">Material UI</li>
        </ul>
        <div>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien/rockthevote" target="_blank" rel="noreferrer">
          <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see my code &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien/rockthevote" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://rockthevote.netlify.app/" target="_blank" rel="noreferrer">
          <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see it live &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://rockthevote.netlify.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
      <div className=" w-fit m-0 hidden md:flex" id="projectimage">
        <a href="https://rockthevote.netlify.app/" target="_blank" rel="noreferrer"><img src={rockthevote} alt="workimage" className="h-96 hover:opacity-50 w-fit hover:cursor-pointer rounded-[4px]"></img></a>
      </div>
    </div>
  )
}