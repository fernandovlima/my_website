import React from "react";

type Props = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function SectionHeader({ children, level }: Props) {
  const className = `absolute top-24 uppercase font-bold tracking-[20px] text-gray-500 text-2xl`;
  return (
    <>
      {level === 1 && <h1 className={className}>{children}</h1>}
      {level === 2 && <h2 className={className}>{children}</h2>}
      {level === 3 && <h3 className={className}>{children}</h3>}
      {level === 4 && <h4 className={className}>{children}</h4>}
      {level === 5 && <h5 className={className}>{children}</h5>}
      {level === 6 && <h6 className={className}>{children}</h6>}
    </>
  );
}
