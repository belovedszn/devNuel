import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Omega() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <div className="mt-20 px-6 py-16 md:p-20 bg-[#ffffff] rounded-4xl rethink-sans">
        <div className="border-b border-[#ddd] pb-10 md:pb-20">
          <div className="text-3xl md:text-4xl max-lg:text-2xl leading-snug">
            Let's Build Something Unforgettable,
            <span className="block font-black">Pixel By Pixel</span>
          </div>

         <div className="mt-6 flex flex-wrap gap-4 text-base md:text-lg">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=emmanuelbeloved35@gmail.com&su=Let's Work Together&body=Hi Emmanuel,"
              target="_blank"
              className="animated-btn text-sm md:text-base relative overflow-hidden py-4 px-6 md:py-5 md:px-8 font-extrabold rounded-full bg-[#f5f5f5] text-black hover:text-[#f5f5f5] cursor-pointer"
            >
              <span className="relative z-10">Say Hello!</span>
            </a>

            <a
              href="https://cal.com/devnuel/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-btn text-sm md:text-base dark relative overflow-hidden py-4 px-6 md:py-5 md:px-8 font-extrabold rounded-full bg-black text-white hover:text-black cursor-pointer"
            >
              <span className="relative z-10">Book a Call</span>
            </a>
          </div>
        </div>
        <div className="flex items-start mt-10 justify-between max-lg:flex-col max-lg:gap-4">
          <div>
            <div className="text-2xl max-md:text-xl mb-5 text-[#2b2b2b66] font-semibold">
              Contact
            </div>
            <div className="flex flex-col ">
              <a
                href="mailto:emmanuelbeloved35@gmail.com?subject=Let's Work Together&body=Hi Emmanuel,"
                target="_blank"
                className="text-2xl max-lg:text-lg max-sm:text-base font-bold max-[400px]:text-sm"
              >
                <FontAwesomeIcon className="pr-2" icon={faInbox} />
                emmanuelbeloved35@gmail.com
              </a>
              <a
                href="tel:+2348027160364"
                target="_blank"
                className="text-2xl max-lg:text-lg max-sm:text-base font-bold"
              >
                <FontAwesomeIcon className="pr-2" icon={faPhone} />
                +2348027160364
              </a>
            </div>
          </div>
          <div className="pl-4 max-lg:pl-0">
            <div className="text-2xl max-md:text-xl mb-5 text-[#2b2b2b66] font-semibold">
              Socials
            </div>
            <div className="flex gap-4 max-sm:gap-2">
              <a
                href="https://x.com/dev_nuel_"
                target="_blank"
                className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]"
              >
                {" "}
                <i className="bi bi-twitter-x text-black text-2xl"></i>
              </a>
              <a
                href="https://wa.me/+2348027160364"
                target="_blank"
                className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]"
              >
                <i className="bi bi-whatsapp text-black  text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com/dev_nuel/?igsh=MW5jZ25hM21yZmR3cg%3D%3D&utm_source=qr#"
                target="_blank"
                className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]"
              >
                {" "}
                <i className="bi bi-instagram text-black text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-beloved-999361319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]"
              >
                {" "}
                <i className="bi bi-linkedin text-black text-2xl"></i>
              </a>
              <a
                href="https://github.com/belovedszn"
                target="_blank"
                className="w-12 h-12 flex justify-center items-center rounded-full bg-[#f5f5f5]"
              >
                {" "}
                <i className="bi bi-github text-black text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

