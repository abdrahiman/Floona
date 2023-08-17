"use client"
import React from "react";
import { HiCheck } from "react-icons/hi";
import { PiCheckFatDuotone } from "react-icons/pi";

export default function Calender() {
  return (
    <div className="calender flex gap-6 flex-wrap mt-6">
      <div className="flex-col gap-1 flex justify-start items-center">
        <span className="text-gray-400 dark:text-gray-600 text-base">W</span>
        <div className="rounded-full h-20 w-20 bg-green-500 font-bold text-xl text-day flex justify-center items-center flex-col gap-1">
          <PiCheckFatDuotone size={26} className="text-day" />
          <span className="text-day text-xs">100%</span>
        </div>
      </div>
      <div className="flex-col gap-1 flex justify-start items-center">
        <span className="text-gray-400 dark:text-gray-600 text-base">W</span>
        <div className="rounded-full h-20 w-20 bg-green-500 font-bold text-xl text-day flex justify-center items-center flex-col gap-1">
          <PiCheckFatDuotone size={26} className="text-day" />
          <span className="text-day text-xs">100%</span>
        </div>
      </div>
      <div className="flex-col gap-1 flex justify-start items-center">
        <span className="text-gray-400 dark:text-gray-600 text-base">W</span>
        <div className="rounded-full h-20 w-20 bg-green-500 font-bold text-xl text-day flex justify-center items-center flex-col gap-1">
          <PiCheckFatDuotone size={26} className="text-day" />
          <span className="text-day text-xs">100%</span>
        </div>
      </div>
      <div className="flex-col gap-1 flex justify-start items-center">
        <span className="text-gray-400 dark:text-gray-600 text-base">W</span>
        <div className="rounded-full h-20 w-20 bg-[#ddd] dark:bg-[#222] font-bold text-xl text-day flex justify-center items-center"></div>
      </div>
      <div className="flex-col gap-1 flex justify-start items-center">
        <span className="text-gray-400 dark:text-gray-600 text-base">W</span>
        <div className="rounded-full h-20 w-20 bg-[#ddd] dark:bg-[#222] font-bold text-xl text-day flex justify-center items-center"></div>
      </div>
      <div className="flex-col gap-1 flex justify-start items-center">
        <span className="text-gray-400 dark:text-gray-600 text-base">W</span>
        <div className="rounded-full h-20 w-20 bg-[#ddd] dark:bg-[#222] font-bold text-xl text-day flex justify-center items-center"></div>
      </div>
    </div>
  );
}
