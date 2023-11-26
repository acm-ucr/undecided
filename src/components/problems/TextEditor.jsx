const TextEditor = () => {
  return (
    <div className="flex flex-col w-[49%] h-full relative">
      <div className="w-full h-[85%] border-2 border-code-darkgray rounded-md relative">
        <div>Python</div>
      </div>
      <div className="flex flex-1 flex-row justify-between items-center border-2 border-code-darkgray rounded-md my-4">
        <p>Console</p>
        <div className="flex">
          <p className="mx-2">Run</p>
          <p>Submit</p>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
