import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTerminal from "./components/AboutTerminal";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimate from "./components/ScrollAnimate";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text">
        <Navbar />
        <main>
          {/* Hero Section */}
          <ScrollAnimate>
            <Hero />
          </ScrollAnimate>

          {/* About Section */}
          <ScrollAnimate delay={0.1}>
            <AboutTerminal />
          </ScrollAnimate>

          {/* Tech Stack Section */}
          <ScrollAnimate delay={0.1}>
            <TechStack />
          </ScrollAnimate>

          {/* Projects Section */}
          <ScrollAnimate delay={0.1}>
            <Projects />
          </ScrollAnimate>

          {/* Contact Section */}
          <ScrollAnimate delay={0.1}>
            <Contact />
          </ScrollAnimate>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}