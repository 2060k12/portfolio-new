import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./../css/about.css";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = window.innerWidth < 768;
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const startTitle = "top 90%";

    tl.from(titleRef.current, {
      duration: 1,
      y: 40,
      opacity: 0,
      stagger: 0.5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: isMobile ? "top 95%" : startTitle,
        scroller: window,
        scrub: 0.2,
      },
    });

    tl.from(
      bodyRef.current,
      {
        duration: 1,
        y: 40,
        opacity: 0,
        scrollTrigger: {
          trigger: titleRef.current,
          start: isMobile ? "top 90%" : startTitle,

          scroller: window,
          scrub: 0.5,
        },
      },
      "a"
    );
  });

  return (
    <div className="about-page">
      <h1 ref={titleRef}>About</h1>
      <div ref={bodyRef}>
        <p>
          I am a full-stack developer with expertise in both web and mobile app
          development. I build native mobile apps using Kotlin, Java, and Swift,
          and cross-platform apps with Flutter and React Native. On the web, I
          create dynamic websites using React, and for the backend, I primarily
          work with Node.js using Express or Next.js. I also have experience
          with .NET and am currently learning Spring Boot. Additionally, I am
          familiar with TypeScript, testing frameworks, and UI/UX design,
          enabling me to build applications that are both functional and
          user-friendly.
        </p>
        <div className="container">
          <div className="tech-stacks">
            <img src="about/frontend.jpg" alt="" />

            <h2>Frontend </h2>
            <h3>
              Responsive design, React development, Interactive UI,
              User-friendly interfaces, Clean maintainable code
            </h3>
          </div>
          <div className="tech-stacks">
            <img src="about/backend.jpg" alt="" />

            <h2>Backend </h2>
            <h3>
              Node.js, Express, Next.js, API development, Database integration,
              Scalable server-side solutions
            </h3>
          </div>
          <div className="tech-stacks">
            <img src="about/mobile.jpg" alt="" />

            <h2>Mobile </h2>
            <h3>
              Native apps with Kotlin, Java, Swift, Cross-platform apps with
              Flutter, React Native, Smooth mobile experience
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
