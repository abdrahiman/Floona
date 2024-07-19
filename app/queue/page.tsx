import React from "react";

export default function Awards() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-300 relative">
        <div className="done w-2/4 bg-red-500 h-screen left-0 top-0 absolute flex justify-center items-center">
          <mark className="px-2 rounded-md">done</mark>
        </div>
        <div draggable="true" className="bg-white taskdrag cursor-grab max-w-md w-full h-64 rounded-md flex z-10 relative items-center justify-center text-bold">
          <p className="text-xl">Todo</p>
          </div>
        <div placable="true" className="out w-2/4 bg-green-500 absolute h-screen right-0 top-0 flex justify-center items-center">
        <mark className="px-2 rounded-md">out</mark>
</div>
    </div>
  );
}