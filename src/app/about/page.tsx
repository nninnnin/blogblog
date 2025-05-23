import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div>
        <h2 className="text-[1.2em] p-[1em] pb-0">Education</h2>
        <ul className="p-[1em]">
          <li>
            B.A in International Business Administration, Dankook University
          </li>
        </ul>
      </div>

      <hr />

      <div>
        <h2 className="text-[1.2em] p-[1em] pb-0">Web Development</h2>
        <ul className="p-[1em]">
          <li>Carrot General Insurance(캐롯손해보험) Frontend Web Developer</li>
          <li>
            Vanilla Coding(바닐라코딩) Learning coach & Fullstack Web Developer{" "}
          </li>
          <li>Chopsticks(찹스틱스) Frontend Web Developer</li>
          <li>Rebel9(레벨나인) Frontend Web Developer</li>
        </ul>
      </div>

      <hr />

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
