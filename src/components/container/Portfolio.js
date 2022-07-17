import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-zinc-200 min-h-[1440px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-black section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest work
          </h2>
          <p className="subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
