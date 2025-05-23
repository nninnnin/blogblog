"use client";

import clsx from "clsx";
import { fill, sample } from "lodash";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000 * 10);

  //   return () => clearInterval(interval);
  // }, []);

  const aligns = useMemo(() => {
    return fill(Array(200), null).map(() =>
      sample(["text-right", "text-left", "text-center"])
    );
  }, []);

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
          "w-full h-[calc(100dvh-59px)] overflow-y-scroll overflow-x-hidden",
          "select-none"
        )}
      >
        {aligns.map((align, index) => {
          return <Time key={`time-${index}`} className={align} date={date} />;
        })}
      </div>
    </div>
  );
}

const Time = ({ className, date }: { className: string; date: Date }) => (
  <div
    className={clsx(className)}
    style={{
      letterSpacing: sample([
        "-10px",
        "-8px",
        "-5px",
        "-2px",
        "1px",
        "2px",
        "3px",
        "4px",
        "10px",
        "100px",
      ]),
      fontSize: sample(["8px", "12px", "18px"]),
      lineHeight: sample([
        "-2em",
        "-1em",
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
        "1.2em",
        "2em",
      ]),
    }}
    suppressHydrationWarning
  >
    {date.toISOString()}
  </div>
);
