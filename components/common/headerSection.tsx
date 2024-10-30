import React from "react";

interface HeaderSectionProps {
  title: string;
  desc: string;
}

function HeaderSection({ title, desc }: HeaderSectionProps) {
  return (
    <div className="tb:w-7/12 sapce-y-2 mb:space-y-5 tb:space-y-8 mx-auto text-center">
      <h2 className="tb:text-6xl mb:text-3xl text-xl">{title}</h2>
      <p className="tb:text-base mb:text-sm text-xs">{desc}</p>
    </div>
  );
}

export default HeaderSection;
