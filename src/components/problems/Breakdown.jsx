"use client";
import { FiArrowLeft } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { PiCopySimple } from "react-icons/pi";
import { useState } from "react";

const Breakdown = ({
  title,
  date,
  username,
  language,
  stars,
  code,
  setSolution,
}) => {
  const [star, setStar] = useState(false);
  return (
    <div className="w-full">
      <FiArrowLeft
        className="text-2xl m-4 cursor-pointer"
        onClick={() => setSolution(null)}
      />
      <div className="px-5">
        <div className="flex items-center text-code-gray">{username}</div>
        <div className="text-xl mb-1 mt-2">{title}</div>
        <div className="text-code-gray mb-1">
          Posted on {date.toDateString()}
        </div>
        <div className="flex justify-between">
          <div className="rounded-full bg-code-black w-fit px-2 py-1 text-xs self-center">
            {language}
          </div>
          <div className="flex items-center">
            {stars}
            <FaStar
              onClick={() => setStar(!star)}
              className={`ml-1 text-2xl inline cursor-pointer ${
                star
                  ? `text-code-lightorange`
                  : `text-code-gray hover:text-code-lightorange`
              }`}
            />
          </div>
        </div>
        <div className="text-2xl my-3">Code</div>
        <div className="rounded-3xl bg-code-black p-4 relative">
          <PiCopySimple className="absolute inline text-2xl text-code-gray hover:text-code-white hover:cursor-pointer top-0 right-0 m-3" />
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;