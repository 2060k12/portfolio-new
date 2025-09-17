import TechIconPage from "./components/TechIconPage";
import ProjectList from "./components/products/ProjectList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/products/ProductDetails";
import HomePage from "./components/HomePage";
import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<App />} />
          <Route path="/tech" element={<TechIconPage />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/work/:id" element={<ProductDetails />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
};

export default App;
