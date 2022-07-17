import React from "react";

import TestimonialSlider from "./TestimonialSlider";
const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:text-yellow-500 before:absolute before:opacity-60 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people say
          </h2>
          <p className="subtitle ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
