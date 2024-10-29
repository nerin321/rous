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
    <div className="mb:px-16 mb:py-12 bg-white/10 rounded-2xl mb:text-base p-3 text-xs font-light">
      <div className="flex items-center justify-between">
        <div className="mb:gap-8 flex items-center gap-4 py-3">
          <img
            className="size-10 mb:size-20 object-cover rounded-full"
            src={img}
            alt=""
          />
          <div>
            <h3 className="mb:text-2xl text-sm font-medium">{name}</h3>
            <p>{position}</p>
          </div>
        </div>
        <img src={StoryIcon.src} alt="" />
      </div>
      <p className="py-3">{desc}</p>
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
