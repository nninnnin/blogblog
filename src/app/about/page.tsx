import React from "react";

const AboutPage = () => {
  return (
    <div className="p-[1em] text-[gainsboro] transition-all duration-200 hover:text-amber-500 cursor-grab">
      <div>
        <h2 className="text-md font-medium">Education</h2>
        <ul className="p-[1em] text-xs">
          <li>B.A in International Business, Dankook University</li>
        </ul>
      </div>

      <div>
        <h2 className="text-md font-medium">Professional Experience</h2>
        <ul className="p-[1em] flex flex-col gap-[1em] text-xs">
          <li>
            Rebel9 (레벨나인) – Art & Technology Studio
            <ul className="pl-[2em] mt-[0.5em]">
              <li>Front-end Web Developer</li>
              <li>
                Merged interactive web development with artistic direction,
                contributing to immersive and aesthetic-driven web experiences.
              </li>
            </ul>
          </li>

          <li>
            Chopsticks (찹스틱스) – E-commerce Platform
            <ul className="pl-[2em] mt-[0.5em]">
              <li>Front-end Web Developer</li>
              <li>
                Built user-facing features with performance and scalability in
                mind, enhancing shopping experiences and interface
                accessibility.
              </li>
            </ul>
          </li>

          <li>
            Vanilla Coding (바닐라코딩) – Web Development Bootcamp
            <ul className="pl-[2em] mt-[0.5em]">
              <li>Web Developer / Learning Coach</li>
              <li>
                Mentored aspiring developers through full-time curriculum, while
                supporting learners in deepening their understanding of web
                technologies and self-directed learning.
              </li>
            </ul>
          </li>

          <li>
            Carrot General Insurance (캐롯손해보험) – Insurtech Company
            <ul className="pl-[2em] mt-[0.5em]">
              <li>Front-end Web Developer</li>
              <li>
                Developed and maintained responsive web applications in a
                regulation-sensitive environment, ensuring stability and
                reliability in production services.
              </li>
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
