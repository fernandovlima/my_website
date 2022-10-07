import SectionHeader from "./Headings/SectionHeader";
import { motion } from "framer-motion";

export function About() {
  return (
    <div
      className={
        "h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
      }
    >
      <SectionHeader level={3}>About</SectionHeader>

      <motion.img
        src={"/img/fernando.jpeg"}
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={
          "rounded-full object-cover h-56 w-56 mx-auto my-8 flex-shrink-0 md:mx-8 md:rounded-lg xl:h-[420px] xl:w-[420px]"
        }
      />

      <div>
        <h2 className={"mb-8"}>A little about me.</h2>
        <p className={"text-justify"}>
          Reprehenderit nostrud excepteur amet qui qui tempor labore qui Lorem
          id Lorem fugiat deserunt. Aliqua non ex in irure esse sint veniam.
          Lorem culpa dolore voluptate. Non deserunt nostrud sit pariatur
          adipisicing excepteur anim laborum id esse deserunt fugiat qui.
          Aliquip ex dolore pariatur in sint officia mollit dolor cillum
          laborum. Qui sint veniam consequat ex est laborum adipisicing magna
          qui irure anim aliquip aute pariatur. Ut anim esse cupidatat ullamco
          dolor ullamco aliqua. lotem ipsum dolor sit amet, consectetur
        </p>
      </div>
    </div>
  );
}
