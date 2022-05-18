import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Main(){
  return (
    <div className=" text-center h-[20rem]  md:h-[30rem]">
      <div className=" text-left w-fit m-auto pt-16 sm:pt-24" id="heading">
        <h1 className=" text-5xl sm:text-6xl md:text-8xl lg:text-9xl">Carlos Zapien</h1>
        <h1 className="text-[#8892b0] text-xl sm:text-2xl md:text-5xl">Software Developer</h1>
      </div>
      <div className="">
        <ul className="flex justify-center mt-5">
          <li>
            <a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="4x" className=" sm:text-7xl p-[10px]" /></a>
          </li>
          <li>
            <a href="https://github.com/cgzapien" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="4x" className="sm:text-7xl p-[10px]" /></a>
          </li>
          <li>
            <a href="mailto:zapiencg@gmail.com" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faPaperPlane} size="4x" className="sm:text-7xl p-[10px]" /></a>
          </li>

        </ul>
        </div>
    </div>
  )
};