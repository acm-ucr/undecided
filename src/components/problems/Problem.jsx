"use client";
import { useState } from "react";
import TextEditor from "@/components/problems/TextEditor";
import Description from "@/components/problems/Description";
import Solutions from "@/components/problems/Solutions";
import Submission from "./Submission";

const TABS = [
  {
    title: "Description",
    value: 1,
  },
  {
    title: "Solution",
    value: 2,
  },
  {
    title: "Submission",
    value: 3,
  },
];

const Data = {
  title: "Two Sum",
  difficulty: 1,
  topics: ["operations"],
  saved: false,
  description:
    "Write a program to sum two numbers. Print out the result using the console.log() function",
  examples: [
    {
      input: "1, 2",
      output: "3",
      description: "Because 1 + 2 is 3",
    },
    {
      input: "3, 4",
      output: "7",
      description: "Because 3 + 4 is 7",
    },
  ],
};

const Problem = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className="w-11/12 flex justify-center text-white h-[90%] gap-4">
      <div className="w-1/2 rounded-md bg-code-darkgray overflow-scroll">
        <div className="flex text-sm border-b-2 border-code-gray sticky bg-code-darkgray top-0 z-1 pt-3">
          {TABS.map(({ title, value }, index) => (
            <p
              key={index}
              onClick={() => setCurrent(value)}
              className={`${
                current === value ? "font-bold" : ""
              } cursor-pointer text-lg ml-5`}
            >
              {title}
            </p>
          ))}
        </div>

        {current === 1 && <Description {...Data} />}
        {current === 2 && <Solutions />}
        {current === 3 && <Submission />}
      </div>
      <TextEditor />
    </div>
  );
};

export default Problem;
