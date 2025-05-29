"use client";

import clsx from "clsx";
import { fill, sample } from "lodash";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  const aligns = useMemo(() => {
    return fill(Array(500), null).map(() =>
      sample(["text-right", "text-left", "text-center"])
    );
  }, []);

  const timeColorset = sample([
    ["red", "#2d0a3d", "#ff0051"],
    ["green", "blue", "navy"],
    ["inherit", "inherit", "#383838"],
    ["#ff3df5", "yellow", "#00ff33"],
  ]);

  return (
    <div
      className={clsx(
        "h-full flex flex-col justify-center items-center",
        "animate-colorize"
      )}
    >
      <div
        className={clsx(
          "text-[#aaaaaa] text-[1em] font-black",
          "w-full h-[calc(100dvh-59px)] overflow-hidden",
          "select-none"
        )}
      >
        {aligns.map((align, index) => {
          return (
            <Time
              key={`time-${index}`}
              className={align}
              date={date}
              colorset={timeColorset}
            />
          );
        })}
      </div>
    </div>
  );
}

const Time = ({
  className,
  date,
  colorset,
}: {
  className: string;
  date: Date;
  colorset: Array<string>;
}) => (
  <div
    className={clsx("scailing", className)}
    style={{
      letterSpacing: sample([
        "-3vw",
        "-1vw",
        "-1em",
        "-8px",
        "-5px",
        "-2px",
        "1px",
        "3px",
        "4px",
        "10px",
        "1em",
        "3vw",
        "5vw",
      ]),
      fontSize: sample([
        "0.05vw",
        "0.07vw",
        "0.09vw",
        "0.1vw",
        "0.35vw",
        "0.37vw",
        "0.4vw",
        "0.45vw",
        "0.48vw",
        "0.5vw",
        "0.52vw",
        "0.53vw",
        "0.55vw",
        "0.6vw",
        "0.62vw",
        "0.65vw",
        "1vw",
        "2vw",
      ]),
      lineHeight: sample([
        "-1vw",
        "-1em",
        "-0.2em",
        "-0.5em",
        "0.1em",
        "0.2em",
        "0.3em",
        "0.4em",
        "0.5em",
        "0.6em",
        "0.7em",
        "0.8em",
        "0.9em",
        "1em",
        "1vw",
      ]),
      opacity: sample([0.1, 0.2, 0.5, 0.6, 0.9, 1]),
      color: sample([...colorset]),
    }}
    suppressHydrationWarning
  >
    {date.toISOString()}
  </div>
);
