import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import devNuel from "../assets/media/devNuel.jpg";
import { roles } from "../utils/roles";
import HireMe from "./btn/HireMe";
import Résumé from "./btn/Résumé";

export default function Infobox() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#020617] rounded-t-4xl p-8 text-white mt-10 rethink-sans relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16, 185, 129, 0.35), transparent)`,
        }}
      ></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#a1f452] block"></span>
          <a href="/" className="text-sm merriweather">
            Available For Work
          </a>
        </div>
        <div>
          <i className="bi bi-patch-check-fill text-[#a1f452] text-2xl"></i>
        </div>
      </div>

      <div className="pt-5 flex max-sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
        <div className="w-20 h-20 sm:w-24 sm:h-24 p-2 bg-white rounded-full">
          <img
            src={devNuel}
            alt="devNuel"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl">Emmanuel Jeremiah</span>
          <motion.span
            key={roles[current].key}
            className="text-base sm:text-lg text-[#ccc]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {roles[current].label}
          </motion.span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 gap-4 max-[300px]:flex-col">
        <HireMe />
        <Résumé />
      </div>
    </div>
  );
}

