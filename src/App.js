import React, {useState, useEffect} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import About from "./components/About";
import Main from "./components/Main"
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

library.add(fab);

export default function App() {
  const [toggleButton, setToggleButton] = useState(false)
  function toggleVisibility(){
    if(window.pageYOffset > 300){
      setToggleButton(true)
    } else{
      setToggleButton(false)
    }
  }
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, [])
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {toggleButton && (
        <button className="sticky bottom-10 left-[95%] opacity-30 lg:text-5xl sm:text-3xl " onClick={scrollToTop}><FontAwesomeIcon icon={faArrowCircleUp}/></button>
      )}
      <Footer />
    </>
  )
}