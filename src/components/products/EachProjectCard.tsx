import DesktopImg from "./DesktopImg";
import MobileImgGroup from "./MobileImgGroup";

export interface Project {
  title?: string;
  subTitle?: string;
  github?: string;
  overview?: string[];
  features?: string[];
  video?: string;
  screenshots?: string[];
  thumnail?: string[];
  tech?: string;
}

const EachProjectCard = ({ title, subTitle, tech, thumnail }: Project) => {
  return (
    <div className="update-container">
      <div className="elem1">
        <h3>{title}</h3>

        {thumnail?.length === 1 ? (
          <div className="image">
            <DesktopImg img={thumnail[0]} title="Social Media" />
          </div>
        ) : (
          <div className="image">
            <MobileImgGroup
              imgs={thumnail ? thumnail : []}
              title={title ? title : "Title Not Found"}
            />
          </div>
        )}
        <div className="detail">
          <h2>{subTitle}</h2>
          <h5>{tech}</h5>
        </div>
      </div>
    </div>
  );
};

export default EachProjectCard;
