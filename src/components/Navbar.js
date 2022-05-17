import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const links = ["projects", "about", "skills"];
  return (
    <nav className=" h-24 flex">
      <ul className="flex">
        <div className="flex text-1xl sm:text-2xl justify-end p-7">
          {links.map((link) => (
            <Link
            key={`${link}`}
            className="ml-3 hover:cursor-pointer p-[10px]" 
            activeClass="active"
            to={`${link}`}
            spy={true}
            smooth={true}
            offset={-15}
            duration= {1000}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
          
        </div>
        <div className="flex">
          <li>
            <a href="https://www.linkedin.com/in/carlos-zapien/" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="3x" className=" p-[10px]" /></a>
          </li>
          <li>
            <a href="https://github.com/cgzapien" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="3x" className=" p-[10px]" /></a>
          </li>
          <li>
            <a href="mailto:zapiencg@gmail.com" target="_blank"rel="noreferrer"><FontAwesomeIcon icon={faPaperPlane} size="3x" className=" p-[10px]" /></a>
          </li>
        </div>
      </ul>
      
    </nav>
  );
};

export default NavBar;
