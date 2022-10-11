import SectionHeader from "../Headings/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function About() {
  return (
    <div
      className={
        "h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
      }
    >
      <SectionHeader level={3}>About</SectionHeader>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={
          "relative rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-56 lg:w-56 mx-auto my-8 flex-shrink-0 md:mx-8 md:rounded-lg"
        }
      >
        <Image
          src={"/img/fernando.webp"}
          alt={"Fernando Selfie"}
          layout={"fill"}
          objectFit={"cover"}
          className={"rounded-full md:rounded-lg"}
        />
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 10, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={"mb-8 border-b-2 w-fit border-[#F7AB0A] pb-1"}>
          A little about me.
        </h2>
        <p className={"text-justify"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a brazilian software engineer with a technical degree in internet
          systems. I have a passion for building web applications and seeing
          them grow.{` `}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm always trying to improve myself by learning new technologies. I'm
          currently working at{" "}
          <Link
            href="https://www.amplifyre.com"
            target="_blank"
            rel="noreferrer"
          >
            <a className={"text-[#F7AB0A]"}>Amplifyre</a>
          </Link>{" "}
          as a Full-Stack Engineer.
        </p>
      </motion.div>
    </div>
  );
}
