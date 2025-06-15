/*import javascript from "../assets/svg/javascript.svg";
import typescript from "../assets/svg/typescript.svg";
import html from "../assets/svg/html.svg";
import react from "../assets/svg/react.svg";
import tailwind from "../assets/svg/tailwindcss.svg";
import git from "../assets/svg/git.svg";
import css from "../assets/svg/css.svg";
import github from "../assets/svg/github1.svg";

export default function Stack () {
    return (
        <div className="mt-20 rethink-sans">
            <div className="text-4xl font-bold">
                Stacks
            </div>
            <div className="text-2xl max-lg:text-xl mt-5">
                Mastering the Craft with Cutting-Edge Tools That Bring Ideas to Life
            </div>
            <div className="flex items-center justify-between gap-4 mt-5">
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
                    <img src={javascript} alt="Javascript Icon" />
                </div>
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
                    <img src={typescript} alt="Typescript Icon" />
                </div>
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
               <img src={react} alt="React Icon" />
                </div>
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
                     <img src={git} alt="Git Icon" />
                </div>
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
                     <img src={tailwind} alt="Tailwind CSS Icon" />
                </div>
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
                   <img src={html} alt="HTML Icon" />
                </div>
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
                     <img src={css} alt="CSS Icon" />
                </div>
                <div className="p-4 bg-[#ffffff] rounded-lg cursor-pointer hover:transition-all">
                     <img src={github} alt="Github Icon" />
                </div>
            </div>
        </div>
    )
} */

import javascript from "../assets/svg/javascript.svg";
import typescript from "../assets/svg/typescript.svg";
import html from "../assets/svg/html.svg";
import react from "../assets/svg/react.svg";
import tailwind from "../assets/svg/tailwindcss.svg";
import git from "../assets/svg/git.svg";
import css from "../assets/svg/css.svg";
import github from "../assets/svg/github1.svg";

export default function Stack() {
  return (
    <div className="mt-20 rethink-sans">
      <div className="text-4xl max-sm:text-2xl font-bold">Stacks</div>
      <div className="text-2xl max-lg:text-xl mt-5">
        Mastering the Craft with Cutting-Edge Tools That Bring Ideas to Life
      </div>

      <div className="grid grid-cols-8 gap-4 mt-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-2">
        {[javascript, typescript, react, git, tailwind, html, css, github].map(
          (icon, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg cursor-pointer hover:transition-all flex items-center justify-center"
            >
              <img
                src={icon}
                alt={`stack-icon-${index}`}
                className="w-10 h-10 object-contain"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
