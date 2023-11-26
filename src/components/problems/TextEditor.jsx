import { useState } from "react";
import Button from "./Button";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { atomone } from "@uiw/codemirror-theme-atomone";

const TextEditor = () => {
  const [code, setCode] = useState("");

  const handleRun = () => {
    console.log("RUN CODE");
  };

  const handleSubmit = () => {
    console.log("SUBMIT CODE");
  };

  return (
    <div className="w-1/2 h-full">
      <div className="h-[85%] border-2 border-code-darkgray rounded-md">
        <CodeMirror
          extensions={[python()]}
          value={code}
          onChange={(value) => setCode(value)}
          theme={atomone}
        />
      </div>
      <div className="flex justify-between items-center border-2 border-code-darkgray rounded-md h-[12%] mt-[3%] p-4">
        <div>Console</div>
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
  );
};

export default TextEditor;
