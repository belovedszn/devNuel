import { motion } from "framer-motion";
import Container from "./component/Container";
import AboutMe from "./component/AboutMe";
import Stack from "./component/Stack";
import Projects from "./component/Projects";
import Omega from "./component/Omega";

import "./App.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="px-4 sm:px-10 md:px-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-5xl my-10">
          <Container />
          <AboutMe />
          <Stack />
          <Projects />
          <Omega />
        </div>
      </div>
    </motion.div>
  );
}

export default App;
