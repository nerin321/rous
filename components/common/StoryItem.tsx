"use client";
import { Avatar, Start, StoryIcon } from "@/public";
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface StoryItemProps {
  img: string;
  name: string;
  position: string;
  desc: string;
  start: number;
}

const StoryItem = ({ img, name, position, desc, start }: StoryItemProps) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="px-16 py-12 space-y-8 text-base font-light bg-white/10 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img className="object-cover rounded-full size-20" src={img} alt="" />
          <div>
            <h3 className="text-2xl font-medium">{name}</h3>
            <p>{position}</p>
          </div>
        </div>
        <img src={StoryIcon.src} alt="" />
      </div>
      <p>{desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={Start.src}
              alt=""
              className={
                index < Math.min(start, 5) ? "opacity-100" : "opacity-30"
              }
            />
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsClick(!isClick);
            }}
          >
            <HeartIcon
              className={`size-6 ${isClick ? "text-red-600" : "text-white"}`}
            />
          </button>
          <ChatBubbleLeftIcon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
