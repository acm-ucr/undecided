"use client";
import Table from "@/components/dashboard/Table";
import { useState } from "react";

const Page = () => {
  const problems = [
    {
      id: 0,
      name: "Two Sum",
      status: "completed",
      topic: "Operations",
      difficulty: "easy",
    },
    {
      id: 1,
      name: "Minutes to Hours",
      status: "in-progress",
      topic: "Operations",
      difficulty: "medium",
    },
    {
      id: 2,
      name: "Area of a Square",
      status: "incomplete",
      topic: "Conditionals",
      difficulty: "hard",
    },
    {
      id: 3,
      name: "Miles to Yards",
      status: "incomplete",
      topic: "Conditionals",
      difficulty: "hard",
    },
  ];

  const header = [
    { text: "Status" },
    { text: "Title" },
    { text: "Topic" },
    { text: "Difficulty" },
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
