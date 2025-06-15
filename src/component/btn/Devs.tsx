import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { devs } from "../../utils/devs";

export default function Devs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % devs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={devs[current].id}
        className="text-xl max-md:text-lg text-[#ccc]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <button className="btn text-black font-bold">
          {" "}
          {devs[current].dev}{" "}
        </button>
      </motion.span>
    </AnimatePresence>
  );
}
