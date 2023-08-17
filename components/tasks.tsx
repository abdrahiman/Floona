"use client";
import { UserContext } from "@/context/user";
// import { UserContext } from "@/app/components/context/user";
import React, { useContext, useState } from "react";
import { HiCheck } from "react-icons/hi";
import Task from "./task";

export default function Tasks() {
  let { user } = useContext(UserContext);
  let [hoverd, setHovered] = useState(false);
  return (
    <ul
      className="mt-8 tasks flex gap-4 flex-col justify-start items-start"
      id={hoverd ? "elementHovered" : ""}
    >
      {user.dayTasks.tasks.map((t, i) => (
        <Task setHovered={setHovered} task={t} key={i} />
      ))}
    </ul>
  );
}
