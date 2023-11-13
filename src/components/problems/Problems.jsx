import TextEditor from "@/components/problems/TextEditor";
// import Submission from "@/components/problems/Submission"
import { COLORS } from "@/data/Difficulty";
import { TbBookmark } from "react-icons/tb";

const Problems = ({ title, difficulty, tags, description }) => {
  return (
    <div className="w-11/12 flex flex-row justify-between text-white mx-auto">
      <div className="w-[49%] rounded-md bg-code-darkgray">
        <div className="w-1/2 flex flex-row justify-between my-2 ml-5 text-sm">
          <p className="font-bold">Description</p>
          <p>Solution</p>
          <p>Submission</p>
        </div>
        <div className="flex flex-row justify-between mx-4 text-2xl">
          <div className="flex flex-row align-middle">
            <p>1. Two Sum</p>
            <div className={`${COLORS["Easy"]} text-sm my-auto mx-3`}>Easy</div>
          </div>
          <TbBookmark />
        </div>
        <div>
          <div className="rounded-full w-min mx-4 my-2 bg-code-lime">
            <p className="mx-3 text-code-black text-sm">Operations</p>
          </div>
          <p>Description</p>
        </div>
      </div>
      {/* <Submission /> */}
      <TextEditor />
    </div>
  );
};

export default Problems;
