import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import generaciones from "../media/generaciones.png"
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectOne() {
  return (
    <div id="projectOne" className="h-max p-5 lg:flex lg:justify-center">
      <div id="project-content" className="  w-fit mx-auto">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">Generaciones Counseling</h1>
        <div className=" py-2 w-fit ">
          <p className=" max-w-lg break-normal xl:text-xl ">Generaciones Counseling is a mental health provider specializing in the Latino Community.
          </p>
        </div>
        <ul className="flex py-2">
          <li className="">Wordpress</li>
        </ul>
        <div>
          <a className="py-2" href="https://www.gencounseling.net/" target="_blank" rel="noreferrer">
          <span className="hover:cursor-pointer">Website &#8594;</span>
          </a>
          <a className=" px-2" href="https://www.gencounseling.net/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
      <br/>
      <div className="flex justify-center" id="projectimage">
        <a href="https://www.gencounseling.net/" target="_blank" rel="noreferrer"><img src={generaciones} alt="workimage" className="h-[300px] hover:opacity-50 w-fit hover:cursor-pointer rounded-[4px]"></img></a>
      </div>
    </div>
  )
}