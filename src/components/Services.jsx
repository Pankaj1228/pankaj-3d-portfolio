// 📁 src/components/Services.jsx
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCode, FaPaintBrush, FaDatabase } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={30} className="text-yellow-300" />,
    title: "Frontend Development",
    description:
      "Building responsive, animated, and modern UIs using React.js, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"]
  },
  {
    icon: <FaDatabase size={30} className="text-pink-400" />,
    title: "Backend Development",
    description:
      "Designing scalable APIs and server-side logic using Node.js, Express.js, and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    icon: <FaPaintBrush size={30} className="text-blue-400" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive designs and user experiences with Figma, Photoshop, and clean design systems.",
    tags: ["Figma", "Photoshop", "Design Systems"]
  }
];

const Services = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6 md:px-24 overflow-hidden">
      {/* ✨ Animated Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-1/4 left-1/3 animate-ping opacity-20" />
        <div className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full top-2/3 left-2/3 animate-ping opacity-30" />
        <div className="absolute w-1 h-1 bg-blue-400 rounded-full top-3/4 left-1/4 animate-ping opacity-40" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500 bg-clip-text text-transparent z-10 relative"
      >
        What I Offer
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
        {services.map((service, idx) => (
          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} key={idx}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2, type: "spring" }}
              className="relative group p-8 rounded-3xl bg-zinc-900/60 backdrop-blur border border-zinc-700 shadow-lg overflow-hidden hover:shadow-yellow-300/40 transition-all duration-500"
            >
              {/* 🔆 Hologram Light Ring */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-400 to-blue-500 blur-2xl opacity-25 group-hover:scale-125 transition-all duration-500" />

              <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-yellow-200 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                {service.description}
              </p>

              {/* 🧠 Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 text-sm text-white border border-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Services;
