import { useGSAP } from "@gsap/react";
import "./../css/hero.css";
import gsap from "gsap";
import { useState } from "react";

const LoadingScreen = () => {
  const [loadNum, setLoadNum] = useState(0);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".line h1", {
      y: 150,
      stagger: 0.3,
      duration: 0.6,
      delay: 0.4,
    });

    tl.from(".line1-part1, .line h2", {
      opacity: 0,
      onstart: startAnimation,
    });

    tl.to(".loader", {
      opacity: 0,
      duration: 0.4,
      y: -1200,
      delay: 2,
    });
    tl.to(
      ".loadingScreen",
      {
        height: 0,
        display: "none",
        duration: 0.5,
      },
      "hide"
    );
    tl.from(
      ".page1",
      {
        delay: 0,
        opacity: 0,
        duration: 0.5,
        y: 1200,
        ease: "power4",
      },
      "hide"
    );
  });

  function startAnimation() {
    let count = 0;
    setInterval(() => {
      if (count < 100) {
        setLoadNum(count++);
      } else {
        setLoadNum(count);
      }
    }, 37);
  }

  return (
    <div className="loadingScreen">
      <div className="loader">
        <div className="line">
          <div className="line1-part1">
            <h5>{loadNum}</h5>
            <h6>- 100</h6>
          </div>
          <h1>Something</h1>
        </div>

        <div className="line">
          <h1>Awesome is brewing</h1>
        </div>
        <div className="line">
          <h1>Behind the scenes</h1>
          <h2>Now</h2>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
