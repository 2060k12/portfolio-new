import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import "./../../css/project_detail.css";
import "./../../css/crusor.css";
import data from "././../../../projects.json";
const ProductDetails = () => {
  const titleRef = useRef(null);
  const left = useRef(null);
  const right = useRef(null);
  const ss = useRef(null);

  const { id } = useParams();
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const project = data.find((item) => item.id === id);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: -200,
      duration: 1,
      opacity: 0,
    });
    gsap.from(left.current, {
      x: -200,
      duration: 1,
      opacity: 0,
    });
    gsap.from(right.current, {
      x: 200,
      duration: 1,
      opacity: 0,
    });
    gsap.from(ss.current, {
      y: 200,
      duration: 1,
      opacity: 0,
    });
  }, []);

  return project?.id ? (
    <div className="project-detail">
      <div className="crsr"></div>
      <div ref={titleRef} className="title">
        <h1>{project?.title}</h1>
        <img src="/github-mark-white.svg" alt="" height="50" />
      </div>

      <div className="sub-title">
        <h3>Kotlin, Instagam clone</h3>
        <div>
          <img src="/Kotlin.svg" alt="" height="50" />
          <img src="/Android.svg" alt="" height="50" />
        </div>
      </div>
      <div className="vdo"></div>
      <div className="overview">
        <div className="overview-video-grid">
          <iframe
            ref={left}
            width="560"
            height="315"
            src={project?.video}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; muted; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div ref={right} className="right">
            <p>{project.overview}</p>
            <br />
            <div className="feature">
              <h4>Features</h4>
              {project?.features.map((item) => (
                <h5>{item}</h5>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div ref={ss} className="ss-section">
        <h2>Screenshots</h2>

        <div className="screenshots-imgs">
          {project.screenshot.map((item) => (
            <img src={item} alt="" />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Project Not Found</h1>
    </div>
  );
};

export default ProductDetails;
