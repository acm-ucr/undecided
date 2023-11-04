import { COLORS } from "@/data/Difficulty";

const Card = ({ title, difficulty, tag }) => {
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

export default Card;
