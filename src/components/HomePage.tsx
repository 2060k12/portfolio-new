import HeroPage from "./HeroPage";
import TechIconPage from "./TechIconPage";
import ProjectList from "./products/ProjectList";
import ContactForm from "./contact/ContactForm";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div id="main" data-scroll-container style={{ overflow: "hidden" }}>
      <h1
        style={{
          backgroundColor: "red",
          textAlign: "center",
          padding: "1vw",
        }}
      >
        Hang Tight! I’m Making Some Improvements
      </h1>
      <HeroPage />
      <TechIconPage />
      <ProjectList />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
