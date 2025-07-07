import React from "react";

const ServDescription = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-10 items-center">
      <div>
        <h3 className="text-lg font-semibold mb-3">MY SERVICES?</h3>
        <h1 className="text-6xl font-bold leading-tight">WHAT I’M OFFERING</h1>
      </div>

      <div>
        <p className="text-xl">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="flex justify-end">
        <button className="bg-black text-white px-8 py-3 cursor-pointer rounded-3xl hover:bg-gray-800 transition">
          ALL SERVICE
        </button>
      </div>
    </div>
  );
};

export default ServDescription;
