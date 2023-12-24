import Select from "@/components/Select";

const Filters = ({
  difficulty,
  setDifficulty,
  topic,
  setTopic,
  difficulties,
  topics,
}) => {
  return (
    <div className="flex w-full text-white">
      <div className="text-2xl w-10/12">Problem Management</div>
      <div className="flex flex-row w-1/4 gap-3 justify-between">
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

export default Filters;
