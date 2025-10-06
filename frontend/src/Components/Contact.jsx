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
        'onFheeTGQypDXiqpM'    // Your Public Key
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
    <div
      id="contact"
      className="
        pt-24 pb-20 px-20 min-h-screen font-[font2] bg-orange-400 text-black 
        flex items-start justify-end gap-20
        max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-10 max-lg:px-10
        max-sm:px-6
      "
    >
      {/* Image Section */}
      <div className="h-150 max-lg:h-auto max-lg:w-[80%] max-sm:w-full flex justify-center">
        <img
          src={contactimage}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex flex-col gap-8 max-lg:w-[90%] max-sm:w-full">
        <h1 className="text-6xl max-md:text-4xl max-sm:text-3xl text-center lg:text-left">
          Contact
        </h1>

        <div className="text-center lg:text-left">
          <h1 className="text-xl bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent -mt-5 max-md:text-lg">
            Working together should be effortless and fun. You can start the conversation through the form or the contact info below.
          </h1>
          <h1 className="text-lg mt-2">Email: <span className="underline">adityabhadoriya32@gmail.com</span></h1>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 mt-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl max-md:text-lg">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-b border-black bg-orange-400 text-xl p-2 text-black outline-none focus:ring-0 focus:border-black w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xl max-md:text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-b border-black bg-orange-400 text-xl p-2 text-black outline-none focus:ring-0 focus:border-black w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xl max-md:text-lg">Message</label>
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
            className="
              self-start bg-black text-orange-400 px-20 py-2 rounded-xl text-lg mt-4 
              hover:bg-white hover:text-black duration-300 cursor-pointer
              max-sm:px-10
            "
          >
            Send
          </button>
        </form>

        {success && (
          <p className="text-green-600 mt-2 text-center lg:text-left">{success}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
