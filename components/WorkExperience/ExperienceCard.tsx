import { motion } from "framer-motion";
import Image from "next/future/image";
import { Technology } from "./Technology";
import dayjs from "dayjs";

type Experience = {
  company: string;
  logo: string;
  position: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  summary: string[];
  technologies: string[];
};

interface ExperienceCardProps {
  experience: Experience;
}
export function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    company,
    logo,
    position,
    startDate,
    endDate,
    isCurrent,
    summary,
    technologies,
  } = experience;
  const today = new Date();
  const totalMonthsWorked = `${dayjs(isCurrent ? today : endDate).diff(
    dayjs(startDate),
    "month"
  )} months`;
  return (
    <article
      className={
        "flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[800px] mb-4" +
        " snap-center bg-gray-medium p-6 hover:opacity-100 opacity-70 cursor-pointer transition-opacity ease-in-out duration-300 overflow-hidden"
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
          src={logo}
          alt={`${company} logo`}
          fill
        />
      </motion.div>

      <div className={"w-full px-0 md:px-10"}>
        <p
          className={"font-bold text-1xl mt-1 tracking-[4px] uppercase orange"}
        >
          {company}
        </p>

        <h4 className={"text-3xl font-light"}>{position}</h4>

        <p className={"capitalize px-5 text-gray-300 my-3"}>
          {dayjs(startDate).format("MMM YY")} -{" "}
          {isCurrent ? "Present" : dayjs(endDate).format("MMM YY")}
          {` - ${totalMonthsWorked}`}
        </p>

        <div className={"flex w-full space-x-4 my-6"}>
          {technologies.map((technology) => {
            return <Technology key={technology} technology={technology} />;
          })}
        </div>

        <ul className={"list-disc space-y-4 text-sm text-justify w-fit p-y-10"}>
          {summary.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
