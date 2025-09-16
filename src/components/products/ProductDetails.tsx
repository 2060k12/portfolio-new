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
    gsap.from(".project-details .sub-title", {
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
      {/* <div className="crsr"></div> */}
      <div ref={titleRef} className="title">
        <h1>{project?.title}</h1>
        <a
          href={project.github ? project.github : "https://github.com/2060k12"}
        >
          <img src="/icons/github-mark-white.svg" alt="" height="50" />
        </a>
      </div>

      <div className="sub-title">
        <h3>{project.subTitle}</h3>
      </div>
      <div className="vdo"></div>
      <div className="overview">
        <div className="overview-video-grid">
          <div className="div">
            <div ref={ss} className="ss-section">
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
              <h3>Screenshots</h3>

              <div className="screenshots-imgs">
                {project.screenshot.map((item) => (
                  <img src={item} alt="" />
                ))}
              </div>
            </div>
          </div>

          <div ref={right} className="right">
            <p>{project.overview}</p>
            <br />
            <p>
              <h4>Features</h4>
              {project?.features.map((item) => (
                <h6>{item}</h6>
              ))}
            </p>
          </div>
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
