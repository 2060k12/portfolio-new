import DesktopImg from "./DesktopImg";
import MobileImgGroup from "./MobileImgGroup";

export interface ProjectInterface {
  title?: string;
  subTitle?: string;
  github?: string;
  overview?: string;
  features?: string[];
  video?: string;
  screenshots?: string[];
  thumnail?: string[];
  tech?: string;
  onClick: () => void;
  cName: string;
}

const EachProjectCard = ({
  cName,
  title,
  subTitle,
  tech,
  thumnail,
  onClick,
}: ProjectInterface) => {
  return (
    <div className={`update-container ${cName}`} onClick={onClick}>
      <div className="elem1">
        <h3>{title}</h3>

        {thumnail?.length === 1 ? (
          <div className="image">
            <DesktopImg img={thumnail[0]} />
          </div>
        ) : (
          <div className="image">
            <MobileImgGroup imgs={thumnail ? thumnail : []} />
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
