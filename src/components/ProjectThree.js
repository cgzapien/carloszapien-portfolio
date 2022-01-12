import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import drinksImage from "../media/worldOfDrinks.png"

export default function ProjectThree() {
  return (
    <div id="projectThree" className="h-max p-5 lg:flex lg:justify-evenly ">
      <div className=" w-fit m-0 hidden md:flex" id="projectimage">
        <a href="https://worldofdrinks.herokuapp.com/" target="_blank"rel="noreferrer"><img src={drinksImage} alt="workimage" className="h-96 hover:opacity-50 w-fit hover:cursor-pointer rounded-[4px]"></img></a>
      </div>
      <div id="project-content" className="  w-fit text-right ">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">World of Drinks</h1>
        <div className=" py-2 w-fit ">
          <p className=" max-w-lg break-normal xl:text-xl ">A web app where users can search alcoholic and non-alcoholic drinks and learn details about them. How to prepare them and what ingedients are needed in order for you to make them. I created this app using The Cocktail Databse API.</p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">JS</li>
          <li className=" p-[5px]">HTML</li>
          <li className=" p-[5px]">CSS</li>
          <li className=" p-[5px]">React</li>
          <li className=" p-[5px]">Material UI</li>
        </ul>
        <div>
          <span className="font-mono">see my code &#8594;</span>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien/worldOfDrinks" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <span className="font-mono">see it live &#8594;</span>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://worldofdrinks.herokuapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
    </div>
  )
}