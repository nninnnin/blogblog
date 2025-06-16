import React from "react";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer
      className={clsx(
        "w-fit",
        "fixed right-0 bottom-0",
        "text-right text-[gainsboro]",
        "p-[4px] pr-[16px]",
        "text-[12px]",
        "cursor-pointer",
        "select-none"
      )}
    >
      All rights reserved &copy; 2025 이동규
    </footer>
  );
};

export default Footer;
