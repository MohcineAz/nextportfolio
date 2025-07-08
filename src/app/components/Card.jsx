import React from "react";
import Image from "next/image";
import design from "../assets/bezier-curve(1).png";
import graphic from "../assets/presentation-chart.png";
import strategy from "../assets/graph(1).png";
import arrow from "../assets/arrow-right.png";
const ListCards = [
  { id: 1, name: "UI-UX CREATIVE DESIGN", img: design },
  { id: 2, name: "VISUAL GRAPHIC DESIGN", img: graphic },
  { id: 3, name: "STRATEGY & DIGITAL MARKETING", img: strategy },
];

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-8 mt-8 w-full max-w-6xl mx-auto justify-items-center items-center">
      {ListCards.map((card, index) => (
        <div
          key={index}
          className="border-2 p-6 flex flex-col justify-between items-start h-[300px] w-full max-w-[300px]"
        >
          <Image src={card.img} alt="card image" />
          <span className="font-semibold text-2xl mt-4">{card.name}</span>
          <button className="cursor-pointer flex items-center gap-1 mt-auto text-black">
            Read More <Image src={arrow} alt="arrow" height={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
