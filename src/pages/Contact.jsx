import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css'
const Contact = () => {
  const form = useRef();
  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('service_e4nspha', 'template_1n8w1lk', e.target, 'tRPD3dXmhjPJuSaq4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className='submit' type="submit" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact