// 📁 src/components/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-screen overflow-hidden text-white font-sans"
    >
      {/* 🔴 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔳 Dark Overlay with Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-sm" />

      {/* ✨ Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
        >
          Hello, I’m <span className="text-yellow-400">Pankaj</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          A Full Stack Developer with a Designer’s Eye & a Coder’s Logic.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-8 inline-block px-8 py-3 rounded-full border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md shadow-yellow-500/30 hover:shadow-yellow-500/70 animate-float"
        >
          🚀 View Projects
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
