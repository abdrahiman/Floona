"use client";
import { UserContext } from "@/context/user";
import React, { FormEvent, useContext } from "react";
import moment from "moment";
import { PiCoinVerticalDuotone } from "react-icons/pi";
export default function CreateReward() {
  let { user, setUser } = useContext(UserContext);
  let handleAdd = (e: FormEvent) => {
    e.preventDefault();
    let taskValue: string = (e.target as any).award.value;
    let points = Number((e.target as any).point.value);
    if (!taskValue || !points) return;
    let tmp = user;
    tmp.awards.push({
      points,
      value: taskValue,
      buyed: false,
    });
    setUser({ ...tmp });
    (e.target as any).award.value = "";
    (e.target as any).point.value = "1";
  };
  return (
    <form
      onSubmit={handleAdd}
      className="mt-10 min-md:-translate-x-4 flex w-full justify-between items-center h-12 hover:bg-[#f4f5f6] dark:hover:bg-[#191919] rounded-xl"
    >
      <input
        type="text"
        name="award"
        placeholder="what do you want to reward by?"
        className="pl-4 rounded-lg max-md:pl-2 w-full h-full bg-transparent outline-none"
      />
      <div className="flex gap-1 h-full w-fit py-2 pr-2 items-center justify-start">
        <input
          className="w-8 outline-none pl-1 bg-day dark:bg-night h-full rounded-lg"
          type="number"
          min={0}
          defaultValue="2"
          name="point"
        />
        <PiCoinVerticalDuotone />
        <button
          type="submit"
          className="ml-6 max-md:ml-2 rounded-lg px-4 py-1 bg-day text-night"
        >
          Add
        </button>
      </div>
    </form>
  );
}
