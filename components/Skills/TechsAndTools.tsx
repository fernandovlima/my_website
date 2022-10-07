import SectionHeader from "../Headings/SectionHeader";
import { TechnologyCard } from "./TechnologyCard";
import { Technologies } from "./Techs";

export function TechsAndTools() {
  return (
    <div className={"relative h-screen flex flex-col items-center"}>
      <SectionHeader level={3}>Techs and Tools</SectionHeader>
      <p className={"absolute top-36 text-gray-500 tracking-wide text-sm"}>
        some techs and tools that I have worked and use to build my projects
      </p>

      <div
        className={
          "w-[600px] lg:w-[800px] p-4 lg:p-0 absolute top-56 grid grid-cols-4 gap-4 grid-cols-2"
        }
      >
        {Technologies.map((technology) => (
          <TechnologyCard key={technology?.name} data={technology} />
        ))}
      </div>
    </div>
  );
}
