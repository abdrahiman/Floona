"use client";
import { UserContext } from "@/context/user";
import React, { FormEvent, useContext } from "react";
import { PiCoinVerticalDuotone } from "react-icons/pi";

export default function CreateTask() {
  let { NewTask } = useContext(UserContext);
  let handleAdd = (e: FormEvent) => {
    e.preventDefault();
    let taskValue: string = (e.target as any).task.value;
    let points = Number((e.target as any).point.value);
    if (!taskValue) return;
    NewTask({
      checked: false,
      createdAt: Date.now(),
      value: taskValue,
      points,
    });

    (e.target as any).task.value = "";
    (e.target as any).point.value = "1";
  };
  return (
    <form
      onSubmit={handleAdd}
      className="mt-10 min-md:-translate-x-4 flex w-full justify-between items-center h-12 hover:bg-[#f4f5f6] dark:hover:bg-[#191919] rounded-xl "
    >
      <input
        type="text"
        name="task"
        placeholder="ما الذي تنوي القيام به اليوم؟"
        className="px-4 rounded-lg max-md:pl-2 w-full h-full bg-transparent outline-none max-md:text-sm"
      />
      <div className="flex gap-1 h-full w-fit py-2 pr-2 items-center justify-start">
        <PiCoinVerticalDuotone />
        <input
          className="w-8 max-md:w-6 outline-none pl-1 bg-day dark:bg-night h-full rounded-lg"
          type="number"
          min={0}
          defaultValue="1"
          name="point"
        />
        <button
          type="submit"
          className="ml-6 max-md:ml-1 rounded-lg px-4 max-md:px-3 py-1  bg-green-600 text-day dark:bg-day dark:text-night"
        >
          اضافة
        </button>
      </div>
    </form>
  );
}
