import React from "react";

import Image from "../../assets/img/about.jpg";
const About = () => {
  return (
    <section className="section bg-zinc-200" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl -translate-y-10"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-black text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:text-black before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Jayant Khandait
              </h2>
              <p className="mb-4 text-yellow-400">Full Stack Web Developer</p>
              <hr className="mb-8 opacity-80" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
            <button className="btn btn-md bg-yellow-400 hover:bg-yellow-300 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
