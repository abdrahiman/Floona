"use client";

import { PiCoinVerticalDuotone } from "react-icons/pi";
import { MdIncompleteCircle } from "react-icons/md";
import { UserContext } from "@/context/user";
import { useContext } from "react";
import { CheckCheck } from "lucide-react";

export default function AList() {
  let { user } = useContext(UserContext);

  return (
    <div className="tasks mt-4 flex flex-col gap-4">
      {user.awards.some((l) => l.buyed) && (
        <>
          <h2 className="capitalize text-base my-2 text-gray-700 dark:text-gray-300 font-semibold">
            My rewards
          </h2>
          {user.awards
            .filter((e) => e.buyed)
            .map((l, i) => (
              <Reward key={i} completed award={l} />
            ))}
        </>
      )}
      <h2 className="capitalize text-base my-2 text-gray-700 dark:text-gray-300 font-semibold">
        Buy Rewards
      </h2>
      {user.awards
        .filter((e) => !e.buyed)
        .map((l, i) => (
          <Reward key={i} award={l} cantGet={user.points < l.points} />
        ))}
    </div>
  );
}

let Reward = ({
  completed,
  cantGet,
  award,
}: {
  completed?: boolean;
  cantGet?: boolean;
  award: { points: number; value: string };
}) => {
  let { setUser } = useContext(UserContext);

  let handleRemove = () => {
    setUser((prv: any) => {
      prv.awards = prv.awards.filter(
        (el: { points: number; value: string }) => el != award
      );
      return { ...prv };
    });
  };
  let handleBuy = () => {
    setUser((prv: any) => {
      prv.awards.find(
        (el: { points: number; value: string }) => el == award
      ).buyed = true;
      prv.points -= award.points;
      return { ...prv };
    });
  };
  return (
    <li
      className={`text-base flex gap-4 justify-between items-center bg-[#f1f1f1] dark:bg-[#1b1b1b] first-letter:capitalize pr-4 hover:bg-[#ddd] dark:hover:bg-[#222] ${
        cantGet ? "opacity-70 pointer-events-none" : ""
      }`}
    >
      {award.value}
      {completed ? (
        <button
          onClick={handleRemove}
          className="bg-night text-day dark:text-night dark:bg-day py-2 px-4 rounded-l-lg flex items-center flex-col min-h-full text-base"
        >
          <CheckCheck className="inline-block ml-1" size={20} />
          done
        </button>
      ) : (
        <button
          onClick={handleBuy}
          className="bg-night text-day dark:text-night dark:bg-day py-2 px-4 rounded-l-lg flex items-center flex-col min-h-full text-base"
        >
          <PiCoinVerticalDuotone className="inline-block ml-1" size={20} />{" "}
          {award.points}
        </button>
      )}
    </li>
  );
};
