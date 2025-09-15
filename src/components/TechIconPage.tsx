import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./../css/tech.css";

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
        <img src="icons/HTML5.svg" alt="" />
        <img src="icons/CSS3.svg" alt="" />
        <img src="icons/JavaScript.svg" alt="" />
        <img src="icons/React.svg" alt="" />
        <img
          src="icons/Express.svg"
          alt=""
          style={{
            color: "white",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: 2,
          }}
        />
        <img src="icons/Vite.js.svg" alt="" />
        <img src="icons/Node.js.svg" alt="" />
        <img src="icons/Tailwind CSS.svg" alt="" />

        <img src="icons/Webflow.svg" alt="" />
        <img src="icons/WordPress.svg" alt="" />
      </div>

      <div className="second" ref={second}>
        <img src="icons/Java.svg" alt="" />
        <img src="icons/Spring.svg" alt="" />
        <img src="icons/Android.svg" alt="" />
        <img src="icons/Git.svg" alt="" />
        <img src="icons/GitHub.svg" alt="" />
        <img src="icons/GitLab.svg" alt="" />
        <img src="icons/PostgresSQL.svg" alt="" />
        <img src="icons/MySQL.svg" alt="" />
        <img src="icons/MongoDB.svg" alt="" />
        <img src="icons/apple.png" alt="" />
      </div>

      <div className="third" ref={third}>
        <img src="icons/CSharp.svg" alt="" />
        <img src="icons/Digital Ocean.svg" alt="" />
        <img src="icons/GraphQL.svg" alt="" />
        <img src="icons/sqlserver.svg" alt="" />
        <img src="icons/NET core.svg" alt="" />
        <img
          src="icons/Next.js.svg"
          alt=""
          style={{
            color: "white",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: 2,
          }}
        />
        <img src="icons/Postman.svg" alt="" />
        <img src="icons/SQLite.svg" alt="" />
        <img src="icons/Docker.svg" alt="" />
        <img src="icons/Xcode.svg" alt="" />
      </div>

      <div className="forth" ref={forth}>
        <img src="icons/Adobe Photoshop.svg" alt="" />
        <img src="icons/Redis.svg" alt="" />
        <img src="icons/Adobe Illustrator.svg" alt="" />
        <img src="icons/AWS.svg" alt="" />
        <img src="icons/Dart.svg" alt="" />
        <img src="icons/Redux.svg" alt="" />
        <img src="icons/Flutter.svg" alt="" />
        <img src="icons/Kotlin.svg" alt="" />
        <img src="icons/Swift.svg" alt="" />
        <img src="icons/Firebase.svg" alt="" />
      </div>
    </div>
  );
};

export default TechIconPage;
