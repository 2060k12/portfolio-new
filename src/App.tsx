import React from "react";
import HeroPage from "./components/HeroPage";
import TechIconPage from "./components/TechIconPage";
import ProjectPage from "./components/ProjectPage";
import ProjectList from "./components/ProjectList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tech" element={<TechIconPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/project/:id" element={<ProductDetails />} />
      </Routes>
      {/* <HeroPage /> */}
    </Router>
  );
};

export default App;
