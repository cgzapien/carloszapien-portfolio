import React from "react";
import ProjectOne from "./ProjectOne"
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
//import ProjectFour from "./ProjectFour"
//import ProjectFive from "./ProjectFive"

export default function Projects(){
  return (
    <div className=" relative h-max" id="projects">
      <h1 className="text-5xl text-center" id="thingsIBuilt">Projects</h1>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      {/* <ProjectFour /> */}
      {/* <ProjectFive /> */}
    </div>
  )
}