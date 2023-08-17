import moment from "moment";
import React from "react";
import Calender from "@/components/calender";
import Container from "@/components/Container";
export default function Progress() {
  return (
    <Container className="mt-20">
      <div className="flex items-end gap-4">
        <h1 className="text-3xl font-bold capitalize">Progress</h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs capitalize">
          trak your tasks
        </p>
      </div>
      <hr className="w-full h-[1px] bg-[#ddd] dark:bg-[#222] border-0 my-4 mb-6" />
      <h2 className="text-lg">This Week</h2>
      <Calender />
    </Container>
  );
}
