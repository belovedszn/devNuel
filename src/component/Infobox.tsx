import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
          <span className="text-sm merriweather">Available For Work</span>
        </div>
        <div>
          <i className="bi bi-patch-check-fill text-[#a1f452] text-2xl"></i>
        </div>
      </div>

      <div className="pt-5 flex items-center">
        <div className="w-25 h-25 p-2 bg-white rounded-full">
          <img
            src={devNuel}
            alt="devNuel"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col pl-4 justify-between gap-3">
          <span className="text-2xl">Emmanuel Jeremiah</span>

          <AnimatePresence mode="wait">
            <motion.span
              key={roles[current].key}
              className="text-xl text-[#ccc]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {roles[current].label}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 gap-4">
        <HireMe />
        <Résumé />
      </div>
    </div>
  );
}
