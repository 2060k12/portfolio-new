import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./../css/about.css";
import gsap from "gsap";
import { useRef } from "react";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      duration: 1,
      y: -10,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: titleRef.current,
        scroller: window,
        start: "top 90%",
        scrub: 2,
      },
    });

    tl.from(bodyRef.current, {
      duration: 2,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: titleRef.current,
        scroller: window,
        start: "top 90%",
        scrub: 2,
      },
    });

    tl.from(itemsRef.current, {
      duration: 2,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: titleRef.current,
        scroller: window,
        start: "top 70%",
        scrub: 2,
      },
    });
  });

  return (
    <div className="about-page">
      <h1 ref={titleRef}>About</h1>
      <p ref={bodyRef}>
        I am a full-stack developer with expertise in both web and mobile app
        development. I build native mobile apps using Kotlin, Java, and Swift,
        and cross-platform apps with Flutter and React Native. On the web, I
        create dynamic websites using React, and for the backend, I primarily
        work with Node.js using Express or Next.js. I also have experience with
        .NET and am currently learning Spring Boot. Additionally, I am familiar
        with TypeScript, testing frameworks, and UI/UX design, enabling me to
        build applications that are both functional and user-friendly.
      </p>
      <div className="container" ref={itemsRef}>
        <div className="tech-stacks">
          <img src="about/frontend.jpg" alt="" />

          <h2>Frontend </h2>
          <h3>
            Responsive design, React development, Interactive UI, User-friendly
            interfaces, Clean maintainable code
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
  );
};

export default About;
