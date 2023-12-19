import { useState } from "react";
import Select from "../Select";
import Row from "./Row";
import Search from "../Search";

const difficulties = ["Easy", "Medium", "Hard"];
const topics = ["Operations", "Conditionals", "Loops", "Arrays"];
const statuses = ["Not Started", "In progress", "Complete"];

const Table = ({ objects }) => {
  const [difficulty, setDifficulty] = useState("Difficulty");
  const [topic, setTopic] = useState("Topic");
  const [status, setStatus] = useState("Status");

  return (
    <div className="text-white w-11/12">
      <div className="flex my-3">
        <Search placeholder="Search" />

        <div className="grid grid-cols-3 gap-1 w-1/2">
          <Select
            current={status}
            setCurrent={setStatus}
            placeholder="Status"
            options={statuses}
          />
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
      </div>

      <div className="grid grid-cols-16 border-b-2 border-code-darkgray pb-2">
        <div className="col-span-2 text-center">Status</div>
        <div className="col-span-6">Title</div>
        <div className="col-span-4">Topics</div>
        <div className="col-span-2 text-center">Difficulty</div>
        <div className="col-span-2" />
      </div>

      {objects.map(
        ({ id, title, status, topics, difficulty, saved }, index) => (
          <Row
            key={index}
            index={index}
            id={id}
            title={title}
            status={status}
            topics={topics}
            difficulty={difficulty}
            saved={saved}
          />
        )
      )}
    </div>
  );
};

export default Table;
