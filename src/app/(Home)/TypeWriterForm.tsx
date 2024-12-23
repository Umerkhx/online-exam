"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Receive",
    },
    {
      text: "Assistance",
    },
    {
      text: "From Our",
    },
    {
      text: "Skilled",
    },
    {
      text: "Experts",
      className: "text-sky-500 dark:text-sky-400",
    },
  ];
  return (
    <div className=" ">
   
      <TypewriterEffectSmooth words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div> */}
    </div>
  );
}