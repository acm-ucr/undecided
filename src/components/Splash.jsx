import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const Splash = ({ runs, points }) => {
  return (
    <div className="flex flex-col w-full h-screen bg-code-darkgray">
      <div className="flex relative w-full h-1/3 justify-center items-end">
        <FaPlus className="text-code-white w-20 h-20 mt-3" />
        <div className="flex relative ml-5">
          <BsStarFill className="text-code-lightorange w-48 h-48" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-code-darkgray font-semibold">
            {points}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 w-full items-center">
        <p className="text-4xl  font-semibold text-code-white">
          Congratulations!
        </p>
        <text className="h-1/3 text-2xl text-code-white text-center m-3">
          You passed all test cases within {runs} runs!
        </text>
      </div>
      <div className="flex flex-col space-y-3 w-full h-1/4 items-center justify-center">
        <Link
          href="/profile"
          className="bg-code-lime rounded-full w-1/4 text-center py-2 no-underline"
        >
          My Stars
        </Link>
        <Link
          href="/"
          className="bg-code-black text-code-white rounded-full w-1/4 text-center py-2 px-4 no-underline"
        >
          Post this Solution
        </Link>
      </div>
    </div>
  );
};

export default Splash;
