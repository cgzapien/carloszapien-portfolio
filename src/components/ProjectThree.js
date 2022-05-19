import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import drinksImage from "../media/worldOfDrinks.png"

export default function ProjectThree() {
  return (

    <div id="projectThree" className="h-max p-5 lg:flex lg:justify-center w-fit m-auto">
      <div id="project-content" className="  w-fit mx-auto">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">World of Drinks</h1>
        <div className=" py-2 w-fit ">
        <p className=" max-w-lg break-normal sm:text-xl ">World of Drinks ia a web application that provides users with information
          regarding alcoholic and non-alcoholic beverages. You can learn details about them, how to prepare them and what ingredients are needed in order to make them. 
          I created this application using The Cocktail Database API and deployed it using Heroku.
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
          <a className=" py-2 " href="https://github.com/cgzapien/worldOfDrinks" target="_blank" rel="noreferrer">
            <span className="hover:cursor-pointer">Code &#8594;</span>
          </a>
          <a className="px-2" href="https://github.com/cgzapien/worldOfDrinks" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <a className="px-2" href="https://worldofdrinks.herokuapp.com/" target="_blank" rel="noreferrer">
            <span className="hover:cursor-pointer">Website &#8594;</span>
          </a>
          <a className="" href="https://worldofdrinks.herokuapp.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
        </div>
        <br/>
        <div className="flex justify-center" id="projectimage">
          <a href="https://worldofdrinks.herokuapp.com/" target="_blank"rel="noreferrer"><img src={drinksImage} alt="workimage" className="h-[300px] hover:opacity-50 w-[550px] hover:cursor-pointer rounded-[4px]"></img></a>
        </div>
    </div>
  )
}