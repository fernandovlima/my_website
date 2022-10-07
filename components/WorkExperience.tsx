import SectionHeader from "./Headings/SectionHeader";

export function WorkExperience() {
  return (
    <div
      className={
        "h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      }
    >
      <SectionHeader level={3}>Work Experience</SectionHeader>
    </div>
  );
}
