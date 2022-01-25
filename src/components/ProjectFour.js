import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import workImage from "../media/project.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectFour() {
  return (
    <div id="projectTwo" className="h-max p-5 lg:flex lg:justify-evenly">
      <div id="project-content" className="  w-fit text-right ">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">Mario Pest Control</h1>
        <div className=" py-2 w-fit ">
          <p className=" max-w-lg break-normal xl:text-xl ">A web application where the user can help Mario's Pest Control Company by sending customers invoices for pest jobs. Showcasing my DOM manipulation skills. Deployed using Netlify.</p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">JS</li>
          <li className=" p-[5px]">HTML</li>
          <li className=" p-[5px]">CSS</li>
        </ul>
        <div>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien/mariopestcontrol" target="_blank" rel="noreferrer">
          <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see my code &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien/mariopestcontrol" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://mariopestcompany.netlify.app/" target="_blank" rel="noreferrer">
          <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see it live &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://mariopestcompany.netlify.app/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
      <div className=" w-fit m-0 hidden md:flex" id="projectimage">
        <a href="https://github.com/cgzapien/mariopestcontrol" target="_blank" rel="noreferrer"><img src={workImage} alt="workimage" className="h-96 hover:opacity-50 w-fit hover:cursor-pointer rounded-[4px]"></img></a>
      </div>
    </div>
  )
}