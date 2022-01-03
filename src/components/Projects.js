import React from "react";
import ProjectOne from "./ProjectOne"
import ProjectThree from "./ProjectThree";
import ProjectTwo from "./ProjectTwo";

export default function Projects(){
  return (
    <div className=" relative h-max" id="projects">
      <h1 style={{fontSize: "50px", textAlign: "center"}} id="thingsIBuilt">Some Things I've Built</h1>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
  )
}