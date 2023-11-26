// import { COLORS } from "@/data/Difficulty";
import { FaStar } from "react-icons/fa";
// import { PROBLEMS} from "@/data/Problem"

const Description = ({ title, date }) => {
  return (
    <>
      <div className="bg-black text-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <p className="align-middle">{title} Solution</p>
          <div className="flex items-center">
            <p className="mr-2 text-sm">{date}</p>
            <FaStar className="text-code-lightorange text-xl" />
          </div>
        </div>

        <div>
          <div className="flex gap-2 mx-4 my-2">
            <div className="rounded-full bg-code-gray px-3 py-1">
              <p className="text-code-white text-sm">Python</p>
            </div>
            <div className="rounded-full bg-code-gray px-3 py-1">
              <p className="text-code-white text-sm">C++</p>
            </div>
            <div className="rounded-full bg-code-gray px-3 py-1">
              <p className="text-code-white text-sm">Javascript</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Description;
