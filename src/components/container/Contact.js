import React from "react";

import { contact } from "../../data";
const Contact = () => {
  return (
    <section className="section bg-zinc-200" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title text-black before:content-contact relative before:absolute before:opacity-100 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, i) => {
              const {icon, title, subtitle, description} = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={i}>
                  <div className="text-yellow-400 rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-black font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-black font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="Your Name" />
              <input className="input" type="email" placeholder="Your Email" />
            </div>
            <input type="text" className="input" placeholder="Subject" />
            <textarea className="textarea" placeholder="Your Message" />
            <button className="btn btn-lg bg-yellow-400 hover:bg-yellow-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
