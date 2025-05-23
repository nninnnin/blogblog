import clsx from "clsx";
import Link from "next/link";

const Nav = () => {
  return (
    <div
      className={clsx(
        "border-b-[1px]",
        "p-[4px]",
        "flex justify-between items-center",
        "px-[1em] pl-[0.5em]"
      )}
    >
      <div className="text-[12px]">
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
