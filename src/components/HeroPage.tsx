import "../css/hero.css";
// import LoadingScreen from "./LoadingScreen";

const HeroPage = () => {
  return (
    <>
      <div className="page1">
        <h1>Pranish Pathak</h1>
        <h2>Software Engineer</h2>
        <h2>Full Stack Developer</h2>

        <div>
          <img className="scroll" src="icons/scroll.svg" alt="Scroll Icon" />
          {/* <h3>Scroll</h3> */}
        </div>
      </div>
    </>
  );
};

export default HeroPage;
