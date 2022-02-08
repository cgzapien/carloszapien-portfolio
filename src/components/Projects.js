import React from "react";
import ProjectOne from "./ProjectOne"
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";
import ProjectFour from "./ProjectFour"

export default function Projects(){
  return (
    <div className=" relative h-max" id="projects">
      <h1 className="text-5xl text-center" id="thingsIBuilt">Projects</h1>
      {/* <ProjectOne /> */}
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
    </div>
  )
}