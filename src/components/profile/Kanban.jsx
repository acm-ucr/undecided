"use client";
import Select from "@/components/Select";
import { useState } from "react";
import { COLORS } from "@/data/Difficulty";

const Card = ({ title, difficulty, operation }) => {
  return (
    <div className="border-2 border-code-darkgray rounded-2xl p-4 my-4">
      <div className="flex text-lg justify-between">
        <div className="text-code-white font-bold">{title}</div>
        <div className={`${COLORS[difficulty]}`}>{difficulty}</div>
      </div>
      <div className="text-code-white mt-4"> TAG HERE </div>
    </div>
  );
};

const Columns = ({ title, problems, setProblems }) => {
  return (
    <div className="w-full mx-2 my-4">
      <div className="border-2 border-code-darkgray text-code-white rounded-2xl p-3">
        {title}
      </div>
      {problems.map((problem, index) => (
        <Card
          key={index}
          title={problem.name}
          difficulty={problem.difficulty}
          topic={problem.topic}
        />
      ))}
    </div>
  );
};
const Filters = ({
  difficulty,
  setDifficulty,
  topic,
  setTopic,
  difficulties,
  topics,
}) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="text-2xl text-code-white">Problem Management</div>
      <Select
        current={difficulty}
        setCurrent={setDifficulty}
        placeholder="Difficulty"
        options={difficulties}
      />
      <Select
        current={topic}
        setCurrent={setTopic}
        placeholder="Topic"
        options={topics}
      />
    </div>
  );
};

const Kanban = () => {
  const difficulties = ["Difficulty", "Easy", "Medium", "Hard"];
  const topics = ["Topics", "Operations", "Conditionals"];
  const [difficulty, setDifficulty] = useState("Difficulty");
  const [topic, setTopic] = useState("Topics");
  const [problems, setProblems] = useState([
    { name: "1. Two Sums", difficulty: "Easy", topic: "Operations" },
  ]);

  return (
    <div className="w-screen p-8">
      <div className="w-full">
        <Filters
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          topic={topic}
          setTopic={setTopic}
          difficulties={difficulties}
          topics={topics}
        />
      </div>

      <div className="flex w-full columns-3 justify-center">
        <Columns title="To-do" problems={problems} setProblems={setProblems} />
        <Columns
          title="In-progress"
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
