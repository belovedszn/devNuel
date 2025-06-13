import { motion } from "framer-motion";
import AboutMe from "./component/AboutMe";
import Stack from "./component/Stack";
import Omega from "./component/Omega";
import Projects from "./component/Projects";
import Container from "./component/Container";
import "./App.css";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-100 p-25 flex items-center justify-center hey">
        <div className="w-4xl my-10">
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
