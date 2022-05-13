import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const links = ["projects", "about", "skills"];
  return (
    <nav className="h-40">
      <ul className="text-1xl sm:text-2xl flex justify-end font-mono p-7">
        {links.map((link) => (
          <Link
            key={`${link}`}
            className="ml-3 hover:cursor-pointer p-[10px] hover:text-[#64ffda]" 
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
      </ul>
    </nav>
  );
};

export default NavBar;
