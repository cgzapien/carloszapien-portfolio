import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import workImage from "../media/project.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function ProjectTwo() {
  return (
    <div id="project-one" className="h-max p-5 flex justify-evenly">
      <div id="project-content" className="  w-fit text-right float-right">
        <p className=" text-base text-[#8892b0]">Featured Project</p>
        <h1 className=" text-4xl">project 2</h1>
        <div className=" p-[20px] w-fit ">
          <p className=" max-w-lg break-normal ">A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
        </div>
        <ul className="flex font-mono justify-end">
          <li className=" p-[5px]">JS</li>
          <li className=" p-[5px]">HTML</li>
          <li className=" p-[5px]">CSS</li>
          <li className=" p-[5px]">React</li>
          <li className=" p-[5px]">Tailwind</li>
        </ul>
        <div>
          <a className=" p-[5px]" href="https://github.com/cgzapien"><FontAwesomeIcon size="lg" icon={faGithub} /></a>
          <a className=" p-[5px]" href="https://github.com/cgzapien"><FontAwesomeIcon size="lg" icon={faFile}/></a>
        </div>
      </div>
      <div className=" w-fit m-0" id="projectimage">
        <a href="https://github.com/cgzapien" target="_blank" rel="noreferrer"><img src={workImage} alt="workimage" className="h-96 hover:opacity-50 w-fit hover:cursor-pointer"></img></a>
      </div>
    </div>
  )
}