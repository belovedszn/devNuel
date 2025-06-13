import docbot from "../assets/media/docbot.mp4";
import corefans from "../assets/media/corefan.mp4";
import xclusive from "../assets/media/exclusive.mp4";
import sleek from "../assets/media/sleek.mp4";

export const projects = [
  {
    id: 4,
    title: "DocBot AI - API DOC Fetcher",
    ranking: 201,
    tags: ["ReactJS", "Tailwind", "Motion", "Javascript", "Vanilla CSS"],
    description: `DocBot is a lightweight experimental tool built with ReactJS, Mirage, HuggingFace AI that allows users to effortlessly input any API endpoint 
      and instantly retrieve structured documentation. Designed to streamline backend communication for developers, 
      it simplifies the often tedious task of API exploration by automating documentation generation in real-time.`,
    live: "https://docbot-pearl.vercel.app/",
    github: "https://github.com/belovedszn/docbot",
    media: docbot,
    progress: 90,
  },
  {
    id: 3,
    title: "Exclusive - An Ecommerce Store",
    ranking: 200,
    tags: ["ReactJS", "Javascript", "Vanilla CSS"],
    description: `Exclusive is a modern, full-featured eCommerce platform built with ReactJS and Tailwind CSS, designed to deliver a
     seamless shopping experience for both users and store admins. Customers can browse products, manage their carts, 
    and securely check out, while admins can effortlessly manage products, stock levels, and sales records —
     all from an intuitive dashboard.`,
    live: "https://xclusive-phi.vercel.app/",
    github: "https://github.com/belovedszn/xclusive",
    media: xclusive,
    progress: 80,
  },
  {
    id: 2,
    title: "Sleek Pixel - A Text Behind Image APP",
    ranking: 199,
    tags: ["ReactJS", "Typescript", "TailwindCSS"],
    description: `Sleek Pixel is a creative web tool built with ReactJS that allows users to overlay customized text behind images with precision
     and ease. Whether you're crafting modern design mockups or adding hidden messages for visual storytelling, the app lets you control font style, 
     size, position, and layering — all in real time. Ideal for designers, content creators, and developers seeking to blend text seamlessly into visuals.`,
    live: "https://sleekpixel.vercel.app/",
    github: "https://github.com/belovedszn/sleekpixel",
    media: sleek,
    progress: 70,
  },
  {
    id: 1,
    title: "Corefans Distro",
    ranking: 198,
    tags: ["ReactJS", "Tailwind", "Typescript"],
    description: `CoreFans is an all-in-one music platform designed to empower artists, executives, 
    and fans through tools for music distribution, management, and connection.`,
    live: "https://corefans-eta.vercel.app/",
    github: "https://github.com/belovedszn/corefans",
    media: corefans,
    progress: 40,
  },
];
