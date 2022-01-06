import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
  return (
    <div id="footer" className="p-[20px] font-mono">
      <ul className="flex justify-center">
            <li><a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="4x" className="hover:text-[#64ffda] p-[10px]" /></a></li>
            <li><a href="https://github.com/cgzapien" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="4x" className="hover:text-[#64ffda] p-[10px]" /></a></li>
          </ul>
      <p className="text-center">Designed using React &#38; Tailwind CSS</p>
      <p className="text-center">Built by Carlos Zapien &#174; 2022</p>
    </div>
  )
}