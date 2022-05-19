import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
export default function Footer(){
  return (
    <div id="footer" className="p-[20px] font-mono mt-5  ">
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
      <p className="text-center">Designed using React &#38; Tailwind CSS</p>
      <p className="text-center">Built by Carlos Zapien &#174; 2022</p>
    </div>
  )
};