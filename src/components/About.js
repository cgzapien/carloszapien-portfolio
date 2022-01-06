import React from "react";
import me from "../media/me.jpg"


const About = () => {
  return (
    <div id="about" className="h-screen">
      <h1 className="text-5xl text-center" id="aboutme">About me</h1>
      <div className=" flex justify-center p-10 space-x-2 m-auto">
        <p className=" break-normal text-lg sm:text-2xl w-96">Hello, I'm Carlos. My passion for working on vehicles has helped me look at coding problems in a similar way and I've taken the same approach when it comes to solving them. I've learned to break the problem up into smaller problems and build them up from the ground up. I'm very excited to start my career as a web developer and looking forward to connect.</p>
        <div className=" h-80 w-96 " id="image">
        <a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer">
          <img src={me} alt="me" className="rounded-[4px]"/>
        </a>
          {/* make image tag an anchor to linkedin profile */}
        </div>

      </div>
    </div>
  )
}

export default About