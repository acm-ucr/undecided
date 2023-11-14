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
      difficulty: "easy",
    },
    {
      id: 1,
      title: "Minutes to Hours",
      status: "in-progress",
      topic: "Operations",
      difficulty: "medium",
    },
    {
      id: 2,
      title: "Area of a Square",
      status: "incomplete",
      topic: "Conditionals",
      difficulty: "hard",
    },
    {
      id: 3,
      title: "Miles to Yards",
      status: "incomplete",
      topic: "Conditionals",
      difficulty: "hard",
    },
  ];

  const header = [
    { text: "status", size: "w-1/12" },
    { text: "title", size: "w-1/12" },
    { text: "topic", size: "w-1/12" },
    { text: "difficulty", size: "w-1/12" },
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
