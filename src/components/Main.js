import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
export default function Main(){
  return (
    <div className=" text-center h-[28rem]  md:h-[75vh]">
      <div className=" text-left w-fit m-auto" id="heading">
        <h1 className=" text-6xl md:text-8xl lg:text-8xl">Carlos Zapien.</h1>
        <h1 className="text-[#8892b0] text-[30px]">Software Developer</h1>
      </div>
      <br/>
        <div>
          <ul className="flex justify-center">
            <li><a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="4x" className="hover:text-[#64ffda] p-[10px]" /></a></li>
            <li><a href="https://github.com/cgzapien" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="4x" className="hover:text-[#64ffda] p-[10px]" /></a></li>
            <li><a href="mailto:zapiencg@gmail.com" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faPaperPlane} size="4x" className="hover:text-[#64ffda] p-[10px]" /></a></li>
          </ul>
        </div>
    </div>
  )
}