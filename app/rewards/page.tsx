import moment from "moment";
import React from "react";
import Container from "@/components/Container";
import AList from "@/components/alist";
import CreateReward from "@/components/createReward";
export default function Awards() {
  return (
    <Container className="mt-20">
      <div className="flex items-end gap-4">
        <h1 className="text-3xl font-bold capitalize">Awards</h1>
        <p className="text-gray-500 dark:text-gray-400 text-xs capitalize">
          daily reward your self
        </p>
      </div>
      <CreateReward />
      <hr className="w-full h-[1px] bg-[#ddd] dark:bg-[#222] border-0 my-4 mb-6" />
      <AList />
    </Container>
  );
}
