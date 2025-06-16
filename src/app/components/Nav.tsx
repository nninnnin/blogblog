"use client";

import clsx from "clsx";
import Link from "next/link";

const Nav = () => {
  return (
    <div
      id="nav-container"
      className={clsx(
        "flex justify-between items-center",
        "pr-[1em]",
        "select-none",
        "transition-all duration-200",
        "text-[gainsboro] cursor-pointer",
        "border-b-[1.5px]"
      )}
      style={{
        // borderColor: "rgba(0, 255, 255, 0.5)",
        borderColor: "#efefef",
      }}
    >
      <Link href="/">
        <div
          className={clsx(
            "text-[12px]",
            "p-[8px] pl-[14px]",
            "w-full",
            "font-bold",
            "tracking-tight"
          )}
        >
          Justin Donggyu Lee
        </div>
      </Link>

      <ul className={clsx("flex", "gap-[1em]")}>
        <li>
          <Link href="/about">bio</Link>
        </li>

        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
