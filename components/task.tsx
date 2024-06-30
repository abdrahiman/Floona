"use client";

import { UserContext } from "@/context/user";
import { useContext, FormEvent, useState, MouseEventHandler } from "react";
import { HiCheck, HiDotsVertical } from "react-icons/hi";

export type ITask = {
  value: string;
  points: number;
  createdAt: Date;
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
  let [editeMode, setEditeMode] = useState(false);
  let { user, setUser } = useContext(UserContext);

  let handleCheck: MouseEventHandler<HTMLDivElement> = () => {
    let t = user.todayTasks.tasks.find((el: ITask) => el == task) as ITask;
    t.checked = !t.checked;
    if (t.checked) {
      user.points += Number(t.points);
    } else {
      user.points -= Number(t.points);
    }
    setUser({ ...user });
  };
  let handleEdite = (e: FormEvent) => {
    e.preventDefault();
    let taskV = (e.target as any).task.value;
    let pointsV = (e.target as any).points.value;
    let temp = user;
    let t = user.todayTasks.tasks.find((el) => el == task);
    if (t) {
      t.value = taskV;
      t.points = Number(pointsV);
    }

    setUser({ ...temp });
    setEditeMode(false);
  };
  return (
    <li
      className={`text-base flex gap-4 justify-between items-center first-letter:capitalize px-2 py-2 hover:bg-[#ddd] dark:hover:bg-[#222] ${
        task.checked ? "checked" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => (setHovered(false), setDrop(false))}
    >
      <span className="text-xs text-gray-700 dark:text-gray-300">
        {task.points}
      </span>
      <div
        className="flex gap-4 justify-between items-center w-full h-full"
        onClick={handleCheck}
      >
        <span className="checkbox">
          <input
            type="checkbox"
            className="isarray"
            checked={task.checked}
            readOnly
          />
          <span
            aria-hidden="true"
            className={
              task.checked
                ? "bg checked border-day dark:border-night text-day bg-night dark:text-night dark:bg-day"
                : "bg border-solid border-[1.9px] border-night dark:border-day text-transparent bg-transparent"
            }
          >
            <HiCheck size={14} />
          </span>
        </span>
        {editeMode ? (
          <form
            className="w-full flex justify-start gap-4 items-center"
            onSubmit={handleEdite}
          >
            <input
              className="w-full h-full max-w-xl outline-none bg-transparent max-md:text-sm"
              name="task"
              defaultValue={task.value}
            />
            <input
              className="w-8 outline-none pl-1 bg-day dark:bg-night h-full rounded-lg"
              type="number"
              min={0}
              defaultValue={task.points}
              name="points"
            />
            <button
              type="submit"
              className="ml-6 decoration-transparent max-md:ml-1 rounded-lg px-3 max-md:px-2 py-1 bg-day text-night"
            >
              Edite
            </button>
          </form>
        ) : (
          <h3
            className="w-full h-full max-md:text-sm"
            onClick={() =>
              setUser((prv: any) => {
                let t = prv.todayTasks.tasks.find(
                  (el: ITask) => el.createdAt == task.createdAt
                );
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
        )}
      </div>
      <div className="relative inline-block ">
        <button
          className="relative z-10 block focus:bg-[#f5f5f5] dark:focus:bg-[#222] hover:bg-[#f5f5f5] dark:hover:bg-[#222] p-2 border-transparent rounded-md bg-transparent"
          onClick={() => setDrop(!drop)}
        >
          <HiDotsVertical />
        </button>

        <div
          className={`absolute right-0 z-30 w-48 py-2 mt-1 origin-top-right bg-day rounded-md shadow-lg p-2 dark:bg-[#191919] max-md:text-sm ${
            drop ? "block" : "hidden"
          }`}
        >
          <button
            className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
            onClick={() =>
              setUser((prv: any) => {
                let habs = prv.habits;
                if (
                  prv.habits.some((h: any) => h.createdAt == task.createdAt)
                ) {
                  return {
                    ...prv,
                    habits: habs.filter(
                      (hb: any) => hb.createdAt != task.createdAt
                    ),
                  };
                }
                habs = [...habs, task];
                return { ...prv, habits: habs };
              })
            }
          >
            {user.habits.some((el) => el.createdAt == task.createdAt)
              ? "make it a today task"
              : "make it a habit"}
          </button>
          <button
            className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
            onClick={() => setEditeMode(!editeMode)}
          >
            Edite
          </button>
          <button
            className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
            onClick={() =>
              setUser((prv: any) => {
                prv.todayTasks.tasks = prv.todayTasks.tasks.filter(
                  (el: any) => el != task
                );
                prv.todayTasks.tasks = [task, ...prv.todayTasks.tasks];
                return { ...prv };
              })
            }
          >
            move top
          </button>
          <button
            className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
            onClick={() =>
              setUser((prv: any) => {
                prv.todayTasks.tasks = prv.todayTasks.tasks.filter(
                  (el: ITask) => el.createdAt != task.createdAt
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
