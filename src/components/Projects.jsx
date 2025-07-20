// 📁 src/components/Projects.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "AI Chatbot",
    description: "Smart assistant powered by NLP & LLMs.",
    image: "/AI Chatbot.jpg",
  },
  {
    title: "3D Portfolio",
    description: "Interactive site using Three.js & GSAP.",
    image: "/3D Portfolio.jpg",
  },
  {
    title: "Reels App",
    description: "Instagram-style short video platform.",
    image: "/Reels App.jpg",
  },
  {
    title: "Hotel Booking",
    description: "MERN stack full booking system.",
    image: "/Hotel Booking.jpg",
  },
  {
    title: "Crypto Tracker",
    description: "Live market data & charts.",
    image: "/project5.jpg",
  },
  {
    title: "Voice Assistant",
    description: "Offline AI with voice commands.",
    image: "/project6.jpg",
  },
  {
    title: "E-Commerce UI",
    description: "Fully animated shopping frontend.",
    image: "/project7.jpg",
  },
  
  {
    title: "Fitness Tracker",
    description: "Dashboard, charts & logs.",
    image: "/project8.jpg",
  },
  {
    title: "AI Image Gen",
    description: "Create images using prompts.",
    image: "/project9.jpg",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 relative z-10 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      {/* ✨ Glowing light behind center card */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[400px] h-[400px] bg-yellow-500 blur-[150px] opacity-30 rounded-full" />
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 3000 }}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 250,
          modifier: 1.2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-6xl px-6 z-10"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {projects.map((proj, index) => (
          <SwiperSlide key={index} className="w-72 md:w-96">
            <motion.div
              whileHover={{ rotateY: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`rounded-xl p-4 shadow-xl relative group transition duration-500 ${
                activeIndex === index ? "bg-black/90 border-yellow-400 border-2" : "bg-[#0c0c0c]"
              }`}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-52 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-yellow-300">{proj.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{proj.description}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
