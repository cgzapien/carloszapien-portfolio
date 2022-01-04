import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import workImage from "../media/project.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectThree() {
  return (
    <div id="project-one" className="h-max p-5 flex justify-evenly ">
      <div className=" w-fit m-0" id="projectimage">
        <a href="https://github.com/cgzapien"><img src={workImage} alt="workimage" className="h-96 hover:opacity-50 w-fit hover:cursor-pointer rounded-[4px]"></img></a>
      </div>
      <div id="project-content" className="  w-fit text-right">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">project 3</h1>
        <div className=" p-[20px] w-fit ">
          <p className=" max-w-lg break-normal ">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">JS</li>
          <li className=" p-[5px]">HTML</li>
          <li className=" p-[5px]">CSS</li>
        </ul>
        <div>
          <span className="font-mono">see my code &#8594;</span>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <span className="font-mono">see it live &#8594;</span>
          <a className=" p-[5px] hover:text-[#64ffda]" href="https://github.com/cgzapien" target="_blank" rel="noreferrer"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
    </div>
  )
}