import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./ContactForm";

export default function Contact(){

  return (
    <div id="contact" className=" h-[800px]">
        <h1 className="text-center text-5xl p-10">
          Contact
        </h1>
        <div>
          <ContactForm/>
          <ul className="flex justify-center">
            <li><a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="4x" className="hover:text-[#64ffda] p-[10px]" /></a></li>
            <li><a href="https://github.com/cgzapien" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="4x" className="hover:text-[#64ffda] p-[10px]" /></a></li>
          </ul>

        </div>
    </div>
  )
}