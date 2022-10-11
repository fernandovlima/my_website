import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

export const getIcon = (technology: string) => {
  switch (technology.toLowerCase()) {
    case "react":
      return (
        <FaReact
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "nextjs":
      return (
        <SiNextdotjs
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-black transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "tailwindcss":
      return (
        <SiTailwindcss
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#38B2AC] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "graphql":
      return (
        <SiGraphql
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#E10098] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "html5":
      return (
        <SiHtml5
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#E34F26] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "css3":
      return (
        <SiCss3
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#1572B6] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "javascript":
      return (
        <SiJavascript
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#F7DF1E] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "typescript":
      return (
        <SiTypescript
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#3178C6] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "nodejs":
      return (
        <FaNodeJs
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#68A063] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "mongodb":
      return (
        <SiMongodb
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#47A248] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "figma":
      return (
        <SiFigma
          className={
            "h-6 md:h-6 w-fit fill-gray-400 group-hover:fill-[#F24E1E]  transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "github":
      return (
        <SiGithub
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-[#181717] transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "wordpress":
      return (
        <SiWordpress
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );

    default:
      return <></>;
  }
};
