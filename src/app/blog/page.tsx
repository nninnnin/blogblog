import clsx from "clsx";
import React from "react";

const BlogPage = () => {
  return (
    <div
      className={clsx(
        "p-[1em]",
        "transition-all duration-100",
        "text-[gainsboro] hover:text-green-300",
        "border-[gainsboro] hover:border-text-green-300",
        "text-sm text-right"
      )}
    >
      <ul className="flex flex-col gap-[0.5em]">
        <a
          className={clsx(
            "transition-all duration-100",
            "font-semibold",
            "tracking-wide"
          )}
          href="blog/sjf2025"
        >
          <li className={clsx("border-b-[3px] border-dotted pb-[0.5em]")}>
            2025 서울 재즈 페스티벌
          </li>
        </a>

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
