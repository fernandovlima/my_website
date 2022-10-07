import SectionHeader from "../Headings/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";

export function WorkExperience() {
  return (
    <div
      className={
        "h-screen relative flex flex-col overflow-hidden text-center text-lft md:flex-row  max-w-full px-10 justify-evenly mx-auto items-center"
      }
    >
      <SectionHeader level={3}>Work Experience</SectionHeader>

      <div
        className={
          "w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory lg:mt-20"
        }
      >
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}
