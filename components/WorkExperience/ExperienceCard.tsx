import { motion } from "framer-motion";
import Image from "next/future/image";

export function ExperienceCard() {
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]" +
        "snap-center bg-[#292929] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity ease-in-out duration-300 overflow-hidden"
      }
    >
      <motion.div
        className={"w-24 h-24 relative xl:w-36 xl:h-36 "}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Image
          className={"absolute rounded-full object-cover object-center"}
          src={"/img/fernando.jpeg"}
          alt={"Experience one"}
          fill
        />
      </motion.div>

      <div className={"px-0 md:px-10"}>
        <p
          className={"font-bold text-1xl mt-1 tracking-[4px] uppercase orange"}
        >
          Datamonkeys
        </p>

        <h4 className={"text-3xl font-light"}>Frontend Developer</h4>

        <div className={"flex space-x-2 my-6"}>
          <motion.div
            className={"relative w-10 h-10"}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/img/fernando.jpeg"}
              className={"absolute rounded-full object-cover object-center"}
              alt={"techs"}
              fill
            />
          </motion.div>
          <motion.div
            className={"relative w-10 h-10"}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/img/fernando.jpeg"}
              className={"absolute rounded-full object-cover object-center"}
              alt={"techs"}
              fill
            />
          </motion.div>{" "}
          <motion.div
            className={"relative w-10 h-10"}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/img/fernando.jpeg"}
              className={"absolute rounded-full object-cover object-center"}
              alt={"techs"}
              fill
            />
          </motion.div>
        </div>

        <p className={"uppercase px-5 text-gray-300 my-3"}>
          start at: Jan/2019 - ended: 10/2019
        </p>

        <ul className={"list-disc space-y-5 ml-5 text-lg text-justify"}>
          <li>
            Summary text to show Summary text to show Summary text to show{" "}
          </li>
          <li>Summary text to show</li>
          <li>Summary text to show</li>
          <li>Summary text to show</li>
          <li>Summary text to show</li>
        </ul>
      </div>
    </article>
  );
}
