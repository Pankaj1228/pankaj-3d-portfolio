// 📁 src/components/SocialSidebar.jsx
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaEnvelope, FaTimes, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";

const socials = [
  {
    id: 1,
    icon: <FaGithub size={22} />,
    link: "https://github.com/your_username",
    label: "GitHub",
    color: "bg-gray-900"
  },
  {
    id: 2,
    icon: <FaInstagram size={22} />,
    link: "https://www.instagram.com/pankaj_.saharan?igsh=MTg4YzRwM2g1YXV2Yw%3D%3D&utm_source=qr",
    label: "Instagram",
    color: "bg-pink-600"
  },
  {
    id: 3,
    icon: <SiGmail size={22} />,
    link: "mailto:pankajsaharan276@gmail.com",
    label: "Gmail",
    color: "bg-red-600"
  },
  {
    id: 4,
    icon: <FaLinkedin size={22} />,
    link: "https://www.linkedin.com/in/pankaj-saharan-a2ba67281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    color: "bg-blue-700"
  }
];

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const [floating, setFloating] = useState(true);

  useEffect(() => {
    let interval;

    const move = () => {
      const x = Math.random() * (window.innerWidth - 80);
      const y = Math.random() * (window.innerHeight - 80);
      controls.start({
        x,
        y,
        transition: { duration: 4, ease: "easeInOut" }
      });
    };

    if (floating) {
      move();
      interval = setInterval(move, 5000);
    }

    return () => clearInterval(interval);
  }, [controls, floating]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setFloating(isOpen); // ❗ Stop moving when opening, start when closing
  };

  return (
    <motion.div
      className="fixed z-50"
      animate={controls}
      initial={{ x: 50, y: 300 }}
    >
      {/* 🔘 Floating Circle Button */}
      <motion.div
        onClick={togglePanel}
        whileTap={{ scale: 0.95 }}
        title="Connect"
        className="w-16 h-16 rounded-full border-2 border-neon bg-white/5 backdrop-blur-md shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 transition animate-float"
      >
        {isOpen ? (
          <FaTimes size={22} className="text-neon" />
        ) : (
          <FaEnvelope size={22} className="text-neon" />
        )}
      </motion.div>

      {/* 🔓 Expanded Social Links Panel */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-3">
          {socials.map(({ id, icon, link, label, color }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 6 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-sm bg-white/10 text-white text-sm font-medium shadow-md ${color}`}
            >
              {icon}
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SocialSidebar;
