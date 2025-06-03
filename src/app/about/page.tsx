import React from "react";

const AboutPage = () => {
  return (
    <div className="p-[1em]">
      <div>
        <h2 className="text-[1.2em] font-medium">Education</h2>
        <ul className="p-[1em]">
          <li>B.A in International Business, Dankook University</li>
        </ul>
      </div>

      <div className="mt-[1em]">
        <h2 className="text-[1.2em] font-medium">Career</h2>
        <ul className="p-[1em]">
          <li>
            Carrot General Insurance(캐롯손해보험), insurtech company
            <ul className="pl-[1em] p-[0.5em]">
              <li>∗ FE web developer</li>
            </ul>
          </li>

          <li>
            Vanilla Coding(바닐라코딩), web development bootcamp
            <ul className="pl-[1em] p-[0.5em]">
              <li>∗ Web developer</li>
              <li>∗ Learning coach</li>
            </ul>
          </li>

          <li>
            Chopsticks(찹스틱스), e-commerce platform
            <ul className="pl-[1em] p-[0.5em]">
              <li>∗ FE web developer</li>
            </ul>
          </li>
          <li>
            Rebel9(레벨나인), art & technology studio
            <ul className="pl-[1em] p-[0.5em]">
              <li>∗ FE Web Developer</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* <div>
        <h2 className="text-[1.2em] p-[1em] pb-0">Motion Graphics</h2>
        <ul className="p-[1em]">
          <li>..</li>
        </ul>
      </div> */}

      {/* <div>
        <h2 className="text-[1.2em] p-[1em] pb-0">Game Design</h2>
        <ul className="p-[1em]">
          <li>..</li>
        </ul>
      </div> */}
    </div>
  );
};

export default AboutPage;
