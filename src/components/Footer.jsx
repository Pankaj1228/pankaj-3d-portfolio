// 📁 src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-zinc-900 to-black text-white py-16 px-6 md:px-24 overflow-hidden">
      {/* Glowing Circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-400 to-blue-500 blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500 via-yellow-300 to-pink-400 blur-3xl opacity-20 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mb-8">
          Whether you want to collaborate, ask a question, or just say hi — I'm always open.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <motion.a
            href="https://github.com/yourgithub"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-yellow-300 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://instagram.com/yourinsta"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="mailto:youremail@example.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </motion.a>
        </div>

        <p className="mt-10 text-sm text-gray-500">© {new Date().getFullYear()} Pankaj Saharan. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
