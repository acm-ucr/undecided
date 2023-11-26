"use client";
import { useState } from "react";
import TextEditor from "@/components/problems/TextEditor";
import Description from "@/components/problems/Description";
// import Submission from "@/components/problems/Submission"
// import { PROBLEMS} from "@/data/Problem"

const DESCRIPTION_TAB_NAME = "description-tab";
const SOLUTION_TAB_NAME = "code-editor-tab";
const SUBMISSION_TAB_NAME = "submission-tab";

const Problems = () => {
  const [currentTab, setCurrentTab] = useState(DESCRIPTION_TAB_NAME);

  return (
    <div className="w-11/12 flex flex-row flex-1 justify-between text-white mx-auto">
      <div className="w-[49%] rounded-md bg-code-darkgray mb-4">
        <div className="w-1/2 flex flex-row justify-between my-3 ml-5 text-sm">
          <p
            onClick={() => setCurrentTab(DESCRIPTION_TAB_NAME)}
            className={`${
              currentTab == DESCRIPTION_TAB_NAME ? "font-bold" : ""
            } cursor-pointer`}
          >
            Description
          </p>
          <p
            onClick={() => setCurrentTab(SOLUTION_TAB_NAME)}
            className={`${
              currentTab == SOLUTION_TAB_NAME ? "font-bold" : ""
            } cursor-pointer`}
          >
            Solution
          </p>
          <p
            onClick={() => setCurrentTab(SUBMISSION_TAB_NAME)}
            className={`${
              currentTab == SUBMISSION_TAB_NAME ? "font-bold" : ""
            } cursor-pointer`}
          >
            Submission
          </p>
        </div>
        {currentTab === DESCRIPTION_TAB_NAME && (
          <Description title="1. Two Sum" difficulty="Easy" />
        )}
        {currentTab === SOLUTION_TAB_NAME && <div>SOLUTION TAB GOES HERE</div>}
        {currentTab === SUBMISSION_TAB_NAME && (
          <div>SUBMISSION TAB GOES HERE</div>
        )}
      </div>

      {/* <Submission /> */}
      <TextEditor />
    </div>
  );
};

export default Problems;
