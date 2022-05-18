import React from "react";
import { Link } from "react-scroll";


const NavBar = () => {
  const links = ["projects", "about", "skills"];
  return (
    <nav className=" h-24 flex justify-center sm:justify-start bg-[#ccd6f6] text-[#0A192F]">
      <ul className="flex items-baseline ">
        <div className="flex text-2xl sm:text-4xl justify-end p-7">
          {links.map((link) => (
            <Link
            key={`${link}`}
            className="ml-3 hover:cursor-pointer p-[10px] hover:underline" 
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
        
      </ul>
      
    </nav>
  );
};

export default NavBar;
