import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Breakdown from "./Breakdown";

const solutions = [
  {
    title: "2 Sum Super efficient",
    date: new Date(),
    language: "Python",
    username: "poggers",
    likes: 10,
    code: "hello world",
  },
  {
    title: "2 Sum Super slow",
    date: new Date(),
    language: "C++",
    username: "vs code",
    likes: 12,
    code: "hello world",
  },
  {
    title: "2 Sum Super nerdy",
    date: new Date(),
    language: "Javascript",
    username: "google",
    likes: 18,
    code: "hello world",
  },
  {
    title: "2 Sum Super efficient",
    date: new Date(),
    language: "Python",
    username: "poggers",
    likes: 10,
    code: "hello world",
  },
];

const Solution = () => {
  const [like, setLike] = useState(false);
  const [solution, setSolution] = useState(null);

  const handleLike = (state) => {
    setLike(state);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {solution && (
        <Breakdown
          title={solution.title}
          date={solution.date}
          username={solution.username}
          language={solution.language}
          stars={solution.likes}
          code={solution.code}
          setSolution={setSolution}
        />
      )}
      {!solution &&
        solutions.map(
          ({ title, date, language, username, likes, code }, index) => (
            <div
              key={index}
              className="text-white bg-code-black rounded my-2 p-3 w-11/12 hover:cursor-pointer hover:opacity-80"
              onClick={() =>
                setSolution({
                  title,
                  date,
                  language,
                  username,
                  likes,
                  code,
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
              </div>
            </div>
          )
        )}
    </div>
  );
};
export default Solution;
