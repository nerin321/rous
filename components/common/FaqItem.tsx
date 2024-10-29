import React, { useState } from "react";

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

interface FaqItemProps {
  title: string;
  desc: string;
}

const FaqItem = ({ title, desc }: FaqItemProps) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className=" bg-white/10 border-white/15 rounded-xl h-fit px-10 py-5 border-2">
      <div className=" flex items-center justify-between">
        <h3 className="mb:text-xl text-xs font-medium">{title}</h3>
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? (
            <ArrowUpCircleIcon className="w-6 h-6 text-white" />
          ) : (
            <ArrowDownCircleIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      {isShow && <p className="mt-5 text-[8px] mb:text-base">{desc}</p>}
    </div>
  );
};

export default FaqItem;
