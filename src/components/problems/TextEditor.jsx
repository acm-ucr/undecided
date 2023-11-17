const TextEditor = () => {
  return (
    <div className="flex flex-col w-[49%] h-full relative">
      <div className="w-full h-[85%] border-2 border-code-darkgray rounded-md relative">
        <div>Python</div>
      </div>
      <div className="flex flex-1 flex-row border-2 border-code-darkgray rounded-md my-4">
        <p>Console</p>
        <p>Run</p>
        <p>Submit</p>
      </div>
    </div>
  );
};

export default TextEditor;
