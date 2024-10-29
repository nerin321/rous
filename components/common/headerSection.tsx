import React from "react";

interface HeaderSectionProps {
  title: string;
  desc: string;
}

function HeaderSection({ title, desc }: HeaderSectionProps) {
  return (
    <div className="mb:w-7/12 sapce-y-2 mb:space-y-8 mx-auto text-center">
      <h2 className="mb:text-6xl text-xl">{title}</h2>
      <p className="mb:text-base text-xs">{desc}</p>
    </div>
  );
}

export default HeaderSection;
