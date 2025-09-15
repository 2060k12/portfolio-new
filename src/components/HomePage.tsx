import HeroPage from "./HeroPage";
import TechIconPage from "./TechIconPage";
import ProjectList from "./products/ProjectList";
import ContactForm from "./contact/ContactForm";
import Footer from "./Footer";
import About from "./About";

const HomePage = () => {
  return (
    <div id="main" data-scroll-container style={{ overflow: "hidden" }}>
      <HeroPage />
      <TechIconPage />
      <About />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
