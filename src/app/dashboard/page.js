"use client";
import Protected from "@/components/Protected";
import Table from "@/components/dashboard/Table";
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
    <Protected>
      <div className="w-full flex flex-col justify-center items-center">
        <Table
          objects={objects}
          setObjects={setObjects}
          empty="No Problems Found"
        />
      </div>
    </Protected>
  );
};

export default Page;
