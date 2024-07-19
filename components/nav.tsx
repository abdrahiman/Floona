"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { UserContext } from "@/context/user";
import { CircleCheckBig, Calendar, Award, Sun, UserRound } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  let [isDark, setDark] = useState(false);
  let { user } = useContext(UserContext);
  let handleTheme = () => {
    let html: any = document.querySelector(":root");
    if (isDark) {
      html.className = "light";
      localStorage.setItem("isDark", `false`);
    } else {
      html.className = "dark";
      localStorage.setItem("isDark", `true`);
    }
    setDark((prv) => !prv);
  };
  // get the theme from localstorage
  useEffect(() => {
    let html: any = document.querySelector(":root");
    if (localStorage.getItem("isDark") !== undefined) {
      if (localStorage.getItem("isDark") === "true") {
        setDark(true);
        html.className = "dark";
      } else if (localStorage.getItem("isDark") === "false") {
        setDark(false);
        html.className = "light";
      }
    }
  }, []);
  let r = usePathname();

  return (
    <aside className="flex justify-between max-w-[3.5rem] w-full fixed right-0 top-0 h-screen p-2 flex-col bg-[#f9f9f9] border-r border-r-[#e9e9e9] dark:bg-[#1e1e1e] dark:border-r-[#444]">
      <div className="up flex items-center gap-3 flex-col">
        <Link href="/">
          <button
            className={`w-10 text-black-600 rounded-xl h-10 flex items-center justify-center ${
              r == "/" ? "bg-green-600 text-white" : ""
            }`}
          >
            <CircleCheckBig />
          </button>
        </Link>
        <Link href="/progress">
          <button
            className={`w-10 text-black-600 rounded-xl h-10 flex items-center justify-center ${
              r == "/progress" ? "bg-green-600 text-white" : ""
            }`}
          >
            <Calendar />
          </button>
        </Link>
        <Link href="/rewards">
          <button
            className={`w-10 text-black-600 rounded-xl h-10 flex items-center justify-center ${
              r == "/rewards" ? "bg-green-600 text-white" : ""
            }`}
          >
            <Award />
          </button>
        </Link>
        <Link href="/queue">
          <button
            className={`w-10 text-black-600 rounded-xl h-10 flex items-center justify-center ${
              r == "/queue" ? "bg-green-600 text-white" : ""
            }`}
          >
            <Sun />
          </button>
        </Link>
      </div>
      <div className="down flex items-center gap-2 flex-col">
        <button
          className="w-10 rounded-xl h-10 flex items-center justify-center"
          onClick={() => handleTheme()}
        >
          <Sun />
        </button>
        <button className="w-10 rounded-xl h-10 flex items-center justify-center">
          <UserRound />
        </button>
      </div>
    </aside>
  );
}
