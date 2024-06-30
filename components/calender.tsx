"use client";
import { UserContext } from "@/context/user";
import { useContext, useEffect } from "react";
import { PiCheckFatDuotone } from "react-icons/pi";
import moment from "moment";
import Link from "next/link";
export default function Calender() {
  let { user, setUser } = useContext(UserContext);
  return (
    <div className="calender flex gap-6 flex-wrap mt-6">
      {user.daysTasks.map((day) => (
        <Link
          href="/"
          className="flex-col gap-1 flex justify-start items-center"
          key={day.day}
        >
          <div className="flex-col gap-1 flex justify-start items-center">
            <span className="text-gray-400 dark:text-gray-600 text-base">
              {moment(day.day, "DD-MM-YYYY").format("dddd")}
            </span>
            <div
              className={`rounded-full h-20 w-20 font-bold text-xl text-day flex justify-center items-center flex-col gap-1 ${
                user.todayTasks.tasks.filter((el) => !el.checked).length == 0
                  ? "bg-green-400"
                  : "bg-[#ddd] dark:bg-[#222]"
              }`}
            >
              <PiCheckFatDuotone size={26} className="text-day" />
              <span className="text-day text-xs">
                {day.tasks.filter((t) => t.checked).length +
                  "/" +
                  day.tasks.length}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
