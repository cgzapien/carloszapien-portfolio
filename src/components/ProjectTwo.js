import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import rockthevote from "../media/newrockthevote.png"
export default function ProjectTwo() {
  return (
    <div id="projectOne" className="h-max p-5 lg:flex lg:justify-center w-fit m-auto">
      <div id="project-content" className="  w-fit mx-auto">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">Rock the vote</h1>
        <div className=" py-2 w-fit ">
          <p className=" max-w-lg break-normal sm:text-xl">Rock the vote is a community based application where members can voice their issues. 
            Using the CRUD operations, users can add, delete and update issues. Back-end deployed using Heroku and front-end deployed using Netlify.
          </p>
        </div>
        <ul className="flex py-2">
          <li className="pr-2">JS</li>
          <li className="px-2">HTML</li>
          <li className="px-2">CSS</li>
          <li className="px-2">React</li>
          <li className="px-2">Material UI</li>
        </ul>
        <div>
          <a className="" href="https://github.com/cgzapien/rockthevote" target="_blank" rel="noreferrer">
          <span className=" hover:cursor-pointer">Code &#8594;</span>
          </a>
          <a className=" px-2" href="https://github.com/cgzapien/rockthevote" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub}/></a>
          <a className="px-2" href="https://rockthevote.netlify.app/" target="_blank" rel="noreferrer">
          <span className="hover:cursor-pointer">Website &#8594;</span>
          </a>
          <a className=" px-2" href="https://rockthevote.netlify.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
      <br/>
      <div className="flex justify-center w-auto" id="projectimage">
        <a href="https://rockthevote.netlify.app/" target="_blank" rel="noreferrer"><img src={rockthevote} alt="workimage" className="h-[300px] w-[550px] hover:opacity-50 hover:cursor-pointer rounded-[4px]"></img></a>
      </div>
    </div>
  )
}