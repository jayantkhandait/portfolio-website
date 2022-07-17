import React from "react";
import { brands } from "../../data";

const Brands = () => {
  return (
    <div className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((event, i) => {
          return <div key={i}>
            <img src={event.img} />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Brands;
