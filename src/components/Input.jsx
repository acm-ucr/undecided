const Input = ({ value, onChange, name, placeholder, classes }) => {
  return (
    <div className={`flex items-center w-1/2 text-white ${classes}`}>
      <p className="text-xs px-1 z-40 bg-code-black flex fixed ml-3 mb-[3%] select-none">
        {name}
      </p>
      <div className="w-full">
        <input
          name={name}
          placeholder={placeholder}
          type="text"
          className="outline border-white rounded-md text-base bg-transparent py-2 px-3 w-full"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
