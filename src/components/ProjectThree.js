import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import drinksImage from "../media/worldOfDrinks.png"

export default function ProjectThree() {
  return (

    <div id="projectThree" className="h-max p-5 lg:flex lg:justify-evenly">
      <div id="project-content" className="  w-fit text-right lg:mr-[25px]">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">World of Drinks</h1>
        <div className=" py-2 w-fit ">
        <p className=" max-w-lg break-normal xl:text-xl ">A web application where users can search alcoholic and non-alcoholic beverages: learn details about them, how to prepare them and what ingredients are needed in order to make them. I created this application using The Cocktail Databse API. Deployed using Heroku.
        </p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">JS</li>
          <li className=" p-[5px]">HTML</li>
          <li className=" p-[5px]">CSS</li>
          <li className=" p-[5px]">React</li>
          <li className=" p-[5px]">Material UI</li>
        </ul>
        <div>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien/worldOfDrinks" target="_blank" rel="noreferrer">
            <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see my code &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien/worldOfDrinks" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://worldofdrinks.herokuapp.com/" target="_blank" rel="noreferrer">
            <span className=" p-[5px] font-mono hover:text-[#64ffda] hover:cursor-pointer">see it live &#8594;</span>
          </a>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://worldofdrinks.herokuapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
        </div>
        <br/>
        <div className=" w-fit m-0 hidden md:flex  lg:mr-[25px]" id="projectimage">
          <a href="https://worldofdrinks.herokuapp.com/" target="_blank"rel="noreferrer"><img src={drinksImage} alt="workimage" className="h-96 hover:opacity-50 w-fit hover:cursor-pointer rounded-[4px]"></img></a>
        </div>
    </div>
  )
}