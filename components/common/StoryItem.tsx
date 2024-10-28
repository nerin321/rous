"use client";
import { Avatar, Start, StoryIcon } from "@/public";
import { HeartIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface StoryItemProps {
  img: string;
  name: string;
  position: string;
}

const StoryItem = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="px-16 py-12 space-y-8 text-base font-light bg-white/10 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img
            className="object-cover rounded-full size-20"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div>
            <h3 className="text-2xl font-medium">Sarah Mitchell</h3>
            <p>CFO at BrightWave Solutions</p>
          </div>
        </div>
        <img src={StoryIcon.src} alt="" />
      </div>
      <p>
        Rous has completely transformed the way we manage our financial
        operations. Their AI-driven tools helped us save time and improve
        accuracy, making a big difference in our bottom line.
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Start.src} alt="" />
          <img src={Start.src} alt="" />
          <img src={Start.src} alt="" />
          <img src={Start.src} alt="" />
          <img src={Start.src} alt="" />
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
