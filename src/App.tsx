import TechIconPage from "./components/TechIconPage";
import ProjectList from "./components/products/ProjectList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<App />} />
        <Route path="/tech" element={<TechIconPage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/work/:id" element={<ProductDetails />} />
      </Routes>
      {/* <HeroPage /> */}
    </Router>
  );
};

export default App;
