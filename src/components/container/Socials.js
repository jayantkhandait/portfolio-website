import React from "react";
import { social } from "../../data";
const Socials = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, i) => {
        return (
          <li className="flex justify-center items-center text-yellow-400" key={i}>
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
