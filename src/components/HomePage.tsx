import React from "react";
import HeroPage from "./HeroPage";
import TechIconPage from "./TechIconPage";
import ProjectPage from "./ProjectPage";
import ProjectList from "./ProjectList";

const HomePage = () => {
  return (
    <div id="main">
      <HeroPage />
      <TechIconPage />
      <ProjectPage />
      <ProjectList />
    </div>
  );
};

export default HomePage;
