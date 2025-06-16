import React from "react";
import clsx from "clsx";
import { fill, sample } from "lodash";
import { useMemo, useState } from "react";
import Time from "@/app/components/facade/Facade01/Time";

const Facade01 = () => {
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
    <div className={clsx("h-full flex flex-col justify-center items-center")}>
      <div
        className={clsx(
          "text-[#aaaaaa] text-[1em] font-black",
          "w-full h-[calc(100dvh-35.5px)] overflow-hidden",
          "select-none"
        )}
      >
        {aligns.map((align, index) => {
          return (
            <Time
              key={`time-${index}`}
              className={align}
              colorset={timeColorset}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Facade01;
