import { useEffect, useState } from "react";
import Button from "./Button";
import Select from "../Select";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { javascript } from "@codemirror/lang-javascript";
import { atomone } from "@uiw/codemirror-theme-atomone";
import { BiSolidDownArrow } from "react-icons/bi";

const TextEditor = ({ submit, setSubmit }) => {
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState([python()]);
  const [current, setCurrent] = useState("Python");

  const languages = ["Python", "C++", "Javascript"];

  const handleRun = () => {
    console.log("RUN CODE");
  };

  const handleSubmit = () => {
    console.log("SUBMIT CODE");
    setSubmit(true);
  };

  const handleConsole = () => {
    setShow(!show);
  };

  useEffect(() => {
    switch (current) {
      case "Python":
        setLanguage([python()]);
        break;
      case "C++":
        setLanguage([cpp()]);
        break;
      case "Javascript":
        setLanguage([javascript()]);
        break;
    }
    setCode("");
  }, [current]);

  return (
    <div className="w-1/2 h-full">
      <div
        className={`${
          show ? "h-[50%]" : "h-[90%]"
        } transition-height duration-500 ease-in-out border-2 border-code-darkgray rounded-md overflow-auto flex flex-col`}
      >
        <div className="w-1/4 p-1.5">
          <Select
            options={languages}
            placeholder={"No languages found"}
            current={current}
            setCurrent={setCurrent}
          />
        </div>
        <div className="flex flex-col flex-1 bg-code-atomone">
          <CodeMirror
            extensions={language}
            value={code}
            onChange={(value) => setCode(value)}
            theme={atomone}
          />
        </div>
      </div>
      <div
        className={`${
          show ? "h-[47%]" : "h-[7%]"
        } transition-height duration-500 ease-out-in flex flex-col ${
          show ? "justify-between" : "justify-center"
        } items-center border-2 border-code-darkgray rounded-md mt-[3%] relative p-2`}
      >
        {show && <div>hello</div>}
        <div className="h-fit flex justify-between items-center w-full px-4">
          <button
            className="flex items-center justify-center"
            onClick={handleConsole}
          >
            Console
            <BiSolidDownArrow
              className={`${show && "rotate-180"} duration-300 ml-3 text-xs`}
            />
          </button>
          <div className="flex gap-3">
            <Button
              text="Run"
              bg="bg-code-darkgray"
              color="text-white"
              onClick={handleRun}
            />
            <Button
              text="Submit"
              bg="bg-code-lime"
              color="text-black"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
