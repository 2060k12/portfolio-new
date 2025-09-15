import EachProjectCard from "./EachProjectCard";
import "./../../css/project.css";
import data from "./../../../projects.json";
const ProjectList = () => {
  return (
    <div className="page4">
      <div className="projects">
        {data.map((each) => (
          <EachProjectCard
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
