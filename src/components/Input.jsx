const Input = ({ object, setObject, title, label, placeholder, classes }) => {
  // const handleInput = (e) => {
  //   setObject({ ...object, [label]: e.target.value });
  // };

  return (
    <div className={`flex items-center w-full ${classes}`}>
      <h6 className="text-xs px-1 z-40 bg-code-black flex fixed ml-3 mt-[-2%]">
        {title}
      </h6>
      <div className="w-full">
        <input
          // value={object[label]}
          placeholder={placeholder}
          type="text"
          className="outline border-white focus:outline focus: border-white rounded-md text-base bg-transparent py-2 px-3 w-full"
          // onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default Input;
