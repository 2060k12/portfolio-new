import HeroPage from "./HeroPage";
import TechIconPage from "./TechIconPage";
import ProjectList from "./products/ProjectList";
import ContactForm from "./contact/ContactForm";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div id="main" data-scroll-container style={{ overflow: "hidden" }}>
      <HeroPage />
      <TechIconPage />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
