import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import generaciones from "../media/generaciones.png"
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectOne() {
  return (
    <div id="projectOne" className="h-max p-5 lg:flex lg:justify-evenly">
      <div id="project-content" className="  w-fit text-right lg:mr-[25px]">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">Generaciones Counseling</h1>
        <div className=" py-2 w-fit ">
          <p className=" max-w-lg break-normal xl:text-xl ">Utilizing Wordpress, created a multi-page website with Simple Mail Transfer Protocol email services and CAPTCHA authentication.</p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">Wordpress</li>
        </ul>
        <div>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://www.gencounseling.net/" target="_blank" rel="noreferrer">
          <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see it live &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://www.gencounseling.net/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
      <br/>
      <div className=" w-[700px] m-0 hidden md:flex" id="projectimage">
        <a href="https://www.gencounseling.net/" target="_blank" rel="noreferrer"><img src={generaciones} alt="workimage" className="h-96 hover:opacity-50 w-fit hover:cursor-pointer rounded-[4px]"></img></a>
      </div>
    </div>
  )
}