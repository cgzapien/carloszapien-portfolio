import React from "react";
import me from "../media/newme.png"

const About = () => {
  return (
    <div id="about" className=" h-[45rem] w-fit m-auto">
      <div className="flex flex-col-reverse sm:flex-row justify-center mt-28 sm:space-x-5 w-fit m-auto sm:w-max">
        {/* <div className=" border-2 rounded-md "> */}
        <div >
          <h1 className="text-5xl text-center p-2">About me</h1>
          <p className=" break-normal text-[20px] lg:text-2xl w-96"> 
            I love taking things apart and seeing if I can put them back together. This curiosity has really helped in learning
            new technologies and languages.  
          </p>
          <br/>
          <p className=" break-normal text-[20px] lg:text-2xl w-96">
            When I am not programming, I am usually working on my car, being physically active or just hanging out.
            {/* I've started a meetup group to connect other Latinos like myself in the tech industry. Check us out   
            <a href="https://www.meetup.com/latino-techies-phx/" target="_blank" rel="noreferrer" > <u>Latino Techies | Phoenix</u> </a> */}
          </p>
        </div>
        <div className="mb-5 sm:m-0" id="image">
          <img src={me} alt="me" className="rounded-[5px] h-[350px] md:h-[500px] m-auto"/>
        </div>
      </div>
    </div>
  )
}

export default About