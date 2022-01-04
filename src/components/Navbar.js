import React from "react";
import { Link } from "react-scroll";


const NavBar = () => {
  return (
    <nav className="h-40">
      <ul className="text-2xl  flex justify-end font-mono">
      <Link
        className="hover:cursor-pointer p-[10px] hover:text-[#64ffda]"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-15}
        duration= {500}
      >
        About
      </Link>
      <Link
        className="hover:cursor-pointer p-[10px] hover:text-[#64ffda]"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-15}
        duration= {500}
      >
        Projects
      </Link>
      <Link
        className="hover:cursor-pointer p-[10px] hover:text-[#64ffda]"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-15}
        duration= {500}
      >
        Skills
      </Link>
      <Link
        className="hover:cursor-pointer p-[10px] hover:text-[#64ffda]"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-15}
        duration= {500}
      >
        Contact
      </Link>
      </ul>

    </nav>
  )
}

export default NavBar