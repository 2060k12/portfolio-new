import EachProjectCard from "./EachProjectCard";
import "./../../css/project.css";
import data from "./../../../projects.json";
import { useNavigate } from "react-router-dom";
const ProjectList = () => {
  const navigate = useNavigate();

  return (
    <div className="page4">
      <h1>Project</h1>

      <div className="projects">
        {data.map((each) => (
          <EachProjectCard
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
