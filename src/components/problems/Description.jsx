"use client";
import { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import Tag from "../Tag";
import { DIFFICULTIES, TOPICS } from "@/data/Table";

const Description = ({
  title,
  difficulty,
  topics,
  saved,
  description,
  examples,
}) => {
  const [save, setSave] = useState(saved);

  const handleSave = (state) => {
    setSave(state);
  };

  return (
    <div className="h-full p-4">
      <div className="flex justify-between text-2xl">
        <div className="flex items-center">
          {title}
          <div
            className={`text-base my-2 mx-3 ${DIFFICULTIES[difficulty].color}`}
          >
            {DIFFICULTIES[difficulty].text}
          </div>
        </div>
        {save ? (
          <FaBookmark
            onClick={() => handleSave(false)}
            className="hover:cursor-pointer"
          />
        ) : (
          <FaRegBookmark
            onClick={() => handleSave(true)}
            className="hover:cursor-pointer"
          />
        )}
      </div>

      {topics.map((topic, index) => (
        <Tag key={index} text={topic} color={TOPICS[topic]} />
      ))}

      <div className="my-3">{description}</div>

      <div>
        {examples.map(({ input, output, description }, index) => (
          <div key={index} className="my-2">
            Example
            <br />
            Input: <code>{input}</code>
            <br />
            Output: <code>{output}</code>
            <br />
            Explanation: <code>{description}</code>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Description;
