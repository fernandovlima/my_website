type TechnologyCardProps = {
  data: {
    name: string;
    icon: JSX.Element;
  };
};

export function TechnologyCard({ data }: TechnologyCardProps) {
  return (
    <div
      className={`bg-gray-medium w-24 h-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-lg flex flex-1 flex-col justify-evenly items-center p-2 group 
      transition-colors duration-200 ease-in-out hover:bg-gray-light/20`}
    >
      {data.icon}
      <p
        className={`text-sm md:text-md lg:text-lg tracking-wide text-gray-light group-hover:text-gray-400  transition-colors duration-200 ease-in-out`}
      >
        {data.name}
      </p>
    </div>
  );
}
