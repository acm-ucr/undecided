"use client";
import Table from "@/components/dashboard/Table";
import FilterBar from "@/components/FilterBar";
import { useState } from "react";

const Page = () => {
  const problems = [
    {
      id: 0,
      title: "Two Sum",
      status: 1,
      topics: ["operations"],
      difficulty: 1,
      saved: true,
    },
    {
      id: 1,
      title: "Minutes to Hours",
      status: 0,
      topics: ["operations"],
      difficulty: 2,
      saved: false,
    },
    {
      id: 2,
      title: "Area of a Square",
      status: -1,
      topics: ["arrays"],
      difficulty: 3,
      saved: false,
    },
    {
      id: 3,
      title: "Miles to Yards",
      status: 1,
      topics: ["conditionals"],
      difficulty: 3,
      saved: true,
    },
  ];

  const [objects, setObjects] = useState(problems);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {<FilterBar />}
      <Table
        objects={objects}
        setObjects={setObjects}
        empty="No Problems Found"
      />
    </div>
  );
};

export default Page;
