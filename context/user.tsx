"use client";

import { createContext, useEffect, useState } from "react";
import moment from "moment";

let getDate = () => moment().format("DD-MM-YYYY");

export const UserContext = createContext<{
  user: {
    points: number;
    habits: { value: string; checked: boolean; points: number }[] | [];
    awards: { value: string; points: number; buyed: boolean }[];
    dayTasks: {
      day: string;
      tasks: { value: string; checked: boolean; points: number }[];
    };
  };
  setUser: any;
  daysTasks:
    | []
    | {
        day: string;
        tasks: { value: string; checked: boolean; points: number }[];
      }[];
}>({
  user: {
    points: 0,
    habits: [],
    awards: [],
    dayTasks: { day: getDate(), tasks: [] },
  },
  setUser: {},
  daysTasks: [],
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [user, setUser] = useState<{
    points: number;
    habits: { value: string; checked: boolean; points: number }[] | [];
    awards: { value: string; points: number; buyed: boolean }[];
    dayTasks: {
      day: string;
      tasks: { value: string; checked: boolean; points: number }[];
    };
  }>({
    points: 0,
    habits: [],
    dayTasks: { day: getDate(), tasks: [] },
    awards: [],
  });
  let [daysTasks, setDaysTasks] = useState<(typeof user.dayTasks)[]>([]);

  let [loadLocale, setIsLoad] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("userTasks")) {
      let days = JSON.parse(window.localStorage.getItem("userTasks") || "");
      if (days.length == 0) return;
      let curDay = days?.find((d: typeof user.dayTasks) => d.day == getDate());
      if (curDay) {
        setUser(curDay);
      }
      setDaysTasks(days);
    }
    setIsLoad(true);
  }, []);
  useEffect(() => {
    if (!loadLocale) return;
    let tmp = daysTasks;
    let curDay = tmp?.find((d) => d.day == getDate());
    if (curDay) {
      //add task to a day
      curDay.tasks = user.dayTasks.tasks;
      setDaysTasks([...tmp]);
    } else {
      //create a new day
      let newday = { tasks: user.habits, day: getDate() };
      setDaysTasks((prv) => [...prv, newday]);
      setUser({ ...user, dayTasks: newday });
      tmp = [...daysTasks, newday];
    }
    console.log(tmp);
    localStorage.setItem("userTasks", JSON.stringify(tmp));
  }, [user, setUser]);

  return (
    <UserContext.Provider value={{ user, setUser, daysTasks }}>
      {children}
    </UserContext.Provider>
  );
}
