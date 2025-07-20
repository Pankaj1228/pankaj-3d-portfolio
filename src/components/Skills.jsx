// 📁 src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaCode, FaTools } from "react-icons/fa";
import { useState } from "react";
import Draggable from "react-draggable";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Python", level: 80 },
  { name: "C/C++", level: 70 },
];

const tools = [
  { name: "VS Code", level: 95 },
  { name: "Git/GitHub", level: 90 },
  { name: "Photoshop", level: 80 },
  { name: "Figma", level: 85 },
  { name: "WordPress", level: 75 },
];

const CircularSkill = ({ name, level }) => {
  const radius = 40;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <Draggable>
      <motion.div
        className="flex flex-col items-center gap-2 group cursor-move"
        whileHover={{ scale: 1.1, rotateY: 10, rotateX: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative">
          <svg
            height={radius * 2}
            width={radius * 2}
            className="transform -rotate-90"
          >
            <circle
              stroke="#2d2d2d"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="url(#gradient)"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={circumference + " " + circumference}
              strokeDashoffset={circumference - (level / 100) * circumference}
            />
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              className="fill-white text-sm font-bold"
            >
              {level}%
            </text>
          </svg>
        </div>
        <div className="relative group">
          <span className="text-sm mt-1 group-hover:text-yellow-400 transition-all duration-300">
            {name}
          </span>
        </div>
      </motion.div>
    </Draggable>
  );
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6 md:px-24 relative overflow-hidden">
      {/* 💫 Animated Gradient Glows */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-gradient-to-tr from-yellow-400 via-pink-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-gradient-to-tr from-blue-500 via-yellow-300 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500 bg-clip-text text-transparent"
      >
        My Skills & Tools
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        {/* 🧠 Developer Skills */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-3xl border border-zinc-700 shadow-lg relative overflow-hidden hover:shadow-yellow-500/30 transition-all duration-500"
        >
          <div className="absolute inset-0 border-2 border-yellow-400 rounded-3xl animate-pulse blur-md opacity-20 pointer-events-none"></div>

          <div className="flex items-center gap-2 text-yellow-300 text-2xl font-bold mb-6">
            <FaCode />
            Developer Stack
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <CircularSkill key={i} name={skill.name} level={skill.level} />
            ))}
          </div>
        </motion.div>

        {/* ⚒️ Tools */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/50 backdrop-blur-md p-8 rounded-3xl border border-zinc-700 shadow-lg relative overflow-hidden hover:shadow-pink-500/30 transition-all duration-500"
        >
          <div className="absolute inset-0 border-2 border-pink-400 rounded-3xl animate-pulse blur-md opacity-20 pointer-events-none"></div>

          <div className="flex items-center gap-2 text-pink-400 text-2xl font-bold mb-6">
            <FaTools />
            Tools & Platforms
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {tools.map((tool, i) => (
              <CircularSkill key={i} name={tool.name} level={tool.level} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
