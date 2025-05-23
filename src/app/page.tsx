"use client";

import clsx from "clsx";

export default function Home() {
  return (
    <div
      className={clsx(
        "h-full flex flex-col justify-center items-center",
        "bg-[#787878]"
      )}
    >
      <svg
        className="mb-[75px] perspective-dramatic animate-colorize"
        width="200"
        height="200"
      >
        <rect
          id="rect1"
          className="mix-blend-soft-light"
          x="0"
          y="0"
          width="100"
          height="100"
          fill="#5d5d5d"
        ></rect>

        <rect
          id="rect2"
          className="mix-blend-soft-light"
          x="100"
          y="100"
          width="100"
          height="100"
          fill="#eeeeee"
        ></rect>
      </svg>

      <div className="font-light text-[0.3em]">
        <h2 className="animate-colorize-text">
          <p className="font-medium">May 23, 2024</p>
          <br />

          <p>&lt;Free!</p>
          <p className="ml-[8em]">out of nowhere. &gt;</p>
        </h2>
      </div>
    </div>
  );
}
