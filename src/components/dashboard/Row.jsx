import {
  FaRegBookmark,
  FaBookmark,
  FaCircleHalfStroke,
  FaCircle,
} from "react-icons/fa6";
import Tag from "../Tag";
import { DIFFICULTIES, TOPICS } from "@/data/Table";
import { useState } from "react";
import Link from "next/link";

const Row = ({ id, title, status, topics, difficulty, saved, index }) => {
  const [save, setSave] = useState(saved);

  const handleSave = (saved) => {
    setSave(saved);

    console.log(saved, id);
  };

  return (
    <div
      className={`${
        index % 2 !== 0 && "bg-code-darkgray"
      } grid grid-cols-16 items-center py-3 `}
    >
      <div className="col-span-2 flex justify-center">
        {status === 1 ? (
          <FaCircle />
        ) : status === 0 ? (
          <FaCircleHalfStroke />
        ) : (
          <></>
        )}
      </div>
      <Link
        href={`/problems/${id}`}
        target="_blank"
        className="col-span-6 text-white no-underline"
      >
        {title}
      </Link>
      <div className="col-span-4 flex justify-start">
        {topics.map((topic, index) => (
          <Tag key={index} text={topic} color={TOPICS[topic]} />
        ))}
      </div>
      <div
        className={`col-span-2 flex justify-center ${DIFFICULTIES[difficulty].color}`}
      >
        {DIFFICULTIES[difficulty].text}
      </div>
      <div className="col-span-2 flex justify-center">
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
    </div>
  );
};

export default Row;
