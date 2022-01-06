import React from "react";

import ContactForm from "./ContactForm";

export default function Contact(){

  return (
    <div id="contact" className=" h-[800px]">
        <h1 className="text-center text-5xl p-10">
          Contact
        </h1>
        <div>
          <ContactForm/>
        </div>
    </div>
  )
}