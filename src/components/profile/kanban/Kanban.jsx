"use client";
import { useState } from "react";
import Filters from "@/components/profile/kanban/Filters";
import Columns from "@/components/profile/kanban/Columns";

const Kanban = () => {
  const difficulties = ["Easy", "Medium", "Hard"];
  const topics = ["Operations", "Conditionals"];
  const [difficulty, setDifficulty] = useState("Difficulty");
  const [topic, setTopic] = useState("Topics");
  const [problems, setProblems] = useState([
    { name: "1. Two Sums", difficulty: "Easy", topic: "Operations" },
  ]);

  return (
    <div className="w-screen p-8">
      <Filters
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        topic={topic}
        setTopic={setTopic}
        difficulties={difficulties}
        topics={topics}
      />

      <div className="flex w-full columns-3 justify-center gap-3">
        <Columns title="To-Do" problems={problems} setProblems={setProblems} />
        <Columns
          title="In-Progress"
          problems={problems}
          setProblems={setProblems}
        />
        <Columns
          title="Complete"
          problems={problems}
          setProblems={setProblems}
        />
      </div>
    </div>
  );
};

export default Kanban;
