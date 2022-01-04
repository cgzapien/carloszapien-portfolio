import React from "react";


const About = () => {
  return (
    <div id="about" className="h-screen">
      <h1 className="text-5xl text-center" id="aboutme">About me</h1>
      <div className=" flex p-10 space-x-2">
        <p className=" break-normal text-xl w-96">Hello, I'm Carlos and I am a Marine Corps Veteran looking to break into tech! Since leaving the militry I have been searching for a career that will challenge me the way the military did. Since learning how to develop web applications</p>
        <div className=" bg-[#8892b0] h-80 w-96 rounded-[4px]" id="image">
          <h1>
            my image 
          </h1>
          {/* make image tag an anchor to linkedin profile */}
        </div>

      </div>
    </div>
  )
}

export default About