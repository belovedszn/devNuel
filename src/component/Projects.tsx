import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../utils/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sortedProjects = [...projects].sort((a, b) => b.ranking - a.ranking);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mt-20 p-6 md:p-20 bg-white rounded-3xl rethink-sans max-sm:p-3">
        <div className="text-4xl max-sm:text-2xl font-bold mb-10">Projects</div>

        <div className="space-y-20">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#f9f9f9] shadow-lg border border-gray-200 overflow-hidden transition hover:shadow-xl "
            >
              {project.media && (
                <video
                  width="100%"
                  className="w-full h-auto rounded-xl pointer-events-none"
                  src={project.media}
                  muted
                  autoPlay
                  loop
                  //playsInline
                ></video>
              )}

              <div className="p-6 relative">
                <h3 className="text-2xl max-sm:text-xl font-semibold mb-2 text-gray-900">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-lg max-sm:text-base font-medium px-3 py-1 rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-lg max-sm:text-base text-gray-600 mb-4">
                  {project.description}
                </p>

                {typeof project.progress === "number" && (
                  <div className="mb-4">
                    <div className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white bg-[#020617] px-4 py-2 rounded-lg text-lg max-sm:text-base font-semibold transition"
                  >
                    View Live Project <i className="bi bi-link"></i>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black text-2xl transition"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
