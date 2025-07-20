// src/components/MouseFollower.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show robot with entrance animation
    const timer = setTimeout(() => setVisible(true), 500);

    // Listen to clicks
    const handleClick = (e) => {
      setPosition({ x: e.clientX - 50, y: e.clientY - 50 });
    };

    window.addEventListener("click", handleClick);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <motion.img
      src="/download (1).png"
      alt="robot"
      initial={{ opacity: 1, scale: 1.5 }}
      animate={
        visible
          ? { opacity: 1, scale: 1, x: position.x, y: position.y }
          : {}
      }
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed z-[9999] w-20 h-20 md:w-25 md:h-25 pointer-events-none"
    />
  );
};

export default MouseFollower;
