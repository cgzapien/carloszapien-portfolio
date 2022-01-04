import React from "react";

export default function Main(){
  return (
    <div className=" h-screen text-center">
      <div className=" text-left w-fit" id="heading">
        <h1 className="text-[#8892b0] text-[30px]">Hi, my name is</h1>
        <h1 className="text-8xl">Carlos Zapien.</h1>
        <h1 className="text-[#8892b0] text-[30px] break-normal">I use my skills to build things so let's get to building.</h1>
      </div>
      <br/>
      <a href="mailto:zapiencg@gmail.com"><button className=" border-2 p-3 hover:text-[#64ffda] hover:border-[#64ffda]">Let's Connect</button></a>
    </div>
  )
}