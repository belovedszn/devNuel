import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "../utils/testimony";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[current];

  return (
    <div className="rounded-b-4xl p-6 relative bg-[#a1f452] dancing-script text-[#020617]">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-lg max-sm:text-base quote-style mb-2">
            <i className="bi bi-quote"></i> {testimonial.quote} <i className="bi bi-quote reverse-quote"></i>
          </p>
          <p className="text-base font-semibold merriweather">{testimonial.name}</p>
          <p className="text-base">{testimonial.role}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
