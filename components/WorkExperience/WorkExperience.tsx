import SectionHeader from "../Headings/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";
import { experience } from "./data/experience";

export function WorkExperience() {
  return (
    <div
      className={
        "h-screen relative flex flex-col text-center text-lft md:flex-row  max-w-full px-2 justify-evenly mx-auto items-center overflow-hidden"
      }
    >
      <SectionHeader level={3}>Work Experience</SectionHeader>

      <div
        className={
          "w-full max-w-4xl mt-16 flex space-x-8 overflow-x-scroll snap-x snap-mandatory md:mt-20 p-1 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 scrollbar-thin"
        }
      >
        {experience.map((experience) => (
          <ExperienceCard key={experience?.company} experience={experience} />
        ))}
      </div>
    </div>
  );
}
