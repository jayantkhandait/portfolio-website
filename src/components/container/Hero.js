import React from "react";
import ProfileImg from '../../assets/img/sde.png'
const Hero = () => {
  return (
    <section className="lg:h-[85vh] flex items-center bg-zinc-200 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden" id="home">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="font-semidbold text-3xl text-yellow-400">Hi! I'm Jayant</p>
            <h1 className="text-4xl text-black leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              A Web Developer & Love To Build Applications. 
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.      
            </p>
            <button className="btn btn-md bg-yellow-400 hover:bg-yellow-300 md:btn-lg transition-all">
              Let's Connect
            </button>
          </div>
          <div className="hidden lg:flex flex-1 justify-end items-end h-full -translate-y-24">
            <img src={ProfileImg} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
