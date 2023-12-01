import Select from "@/components/Select";
import Search from "@/components/Search";
import { useState } from "react";

const FilterBar = () => {
  const difficulties = ["Easy", "Medium", "Hard"];
  const topics = ["Operations", "Conditionals", "Loops", "Arrays"];
  const statuses = ["Not Started", "In progress", "Complete"];
  const [difficulty, setDifficulty] = useState("Difficulty");
  const [topic, setTopic] = useState("Topic");
  const [status, setStatus] = useState("Status");
  return (
    <div className="flex w-full text-white gap-3 justify-center items-center mt-[2%] mb-[2%] pl-[5%] pr-[5%]">
      <div className="w-1/2">
        <Search placeholder={"Search"} />
      </div>
      <div className="flex gap-3 w-1/2 mt-2">
        <Select
          current={status}
          setCurrent={setStatus}
          placeholder="Status"
          options={statuses}
          className=" m-5"
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
  );
};

export default FilterBar;
