import React from "react";
import me from "../media/me.jpg"


const About = () => {
  return (
    <div id="about" className=" h-[45rem]">
      <div className="flex flex-col sm:flex-row justify-center mt-28">
        <div className="p-5">
          <h1 className="text-5xl text-center p-2">A little about me</h1>
          <p className=" break-normal text-[20px] xl:text-2xl w-96"></p>
        </div>
        <div className="" id="image">
        <a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer">
          <img src={me} alt="me" className="rounded-[5px] h-[350px] md:h-[500px] m-auto"/>
        </a>
        </div>
      </div>
    </div>
  )
}

export default About