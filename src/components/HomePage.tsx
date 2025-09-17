import HeroPage from "./HeroPage";
import TechIconPage from "./TechIconPage";
import ProjectList from "./products/ProjectList";
import ContactForm from "./contact/ContactForm";
import Footer from "./Footer";
import About from "./About";
import "../css/crusor.css";
import { useEffect, useRef } from "react";
import "../css/hero.css";
import LoadingScreen from "./LoadingScreen";

const HomePage = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="main">
      {/* <LoadingScreen /> */}
      <div id="content">
        <div className="crsr" ref={cursorRef}></div>
        <HeroPage />
        <TechIconPage />
        <About />
        <ProjectList />
        <ContactForm />

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
