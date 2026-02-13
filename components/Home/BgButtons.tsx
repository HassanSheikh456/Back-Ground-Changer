"use client";
import { useState } from "react";

const BgButtons = () => {
  const [bg, setBg] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: bg }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white rounded-2xl px-3 py-2">
            <button
              onClick={() => setBg("red")}
              className="bg-red-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              red
            </button>
            <button
              onClick={() => setBg("orange")}
              className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              orange
            </button>
            <button
              onClick={() => setBg("blue")}
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              blue
            </button>
            <button
              onClick={() => setBg("green")}
              className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              green
            </button>
            <button
              onClick={() => setBg("yellow")}
              className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              yellow
            </button>
            <button
              onClick={() => setBg("purple")}
              className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              purple
            </button>
            <button
              onClick={() => setBg("pink")}
              className="bg-pink-500 text-white px-4 py-2 rounded-full shadow- lg"
            >
              pink
            </button>
            <button
              onClick={() => setBg("black")}
              className="bg-black text-white px-4 py-2 rounded-full shadow-lg"
            >
              black
            </button>
            <button
              onClick={() => setBg("gray")}
              className="bg-gray-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
              gray
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BgButtons;
