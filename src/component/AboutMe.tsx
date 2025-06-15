import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Devs from "./btn/Devs";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <div className="mt-20 p-4">
        <div>
          <i className="bi bi-quote text-7xl max-lg:text-5xl max-sm:text-3xl text-[#a1f452]"></i>
        </div>
        <div>
          <span className="text-2xl max-lg:text-xl max-md:text-lg rethink-sans">
            I'm a{" "}
            <span>
              <Devs />
            </span>{" "}
            Developer with three years of hands-on experience crafting
            responsive, visually compelling, and user-centric digital products.
            With a strong focus on{" "}
            <span className="font-bold">
              {" "}
              web applications, websites, and dynamic UI templates,
            </span>{" "}
            I've had the privilege of working with leading agencies, where I
            sharpened my skills across a{" "}
            <span className="font-bold">wide spectrum</span> of industries and
            project types.
          </span>
        </div>

        <div className="mt-10">
          <span className="text-2xl max-lg:text-xl max-md:text-lg rethink-sans">
            In my tech journey, I've tackled diverse technical
            challenges—developing custom solutions that strike a seamless
            balance between <span className="font-bold">functionality</span>,
            performance, and aesthetics. I'm passionate about staying at the
            forefront of frontend technologies and continuously exploring new
            ways to elevate user engagement through smart, scalable, and{" "}
            <span className="font-bold">impactful interfaces.</span>
          </span>
        </div>

        <div className="mt-10">
          <span className="text-2xl max-lg:text-xl max-md:text-lg rethink-sans">
            I take <span className="font-bold">pride</span> in solving technical
            problem, writing clean, maintainable code while ensuring{" "}
            <span className="font-bold">interfaces</span> not only look great
            but also feel <span className="font-bold">intuitive to users</span>.
            What sets me apart is my ability to bridge the gap between design
            and development. With a deep appreciation for{" "}
            <span className="font-bold">UI/UX </span>
            principles and a keen business mindset, I aim to build digital
            experiences that are not only{" "}
            <span className="font-bold">visually appealing</span> but
            strategically aligned with user needs and{" "}
            <span className="font-bold">business goals.</span>
          </span>
        </div>

        <div className="mt-10">
          <span className="text-2xl max-lg:text-xl max-md:text-lg rethink-sans">
            <span className="font-bold">Creative problem-solver</span> with a
            sharp eye for detail, passionate about building seamless user
            experiences that blend design and functionality. Proven ability to
            deliver responsive, scalable, and
            <span className="font-bold">
              {" "}
              high-performing web solutions
            </span>{" "}
            for both agencies and freelance clients. Driven by{" "}
            <span className="font-bold">curiosity</span> collaboration, and a
            strong understanding of business needs.
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * <span className="font-bold">Frontend Developer</span>
 */
