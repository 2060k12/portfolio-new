import HeroPage from "./HeroPage";
import TechIconPage from "./TechIconPage";
import ProjectPage from "./products/ProjectPage";
import ProjectList from "./products/ProjectList";
import ContactForm from "./contact/ContactForm";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div id="main">
      <HeroPage />
      <TechIconPage />
      <ProjectPage />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
