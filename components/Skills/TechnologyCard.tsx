type TechnologyCardProps = {
  data: {
    name: string;
    icon: JSX.Element;
  };
};

export function TechnologyCard({ data }: TechnologyCardProps) {
  return (
    <div
      className={`bg-gray-medium w-32 h-32 lg:h-48 lg:w-48 rounded-lg flex flex-col justify-evenly items-center p-2 group 
      transition-colors duration-200 ease-in-out hover:bg-gray-light/20`}
    >
      {data.icon}
      <p
        className={`tracking-wide text-gray-light group-hover:text-gray-400  transition-colors duration-200 ease-in-out`}
      >
        {data.name}
      </p>
    </div>
  );
}
