import clsx from "clsx";
import Link from "next/link";

const Nav = () => {
  return (
    <div
      className={clsx(
        "flex justify-between items-center",
        "pr-[1em]",
        "select-none",
        "text-[deepskyblue]"
      )}
    >
      <div
        className={clsx(
          "text-[12px] tracking-tight",
          "p-[8px] pl-[14px] pr-[100px]",
          "w-full",
          "font-bold"
        )}
      >
        <Link href="/">Justin Donggyu Lee</Link>
      </div>

      <ul className={clsx("flex", "gap-[1em]")}>
        <li>
          <Link href="/about">Bio</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
