import React from "react";
import me from "../media/me.jpg"


const About = () => {
  return (
    <div id="about" className=" h-full">
      <h1 className="text-5xl text-center" id="aboutme">About Me</h1>
      <div className="aboutContainer">
        <p className=" break-normal text-lg xl:text-2xl w-96"></p>
        <div className="w-96 " id="image">
        <a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer">
          <img src={me} alt="me" className="rounded-[5px] h-[400px] m-auto"/>
        </a>
        </div>

      </div>
    </div>
  )
}

export default About