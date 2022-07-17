import React, { useEffect, useState } from "react";

import { animateScroll } from "react-scroll";
import { ChevronUpIcon } from "@heroicons/react/outline";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 500 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className="bg-yellow-400 hover:bg-yellow-300 text-white w-12 h-12 rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all"
      >
        <ChevronUpIcon className="w-6 h-6" />
      </button>
    )
  );
};

export default BackToTop;
