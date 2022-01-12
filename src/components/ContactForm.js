import React, { useState } from "react";
import { send } from "@emailjs/browser";

export default function ContactForm(){
  const [toggleForm, setToggleForm] = useState(true)
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: "",
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // send(
    //   'service_portfolio',
    //   'template_portfolio',
    //   toSend,
    //   'user_ILt67rnSzwuM0lsoOKPOL'
    // )
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log('FAILED...', err);
    //   });
    // setToSend({
    //   from_name: '',
    //   from_email: "",
    //   message: '',
    // })
    setToggleForm(false)    
  };
  function handleChange(e){
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }
  return (
    <div className=" container m-auto flex justify-center p-5">
      {toggleForm ? 
      <form onSubmit={onSubmit} className="" >
        <span>Name:</span><br/>
        <input
          name="from_name"
          value={toSend.from_name}
          placeholder="Your full name.."
          onChange={handleChange}
          className=" w-80 text-[#0a192f] bg-[#8892b0] placeholder-[#0a192f]"
        ></input>
        <br/>
        <label>Email:</label><br/>
        <input
          name="from_email"
          value={toSend.from_email}
          placeholder="Your email"
          onChange={handleChange}
          className=" w-80 text-[#0a192f] bg-[#8892b0] placeholder-[#0a192f]"
        ></input>
        <br/>
        <label>Message:</label><br/>
        <textarea
          name="message"
          value={toSend.message}
          placeholder="Your message.."
          className=" h-80 w-80 text-[#0a192f] bg-[#8892b0] placeholder-[#0a192f]"
          onChange={handleChange}
        ></textarea>
        <br/>
        <div className=" text-center">
          <button
            type="submit"
            className=" border-[#ccd6f6] border-2 p-3 hover:text-[#64ffda] hover:border-[#64ffda] font-mono"
          >Send</button>
        </div>
      </form>
      :
      <h1 className=" text-4xl">Thanks for reaching out! Check your email.</h1>
      }
    </div>

  )
}