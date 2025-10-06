import React, { useRef, useState } from 'react';
import contactimage from '../assets/contactus.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ecddt0e',     // Your Service ID
        'template_cyrsfr8',    // Your Template ID
        form.current,
        'onFheeTGQypDXiqpM'   // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div id='contact' className="pt-24 px-20 min-h-screen font-[font2] bg-orange-400 text-black flex items-start justify-end gap-20">
      <div className='h-150'>
        <img src={contactimage} alt="" className=' w-full h-full' />
      </div>

      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="text-6xl">Contact</h1>

        <div>
          <h1 className='text-xl bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent -mt-5'>
            Working together should be effortless and fun. You can start the conversation through the form or the contact info below.
          </h1>
          <h1>Email: adityabhadoriya32@gmail.com</h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-b border-black bg-orange-400 text-xl p-2 text-black outline-none focus:ring-0 focus:border-black w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xl">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-b border-black bg-orange-400 text-xl p-2 text-black outline-none focus:ring-0 focus:border-black w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xl">Message</label>
            <textarea
              id="message"
              name="message"
              rows={2}
              className="border-b border-black bg-orange-400 text-xl p-2 text-black outline-none focus:ring-0 focus:border-black w-full resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="self-start bg-black text-orange-400 px-20 py-2 rounded-xl text-lg mt-4 hover:bg-white hover:text-black duration-300 cursor-pointer"
          >
            Send
          </button>
        </form>

        {success && <p className="text-green-600 mt-2">{success}</p>}
      </div>
    </div>
  );
};

export default Contact;
