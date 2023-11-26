"use client";
import { useState } from "react";
import { COLORS } from "@/data/Difficulty";
import { TbBookmark, TbBookmarkFilled } from "react-icons/tb";

// import { PROBLEMS} from "@/data/Problem"

const Description = ({ title, difficulty, tags, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between mx-4 text-2xl">
        <div className="flex flex-row align-middle">
          <p>{title}</p>
          <div className={`${COLORS["Easy"]} text-sm my-auto mx-3`}>
            {difficulty}
          </div>
        </div>

        <div onClick={() => setIsActive(!isActive)} className="cursor-pointer">
          {isActive ? <TbBookmarkFilled /> : <TbBookmark />}
        </div>
      </div>
      <div>
        <p className="mx-3 text-code-black text-sm rounded-full w-min mx-4 my-2 bg-code-lime">
          Operations
        </p>
        <div className="mx-4 my-4">
          {/* {PROBLEMS}.twoSum.objective */}
          Write a program to sum two numbers. Print out the result using the
          console.log() function. <br />
          <p className="text-lg text-bold mt-4">Example 1:</p>
          {/* {PROBLEMS}.twoSum.exampleInput
              {PROBLEMS}.twoSum.exampleOutput */}
          <p className="text-lg text-bold mt-4">Constraints:</p>
          {/* {PROBLEMS}.twoSum.constraints */}
        </div>
      </div>
    </>
  );
};
export default Description;
