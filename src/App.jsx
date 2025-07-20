import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [loadingFinished, setLoadingFinished] = useState(false);

  // ⏳ Initial loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingFinished(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 📜 Sidebar shows only when Hero section is visible
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      if (!section) return;

      const { top, bottom } = section.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom > 0;

      setShowSidebar(isVisible);
    };

    handleScroll(); // run once at start
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⏳ Show loader before app renders
  if (!loadingFinished) return <LoadingScreen />;

  return (
    <div className="relative font-sans bg-black text-white overflow-x-hidden">
      <Toaster position="top-right" reverseOrder={false} />
      {showSidebar && <SocialSidebar />}
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
