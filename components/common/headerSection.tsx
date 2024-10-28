import React from "react";

interface HeaderSectionProps {
  title: string;
  desc: string;
}

function HeaderSection({ title, desc }: HeaderSectionProps) {
  return (
    <div className="w-7/12 mx-auto space-y-8 text-center">
      <h2 className="text-6xl">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default HeaderSection;
