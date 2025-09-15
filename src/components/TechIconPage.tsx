import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const TechIconPage = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const forth = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(first.current, {
      x: "-40vw",
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: first.current,
        markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: true,
      },
    });
    gsap.from(second.current, {
      x: "40vw",
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: second.current,
        start: "top 70%",
        end: "top 30%",
        scrub: true,
      },
    });
    gsap.from(third.current, {
      x: "-40vw",
      opacity: 0,
      duration: 2,

      scrollTrigger: {
        trigger: third.current,
        start: "top 70%",
        end: "top 0%",
        scrub: true,
      },
    });
    gsap.from(forth.current, {
      x: "40vw",
      opacity: 0,
      duration: 2,

      scrollTrigger: {
        trigger: forth.current,
        start: "top 70%",
        end: "top 0%",
        scrub: true,
      },
    });
  });

  return (
    <div className="page2">
      <div className="first" ref={first}>
        <img src="/HTML5.svg" alt="" />
        <img src="/CSS3.svg" alt="" />
        <img src="/JavaScript.svg" alt="" />
        <img src="/React.svg" alt="" />
        <img
          src="/Express.svg"
          alt=""
          style={{
            color: "white",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: 2,
          }}
        />
        <img src="/Vite.js.svg" alt="" />
        <img src="/Node.js.svg" alt="" />
        <img src="/Tailwind CSS.svg" alt="" />

        <img src="/Webflow.svg" alt="" />
        <img src="/WordPress.svg" alt="" />
      </div>

      <div className="second" ref={second}>
        <img src=" /Java.svg" alt="" />
        <img src=" /Spring.svg" alt="" />
        <img src=" /Android.svg" alt="" />
        <img src=" /Git.svg" alt="" />
        <img src=" /GitHub.svg" alt="" />
        <img src=" /GitLab.svg" alt="" />
        <img src=" /PostgresSQL.svg" alt="" />
        <img src=" /MySQL.svg" alt="" />
        <img src=" /MongoDB.svg" alt="" />
        <img src=" /apple.png" alt="" />
      </div>

      <div className="third" ref={third}>
        <img src=" /CSharp.svg" alt="" />
        <img src=" /Digital Ocean.svg" alt="" />
        <img src=" /GraphQL.svg" alt="" />
        <img src=" /sqlserver.svg" alt="" />
        <img src=" /NET core.svg" alt="" />
        <img
          src=" /Next.js.svg"
          alt=""
          style={{
            color: "white",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: 2,
          }}
        />
        <img src=" /Postman.svg" alt="" />
        <img src=" /SQLite.svg" alt="" />
        <img src=" /Docker.svg" alt="" />
        <img src=" /Xcode.svg" alt="" />
      </div>

      <div className="forth" ref={forth}>
        <img src=" /Adobe Photoshop.svg" alt="" />
        <img src=" /Redis.svg" alt="" />
        <img src=" /Adobe Illustrator.svg" alt="" />
        <img src=" /AWS.svg" alt="" />
        <img src=" /Dart.svg" alt="" />
        <img src=" /Redux.svg" alt="" />
        <img src=" /Flutter.svg" alt="" />
        <img src=" /Kotlin.svg" alt="" />
        <img src=" /Swift.svg" alt="" />
        <img src=" /Firebase.svg" alt="" />
      </div>
    </div>
  );
};

export default TechIconPage;
