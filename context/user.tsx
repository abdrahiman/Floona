"use client";

import { createContext, useEffect, useState } from "react";
import moment from "moment";

let getDate = () => moment().format("DD-MM-YYYY");

export const UserContext = createContext<{
  user: {
    points: number;
    habits: { value: string;createdAt:Date; checked: boolean; points: number }[] | [];
    awards: { value: string; points: number; buyed: boolean }[];
    todayTasks: {
      day: string;
      tasks: { value: string;createdAt:Date; checked: boolean; points: number }[];
    };
    daysTasks:
      | []
      | {
          day: string;
          tasks: { value: string;createdAt: Date;checked: boolean; points: number }[];
        }[];
  };
  setUser: any;
  NewTask: any;
}>({
  user: {
    points: 0,
    habits: [],
    awards: [],
    daysTasks: [],
    todayTasks: { day: getDate(), tasks: [] },
  },
  setUser: {},
  NewTask: {},
});

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let [user, setUserD] = useState<{
    points: number;
    habits: { value: string;createdAt:Date; checked: boolean; points: number }[] | [];
    awards: { value: string; points: number; buyed: boolean }[];
    todayTasks: {
      day: string;
      tasks: { value: string;createdAt:Date; checked: boolean; points: number }[];
    };
    daysTasks: {
      day: string;
      tasks: { value: string;createdAt:Date; checked: boolean; points: number }[];
    }[];
  }>({
    points: 0,
    habits: [],
    todayTasks: { day: getDate(), tasks: [] },
    awards: [],
    daysTasks: [],
  });

  let [loadLocale, setIsLoad] = useState(false);
  //get user from localehost
  useEffect(() => {
    if (window.localStorage.getItem("userData")) {
      let oldUser = JSON.parse(window.localStorage.getItem("userData") || "");
      if (oldUser.daysTasks.length != 0) {
        let curDayInOldUser = oldUser.daysTasks?.find(
          (d: typeof user.todayTasks) => d.day == getDate()
        );
        //is Today
        if (curDayInOldUser) {
          setUser({ ...oldUser, todayTasks: curDayInOldUser });
        }
        //make the default state
        return;
      }
      setUser(user);
    }
    setIsLoad(true);
  }, []);

  let setUser= (v:any)=>{
    setUserD(v);
    localStorage.setItem("userData", JSON.stringify(user));
  }
  let NewTask = (task: { points: number; value: string; checked: boolean,createdAt:Date }) => {
    let temp = user;

    if (user.daysTasks) {
      let curDayInUser = temp.daysTasks?.find(
        (d: typeof user.todayTasks) => d.day == getDate()
      );
      console.log(curDayInUser);
      //is Today
      if (curDayInUser) {
        curDayInUser.tasks.push(task);
      } else {
        console.log("new day");
        temp.daysTasks = [
          ...temp.daysTasks,
          { day: getDate(), tasks: [...temp.habits, task] },
        ];
        console.log(temp);
      }
    } else {
      temp.daysTasks = [{ day: getDate(), tasks: [...temp.habits, task] }];
    }
    let today = temp.daysTasks?.find(
      (d: typeof user.todayTasks) => d.day == getDate()
    );
    if (today) {
      temp.todayTasks = today;
    }
    setUser({ ...temp });
    localStorage.setItem("userData", JSON.stringify(user));
  };

  return (
    <UserContext.Provider value={{ user, setUser, NewTask }}>
      {children}
    </UserContext.Provider>
  );
}
