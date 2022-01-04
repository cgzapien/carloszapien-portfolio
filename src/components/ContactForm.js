import React, { useState } from "react";
import { send } from "@emailjs/browser";

export default function ContactForm(){
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: "",
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_portfolio',
      'template_portfolio',
      toSend,
      'user_ILt67rnSzwuM0lsoOKPOL'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  function handleChange(e){
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }
  return (
    <div className=" container">
      <form onSubmit={onSubmit} >
        <label>Name:</label><br/>
        <input
          name="from_name"
          value={toSend.from_name}
          placeholder="Your full name.."
          onChange={handleChange}
        ></input>
        <br/>
        <label>Email:</label><br/>
        <input
          name="from_email"
          value={toSend.from_email}
          placeholder="Your email"
          onChange={handleChange}
        ></input>
        <br/>
        <label>Message:</label><br/>
        <textarea
          name="message"
          value={toSend.message}
          placeholder="Your message.."
          className=" h-80 text-red-700"
          onChange={handleChange}
        ></textarea>
        <br/>
        <button
          type="submit"
          className=" border-[#ccd6f6] border-2 p-3 hover:text-[#64ffda] hover:border-[#64ffda] font-mono"
        >Send</button>
        
      </form>
    </div>
  )
}