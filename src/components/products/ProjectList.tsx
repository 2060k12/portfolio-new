import EachProjectCard from "./EachProjectCard";
import "./../../css/project.css";
import data from "./../../../projects.json";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ProjectList = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const listRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 50%",
      },
    });
    const cards = listRef?.current?.querySelectorAll(".each-project-card");
    gsap.from(cards!, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: listRef.current,
        start: "top 60%",
      },
    });
  });

  return (
    <div className="page4">
      <h1 ref={titleRef}>Project</h1>

      <div className="projects" ref={listRef}>
        {data.map((each) => (
          <EachProjectCard
            cName="each-project-card"
            onClick={() => {
              navigate(`work/${each.id}`);
            }}
            key={each.id}
            title={each.title}
            subTitle={each.subTitle}
            tech={each.tech}
            thumnail={each.thumnail}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
