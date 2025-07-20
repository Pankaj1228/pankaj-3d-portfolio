// 📁 src/components/LoadingScreen.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 3500); // 4.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Outline draws into a laptop shape and then zooms in */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Laptop Body */}
        <motion.div
          initial={{ height: 2, width: 0 }}
          animate={{ width: 240, height: 160 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="border-4 border-yellow-400 rounded-lg"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="w-full h-full bg-gradient-to-b from-zinc-800 to-black rounded-md flex items-center justify-center"
          >
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8, duration: 0.7 }}
              className="text-neon text-lg font-bold animate-pulse"
            >
            ...WELCOME...
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Base of Laptop */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 240 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="h-3 bg-yellow-500 rounded-b-lg mt-1"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;