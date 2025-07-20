// 📁 src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import SectionTransition from "./SectionTransition";

const navLinks = ["Home", "About", "Skills", "Services", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleNavClick = (id) => {
    setTransitioning(true);
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setTransitioning(false);
    }, 2000);
  };

  return (
    <>
      <SectionTransition isActive={transitioning} />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* 🔥 Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black text-neon tracking-wider"
          >
            PANKAJ
          </motion.h1>

          {/* 🌐 Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(link)}
                className="relative text-white hover:text-neon transition text-sm font-medium tracking-wide group"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-neon transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          {/* 📱 Mobile Toggle */}
          <div
            className="md:hidden text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </div>
        </div>

        {/* 📱 Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden px-6 pb-6 bg-zinc-900/80 backdrop-blur-md"
            >
              <ul className="flex flex-col gap-4 pt-4">
                {navLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleNavClick(link)}
                      className="w-full text-left text-white hover:text-neon transition font-medium tracking-wide"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
