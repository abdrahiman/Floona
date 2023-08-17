"use client";

import { UserContext } from "@/context/user";
import { useContext, useState } from "react";
import { HiCheck, HiDotsVertical } from "react-icons/hi";

export type ITask = {
  value: string;
  checked: boolean;
};
export default function Task({
  setHovered,
  task,
}: {
  setHovered: (v: boolean) => void;
  task: ITask;
}) {
  let [drop, setDrop] = useState(false);
  let { setUser } = useContext(UserContext);

  return (
    <li
      className={`text-base flex gap-4 justify-between items-center first-letter:capitalize px-2 py-3 hover:bg-[#ddd] dark:hover:bg-[#222] ${
        task.checked ? "checked" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-4 justify-between items-center w-full h-full">
        <span className="checkbox">
          <input
            type="checkbox"
            className="isarray"
            checked={task.checked}
            readOnly
          />
          <span
            aria-hidden="true"
            onClick={() =>
              setUser((prv: any) => {
                let t = prv.dayTasks.tasks.find((el: ITask) => el == task);
                t.checked = !t.checked;
                if (t.checked) {
                  prv.points += t.points;
                } else {
                  prv.points -= t.points;
                }
                return { ...prv };
              })
            }
            className={
              task.checked
                ? "bg checked border-day dark:border-night text-day bg-night dark:text-night dark:bg-day"
                : "bg border-solid border border-night dark:border-day text-transparent bg-transparent"
            }
          >
            <HiCheck size={14} />
          </span>
        </span>
        <h3
          className="w-full h-full"
          onClick={() =>
            setUser((prv: any) => {
              let t = prv.dayTasks.tasks.find((el: ITask) => el == task);
              t.checked = !t.checked;
              if (t.checked) {
                prv.points += t.points;
              } else {
                prv.points -= t.points;
              }
              return { ...prv };
            })
          }
        >
          {task.value}
        </h3>
      </div>
      <div className="relative inline-block ">
        <button
          className="relative z-10 block focus:bg-[#f5f5f5] dark:focus:bg-[#222] hover:bg-[#f5f5f5] dark:hover:bg-[#222] p-2 border-transparent rounded-md bg-transparent"
          onClick={() => setDrop(!drop)}
        >
          <HiDotsVertical />
        </button>

        <div
          className={`absolute right-0 z-30 w-48 py-2 mt-1 origin-top-right bg-day rounded-md shadow-lg p-2 dark:bg-[#191919] ${
            drop ? "block" : "hidden"
          }`}
        >
          <button
            className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
            onClick={() =>
              setUser((prv: any) => {
                if (prv.habits.some((h: any) => h == task))
                  return { ...prv.habits.filter((h: any) => h == task) };
                prv.habits.push(task);
                return { ...prv };
              })
            }
          >
            make it a habit
          </button>
          <button
            className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
            onClick={() =>
              setUser((prv: any) => {
                prv.dayTasks.tasks = prv.dayTasks.tasks.filter(
                  (el: ITask) => el != task
                );
                return { ...prv };
              })
            }
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
}
