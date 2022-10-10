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
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "tailwindcss":
      return (
        <SiTailwindcss
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "graphql":
      return (
        <SiGraphql
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "html5":
      return (
        <SiHtml5
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "css3":
      return (
        <SiCss3
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "javascript":
      return (
        <SiJavascript
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "typescript":
      return (
        <SiTypescript
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "nodejs":
      return (
        <FaNodeJs
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "mongodb":
      return (
        <SiMongodb
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "figma":
      return (
        <SiFigma
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
          }
        />
      );
    case "github":
      return (
        <SiGithub
          className={
            "h-6 md:h-6 w-fit  fill-gray-400 group-hover:fill-blue-500 transition-colors duration-200 ease-in-out"
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
