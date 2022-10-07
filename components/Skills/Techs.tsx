import {
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

export const Technologies = [
  {
    name: "HTML5",
    icon: (
      <SiHtml5
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 transition-colors duration-200 ease-in-out group-hover:fill-[#E34F26]"
        }
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <SiCss3
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 transition-colors duration-200 ease-in-out group-hover:fill-[#1572B6]"
        }
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <SiJavascript
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 transition-colors duration-200 ease-in-out group-hover:fill-[#F7DF1E]"
        }
      />
    ),
  },
  {
    name: "NodeJS",
    icon: (
      <FaNodeJs
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#68A063] transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },

  {
    name: "Typescript",
    icon: (
      <SiTypescript
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#3178C6] transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },

  {
    name: "ReactJS",
    icon: (
      <FaReact
        className={
          "h-12 w-fit lg:h-16  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },
  {
    name: "GraphQL",
    icon: (
      <SiGraphql
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#E10098] transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },
  {
    name: "NextJS",
    icon: (
      <SiNextdotjs
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-black transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },
  {
    name: "TailwindCSS",
    icon: (
      <SiTailwindcss
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#38B2AC] transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <SiMongodb
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#47A248] transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },
  // {
  //   name: "PostgresSQL",
  //   icon: (
  //     <SiPostgresql
  //       className={
  //         "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#336791] transition-colors duration-200 ease-in-out"
  //       }
  //     />
  //   ),
  // },
  {
    name: "Figma",
    icon: (
      <SiFigma
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#F24E1E] transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },
  // {
  //   name: "Webstorm",
  //   icon: (
  //     <SiWebstorm
  //       className={
  //         "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[bg-gradient-to-b from-blue-400 to-emerald-400] transition-colors duration-200 ease-in-out"
  //       }
  //     />
  //   ),
  // },
  {
    name: "Github",
    icon: (
      <SiGithub
        className={
          "h-12 w-fit lg:h-16 fill-gray-400 group-hover:fill-[#181717] transition-colors duration-200 ease-in-out"
        }
      />
    ),
  },
];
