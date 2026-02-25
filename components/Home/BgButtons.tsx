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
            {[
              "red",
              "orange",
              "blue",
              "green",
              "yellow",
              "purple",
              "pink",
              "black",
              "gray",
            ].map((color) => (
              <button
                key={color}
                onClick={() => setBg(color)}
                className="text-white px-4 py-2 rounded-full shadow-lg"
                style={{ backgroundColor: color }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BgButtons;
