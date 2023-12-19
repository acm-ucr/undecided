import { useState } from "react";
import Card from "./Card";
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
  const [solution, setSolution] = useState(null);

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
          setState={setSolution}
        />
      )}
      {!solution &&
        solutions.map((obj, index) => (
          <Card
            key={index}
            title={obj.title}
            date={obj.date}
            language={obj.language}
            username={obj.username}
            likes={obj.likes}
            code={obj.code}
            setState={setSolution}
          />
        ))}
    </div>
  );
};
export default Solution;
