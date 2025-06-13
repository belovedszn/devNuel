import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Infobox from "./Infobox";
import Testimony from "./Testimony";
import Hey from "./Hey";

export default function Containers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Hey />
      <Infobox />
      <Testimony />
    </motion.div>
  );
}
