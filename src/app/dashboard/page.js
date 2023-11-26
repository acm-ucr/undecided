"use client";
import Table from "@/components/dashboard/Table";
import { useState } from "react";

const Page = () => {
  const problems = [
    {
      id: 0,
      title: "Two Sum",
      status: "completed",
      topic: "Operations",
      difficulty: "Easy",
    },
    {
      id: 1,
      title: "Minutes to Hours",
      status: "in-progress",
      topic: "Operations",
      difficulty: "Medium",
    },
    {
      id: 2,
      title: "Area of a Square",
      status: "incomplete",
      topic: "Conditionals",
      difficulty: "Hard",
    },
    {
      id: 3,
      title: "Miles to Yards",
      status: "incomplete",
      topic: "Conditionals",
      difficulty: "Hard",
    },
  ];

  const header = [
    { text: "status", size: "w-2/12" },
    { text: "title", size: "w-4/12" },
    { text: "topic", size: "w-5/12" },
    { text: "difficulty", size: "w-4/12" },
  ];

  const [headers, setHeaders] = useState(header);

  const [objects, setObjects] = useState(problems);

  return (
    <Table
      objects={objects}
      setObjects={setObjects}
      empty="No Problems Found"
      headers={headers}
      setHeaders={setHeaders}
    />
  );
};

export default Page;
