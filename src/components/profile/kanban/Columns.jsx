import Card from "./Card";

const Columns = ({ title, problems, setProblems }) => {
  return (
    <div className="w-full my-4">
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

export default Columns;
