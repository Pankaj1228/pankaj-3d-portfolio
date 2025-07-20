// 📁 src/components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative min-h-screen px-6 py-24 md:px-20 bg-black text-white overflow-hidden">
      {/* 🔵 Neon Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gradient-to-tr from-yellow-500 via-pink-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
      <div className="absolute bottom-[-15%] right-[-15%] w-96 h-96 bg-gradient-to-tr from-blue-600 via-yellow-300 to-pink-500 rounded-full blur-3xl opacity-25 animate-pulse z-0" />

      {/* 🚀 Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md z-10"
      >
        Who Am I?
      </motion.h2>

      {/* 🧊 Hologram Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative z-10 mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_40px_rgba(255,255,255,0.1)]"
      >
        {/* 🧑‍💻 Hologram Image Block */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
          {/* ✨ Beam Light */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-pink-500 to-transparent animate-pulse blur-sm opacity-50" />

          {/* ✨ Projected Photo */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-yellow-500 animate-glow hover:scale-105 transition-transform duration-300">
            <img
              src="/Myphoto.jpg"
              alt="Pankaj Saharan"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-200/5 to-white/5 mix-blend-overlay pointer-events-none" />
          </div>

          {/* ✨ Circular Ring Glow */}
          <div className="absolute -bottom-4 w-40 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 blur-lg rounded-full opacity-40 animate-pulse" />
        </div>

        {/* 👨‍💻 Text */}
        <div className="text-base md:text-lg text-gray-300 leading-8 max-w-xl">
          <p>
            <span className="text-yellow-400 font-semibold">🚀 Pankaj Saharan</span> here — 
            a passionate <span className="text-blue-400">Full Stack Developer</span> blending creativity with code.
            I specialize in <span className="text-pink-400">React.js</span>, <span className="text-yellow-300">Node.js</span>, and <span className="text-blue-400">MongoDB</span>,
            building sleek web interfaces and powerful backends.
          </p>
          <br />
          <p>
            I also bring experience in <span className="text-pink-400">Figma</span>, <span className="text-yellow-300">Photoshop</span>, and <span className="text-blue-400">WordPress</span>,
            aiming to merge design with data for complete solutions.
          </p>
          <br />
          <p>
            From designing modern UIs to solving real-world problems with backend logic — I enjoy transforming ideas into engaging digital experiences.
          </p>
        </div>
      </motion.div>

      {/* 🌟 Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-1 h-1 bg-yellow-500 rounded-full top-[20%] left-[30%] animate-ping opacity-40" />
        <div className="absolute w-1 h-1 bg-blue-500 rounded-full top-[70%] left-[50%] animate-ping opacity-30" />
        <div className="absolute w-1 h-1 bg-pink-500 rounded-full top-[50%] left-[80%] animate-ping opacity-40" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[60%] animate-ping opacity-10" />
      </div>
    </section>
  );
};

export default About;
