import SectionHeader from "../Headings/SectionHeader";
import { TechnologyCard } from "./TechnologyCard";
import { Technologies } from "./Techs";

export function TechsAndTools() {
  return (
    <div className={"relative h-screen flex flex-col items-center"}>
      <SectionHeader level={3}>Techs and Tools</SectionHeader>
      <p
        className={
          "absolute top-36 text-gray-500 tracking-wide text-sm md:text=[16px] lg:text-lg px-10"
        }
      >
        some techs and tools that I have worked and use to build my projects
      </p>

      <div
        className={
          "p-4 lg:p-0 absolute top-56 grid gap-4 grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 "
        }
      >
        {Technologies.map((technology) => (
          <TechnologyCard key={technology?.name} data={technology} />
        ))}
      </div>
    </div>
  );
}
