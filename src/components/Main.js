import React from "react";
import { Link } from "react-scroll";

export default function Main(){
  return (
    <div className=" text-center h-[28rem]  md:h-[50vh]">
      <div className=" text-left w-fit m-auto" id="heading">
        <h1 className="text-[#8892b0] text-[30px]">Hi, my name is</h1>
        <h1 className="text-8xl">Carlos Zapien.</h1>
        <h1 className="text-[#8892b0] text-[30px] break-normal">If you want to build applications for the web, I can help you.</h1>
      </div>
      <br/>
      {/* <a href="mailto:zapiencg@gmail.com"><button className=" border-2 p-3 hover:text-[#64ffda] hover:border-[#64ffda]">Hire me</button></a> */}
      <Link
        className="hover:cursor-pointer p-[10px] hover:text-[#64ffda]"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-15}
        duration= {500}
      >
        <button className=" border-2 p-3 hover:text-[#64ffda] hover:border-[#64ffda] font-mono">Hire me</button>
      </Link>
    </div>
  )
}