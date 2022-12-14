import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsInstagram, BsEnvelope } from "react-icons/bs";
import Link from "next/link";

export function Header() {
  return (
    <header
      className={
        "sticky top-0 flex w-full justify-between max-w-7xl mx-auto z-30 xl:items-center p-5"
      }
    >
      <motion.div
        className={"flex flex-row items-center space-x-6"}
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: [1.5, 1] }}
        transition={{ duration: 1 }}
      >
        <Link href={"https://www.github.com/fernandovlima"}>
          <BsGithub
            className={
              "h-6 w-fit fill-gray-400 hover:fill-gray-100 transition-colors duration-200 ease-in-out"
            }
          />
        </Link>

        <Link href={"https://www.linkedin.com/in/fernando-lima-492822116/"}>
          <BsLinkedin
            className={
              "h-6 w-fit fill-gray-400 hover:fill-[#0276a8] transition-colors duration-200 ease-in-out"
            }
          />
        </Link>

        <Link href={"https://www.instagram.com/f_ern_ndo"}>
          <BsInstagram
            className={
              "h-6 w-fit fill-gray-400 hover:fill-pink-500 transition-colors duration-200 ease-in-out "
            }
          />
        </Link>
      </motion.div>

      <motion.div
        className={
          "group flex flex-row items-center text-gray-400 cursor-pointer"
        }
        initial={{ opacity: 0, x: 500, scale: 0.5 }}
        animate={{ opacity: [0.5, 1], x: 0, scale: [1.5, 1] }}
        transition={{ duration: 1 }}
      >
        <Link href={"mailto:me@fernandolima.xyz"}>
          <div className={"flex items-center"}>
            <BsEnvelope
              className={
                "h-6 w-fit mr-2 fill-gray-400 group-hover:fill-[#F7AB0A] transition-colors duration-200 ease-in-out"
              }
            />
            <p
              className={
                "uppercase hidden md:inline-flex text-sm text-gray-400 group-hover:text-[#F7AB0A] duration-200 ease-in-out"
              }
            >
              Get in touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
}
