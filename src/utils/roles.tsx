import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const roles = [
  {
    key: "frontend",
    label: (
      <div className="flex items-center ">
        <span>Frontend Developer</span>
        <span><i className="bi bi-code-slash text-2xl ml-2"></i></span>
      </div>
    ),
  },
  {
    key: "software",
    label: (
      <div className="flex items-center">
        <span>Software Engineer</span>
        <i className="bi bi-braces text-2xl ml-2"></i>
      </div>
    ),
  },
  {
    key: "react",
    label: (
      <div className="flex items-center">
        <span>React Developer</span>
        <FontAwesomeIcon className='ml-2 text-2xl' icon={faReact} />
      </div>
    ),
  },
  {
    key: "prompt",
    label: (
      <div className="flex items-center">
        <span>Prompt Engineer</span>
        <i className="bi bi-lightbulb text-2xl ml-2"></i>
      </div>
    ),
  },
  {
    key: "design",
    label: (
      <div className="flex items-center">
        <span>Web Designer</span>
        <i className="bi bi-layout-text-window text-2xl ml-2"></i>
      </div>
    ),
  },
];
