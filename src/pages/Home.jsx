import "../style/global.css";
import Navbar from "../components/UI/Navbar";
import Hero from "../components/feature/Hero";
import Intro from "../components/feature/Intro";
import Projects from "../components/feature/Projects";
import Footer from "../components/UI/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-wrapper">
        <Hero />
        <div className="intro-overlap">
          <Intro />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;