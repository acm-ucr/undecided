import { FaStar, FaRegStar } from "react-icons/fa";
import { PiCopySimpleLight } from "react-icons/pi";
import { handleCopy } from "@/utils/Clipboard";
import { useState } from "react";

const SolutionCode = ({ code }) => {
  return (
    <div className="my-3">
      <p className="text-2xl m-0">Code</p>
      <div className="w-full h-20 rounded-2xl bg-code-darkgray mt-3 flex flex-row">
        <p className="p-3 basis-11/12">{code}</p>
        <div className="mt-2 basis-1/12 flex justify-end mr-3">
          <PiCopySimpleLight
            onClick={() => handleCopy(code)}
            className="text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({
  title,
  date,
  language,
  username,
  likes,
  code,
  tests,
  completed,
  setState,
}) => {
  const handleLike = (state) => {
    setLike(state);
  };

  const [like, setLike] = useState(false);

  return (
    <div
      className="text-white bg-code-black rounded my-2 p-3 w-11/12 hover:cursor-pointer hover:opacity-80"
      onClick={() =>
        setState({
          title,
          date,
          language,
          username,
          likes,
          tests,
          code,
          completed,
        })
      }
    >
      <div className="flex justify-between items-center text-code-gray text-sm">
        <span>{username}</span>
        <span>{date.toDateString()}</span>
      </div>
      <div className="my-2">{title}</div>
      <div className="flex justify-between items-center">
        <div className="bg-code-darkgray px-2 py-1 w-fit rounded-full text-sm">
          {language}
        </div>
        {likes && (
          <div className="flex items-center gap-2">
            {likes}{" "}
            {like ? (
              <FaStar
                onClick={() => handleLike(false)}
                className="hover:cursor-pointer"
              />
            ) : (
              <FaRegStar
                onClick={() => handleLike(true)}
                className="hover:cursor-pointer"
              />
            )}
          </div>
        )}
        {tests && (
          <div
            className={`flex items-center gap-2 ${
              completed ? "text-code-green" : "text-code-red"
            }`}
          >
            {tests}
          </div>
        )}
      </div>
      <SolutionCode code={code} />
    </div>
  );
};

export default Card;
