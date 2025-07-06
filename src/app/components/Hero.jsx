import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import hero from "../assets/men.png";
import down from "../assets/arrow-down.png";
import Shape from "./Shape";
const Hero = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-6 flex justify-between items-center">
        <div className="basis-1/2">
          <div className="flex flex-col space-y-10">
            <div className="hand">
              <span className="text-4xl">👋</span>
            </div>

            <div className="text-6xl">
              Hello! <span className="font-bold text-[#097a72]">I’m Madhu</span>
            </div>

            <div className="title text-center text-2xl font-semibold flex items-center">
              <div className="line w-[200px] bg-gray-300 h-[1px] mr-2"></div>
              Product Designer
            </div>

            <div className="w-3/4">
              Hello! I’m Madhu.
              <span className="font-semibold text-[#097a72]">
                I’m a UX leader, design thinker, product designer,
              </span>
              experience strategist, generative artist & human-loving introvert.
            </div>

            <ul className="pl-5">
              <li>✔️ Product must be authentic</li>
              <li>✔️ Solve pain points elegantly</li>
              <li>✔️ User testing, feedback, and validation</li>
            </ul>

            <div className="btns flex gap-4 items-center mt-2">
              <button className="bg-[#097a72] px-8 py-3 text-white cursor-pointer rounded-3xl">
                Let’s Talk
              </button>
              <button className="flex items-center underline underline-offset-8 cursor-pointer">
                Download CV
                <span className="ml-1.5 size-4">
                  <Image src={down} alt="download" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="right basis-1/2 flex justify-center">
          <Image
            src={hero}
            alt="Designer"
            className="w-[600px]  bottom-0"
          />
        </div>
      </div>
      <Shape className="" />
    </div>
  );
};

export default Hero;
