import { useState } from "react";
import Card from "./Card";
import Breakdown from "./Breakdown";

const submissions = [
  {
    title: "2 Sum",
    date: new Date(),
    language: "Python",
    username: "khandrew1",
    tests: "5/10",
    completed: false,
    code: "twoSum()",
  },
  {
    title: "3 Sum",
    date: new Date(),
    language: "C++",
    username: "khandrew1",
    tests: "10/10",
    completed: true,
    code: "threeSum()",
  },
];

const Submission = () => {
  const [submission, setSubmission] = useState(null);

  return (
    <div className="flex justify-center items-center flex-col">
      {submission && (
        <Breakdown
          title={submission.title}
          date={submission.date}
          username={submission.username}
          language={submission.language}
          code={submission.code}
          tests={submission.tests}
          completed={submission.completed}
          setState={setSubmission}
        />
      )}
      {!submission &&
        submissions.map((obj, index) => (
          <Card
            key={index}
            title={obj.title}
            date={obj.date}
            language={obj.language}
            username={obj.username}
            code={obj.code}
            tests={obj.tests}
            completed={obj.completed}
            setState={setSubmission}
          />
        ))}
    </div>
  );
};

export default Submission;
