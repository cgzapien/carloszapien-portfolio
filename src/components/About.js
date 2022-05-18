import React from "react";
import me from "../media/me.jpg"


const About = () => {
  return (
    <div id="about" className=" h-[45rem]">
      <div className="flex flex-col sm:flex-row justify-center mt-28">
        <div className="px-5">
          <h1 className="text-5xl">A little about me</h1>
          <p className=" break-normal text-[20px] xl:text-2xl w-96">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
        </div>
        <div className="w-96 " id="image">
        <a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer">
          <img src={me} alt="me" className="rounded-[5px] h-[300px] md:h-[500px] m-auto"/>
        </a>
        </div>
      </div>
    </div>
  )
}

export default About