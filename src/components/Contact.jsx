// 📁 src/components/Contact.jsx
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen relative z-10 bg-gradient-to-br from-black via-zinc-900 to-black px-6 md:px-24 py-24 overflow-hidden">
      {/* 🌌 Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-600 blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-400 via-yellow-300 to-pink-500 blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* 🏷️ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md"
      >
        Connect with Me
      </motion.h2>

      {/* 🔗 Contact Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto z-10">
        {/* 📱 Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/70 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-10 space-y-6 transform transition-transform hover:scale-[1.02] hover:shadow-yellow-300/10"
        >
          <p className="text-lg text-zinc-300 leading-relaxed">
            🚀 <span className="text-yellow-300 font-bold">Pankaj Saharan</span> here.
            I'm open to freelance, internship, collabs, or futuristic startup ideas.
            Let’s build something epic!
          </p>

          <div className="space-y-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 63677 73869</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <span>pankajsaharan276@gmail.com</span>
            </div>
          </div>

          {/* 🌐 Social Media Icons */}
          <div className="flex gap-6 text-xl pt-2">
            <a
              href="https://www.instagram.com/pankaj_.saharan?igsh=MTg4YzRwM2g1YXV2Yw%3D%3D&utm_source=qr"
              target="_blank"
              className="hover:scale-125 transition-transform text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:scale-125 transition-transform text-yellow-300"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:pankajsaharan276@gmail.com"
              className="hover:scale-125 transition-transform text-blue-400"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/916367773869"
              target="_blank"
              className="hover:scale-125 transition-transform text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* 📬 Contact Form */}
        <motion.form
          action="https://formsubmit.co/pankajsaharan276@gmail.com"
          method="POST"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/70 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-10 space-y-6 transform transition-transform hover:scale-[1.02] hover:shadow-pink-400/10"
        >
          {/* 🛡️ Hidden fields for FormSubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://your-portfolio.vercel.app/thank-you" />

          <input
            type="hidden"
            name="_next"
            value="https://pankajsaharan.vercel.app/thank-you"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="bg-zinc-800/70 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="bg-zinc-800/70 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your Message"
            className="w-full bg-zinc-800/70 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.07 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400 text-black font-bold px-6 py-3 rounded-full shadow-md hover:shadow-yellow-400/30 transition"
          >
            ✉️ Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
