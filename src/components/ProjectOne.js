import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import workImage from "../media/project.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectOne() {
  return (
    <div id="project-one" className="h-max p-5 lg:flex lg:justify-evenly ">
      <div className=" w-fit m-0 md:max-w-6xl hidden md:flex" id="projectimage">
        <a href="https://github.com/cgzapien"><img src={workImage} alt="workimage" className="rounded-[4px] h-96 hover:opacity-50 hover:cursor-pointer lg:w-fit"></img></a>
      </div>
      <div id="project-content" className="  w-fit text-right">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">project 1</h1>
        <div className=" py-2 w-fit ">
          <p className=" max-w-lg break-normal xl:text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">JS</li>
          <li className=" p-[5px]">HTML</li>
          <li className=" p-[5px]">CSS</li>
        </ul>
        <div className="">
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien" target="_blank" rel="noreferrer">
            <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see my code &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien" target="_blank" rel="noreferrer">
          <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see it live &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
    </div>
  )
}