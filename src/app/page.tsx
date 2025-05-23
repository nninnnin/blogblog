"use client";

import clsx from "clsx";

export default function Home() {
  const Time = () => (
    <div suppressHydrationWarning>{new Date().toISOString()}</div>
  );

  return (
    <div
      className={clsx(
        "h-full flex flex-col justify-center items-center",
        "animate-colorize",
        "text-[#eeeeee]"
      )}
    >
      <Time />
    </div>
  );
}
