import React from "react";
import Image from "next/image";
import arrow from "../assets/arrow-up-right.png";
const MenuList = [
  {
    id: 1,
    name: "My Projects",
    subtitle: "See all of one project I have done.",
    img: arrow,
  },
  {
    id: 2,
    name: "About Me",
    subtitle: "Learn about myself what I do",
    img: arrow,
  },
  { id: 3, name: "Contact me", subtitle: "designer@gmail.com", img: arrow },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="logo font-bold text-2xl underline  underline-offset-8">
        it's me
      </div>
      <ul className="flex gap-4">
        {MenuList.map((menu) => (
          <li
            key={menu.id}
            className=" leading-3  border-t-2 pt-4 inline-block cursor-pointer"
          >
            <span className="flex items-center gap-1 font-bold ">
              {" "}
              {menu.name} <Image className="w-4 h-4" src={arrow} alt="arrow" />
            </span>{" "}
            <br /> <div className="w-2/3 leading-4">{menu.subtitle} </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
