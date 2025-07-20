// src/components/SectionTransition.jsx
import { motion } from "framer-motion";

const SectionTransition = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-yellow-300 text-3xl font-bold animate-pulse"
      >
        Switching...
      </motion.div>
    </motion.div>
  );
};

export default SectionTransition;
