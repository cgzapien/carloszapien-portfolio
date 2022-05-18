import React from "react";
import { Link } from "react-scroll";


const NavBar = () => {
  const links = ["projects", "about", "skills"];
  return (
    <nav className=" h-16 sm:h-20 flex justify-center sm:justify-end bg-[#ccd6f6] text-[#0A192F] w-3/4 m-auto rounded-md items-center">
      <ul className="flex items-baseline ">
        <div className="flex text-2xl sm:text-4xl p-2">
          {links.map((link) => (
            <Link
            key={`${link}`}
            className="mx-3 hover:cursor-pointer p-[10px] hover:underline" 
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
