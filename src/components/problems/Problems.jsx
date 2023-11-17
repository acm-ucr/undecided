import TextEditor from "@/components/problems/TextEditor";
import Description from "@/components/problems/Description";
// import Submission from "@/components/problems/Submission"
// import { PROBLEMS} from "@/data/Problem"

const Problems = () => {
  return (
    <div className="w-11/12 flex flex-row flex-1 justify-between text-white mx-auto">
      <div className="w-[49%] rounded-md bg-code-darkgray mb-4">
        <div className="w-1/2 flex flex-row justify-between my-3 ml-5 text-sm">
          <p className="font-bold">Description</p>
          <p>Solution</p>
          <p>Submission</p>
        </div>
        <Description title="1. Two Sum" difficulty="Easy" />
      </div>

      {/* <Submission /> */}
      <TextEditor />
    </div>
  );
};

export default Problems;
