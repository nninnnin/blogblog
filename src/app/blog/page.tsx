import clsx from "clsx";
import React from "react";

const BlogPage = () => {
  return (
    <div className={clsx("p-[1em]")}>
      <ul className="flex flex-col gap-[0.5em]">
        <li
          className={clsx(
            "border-b-[3px] border-dotted border-[gainsboro] pb-[0.5em]"
          )}
        >
          <a
            className={clsx(
              "transition-all duration-200",
              "font-semibold hover:font-black",
              "tracking-tight hover:tracking-normal",
              "hover:text-[gainsboro]"
            )}
            href="blog/sjf2025"
          >
            2025 서울 재즈 페스티벌
          </a>
        </li>

        {/* <li className="border-b-[3px] border-dotted border-[gainsboro] pb-[0.5em]">
          <a href="blog/sjf2025">내 생애 첫 창녀와의 섹스</a>
        </li>

        <li className="border-b-[3px] border-dotted border-[gainsboro] pb-[0.5em]">
          <a href="blog/sjf2025">스페인에서의 기억</a>
        </li>

        <li className="border-b-[3px] border-dotted border-[gainsboro] pb-[0.5em]">
          <a href="blog/sjf2025">getUserMedia 사용하기</a>
        </li>

        <li className="border-b-[3px] border-dotted border-[gainsboro] pb-[0.5em]">
          <a href="blog/sjf2025">불협화음</a>
        </li> */}
      </ul>
    </div>
  );
};

export default BlogPage;
