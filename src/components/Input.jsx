const Input = ({ value, onChange, name, placeholder, classes, type }) => {
  return (
    <div className={`flex items-center w-1/2 text-white ${classes}`}>
      <p className="text-xs px-1 bg-code-black fixed ml-3 mb-[3%]">{name}</p>
      <div>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          className="outline border-white rounded-md text-base bg-transparent py-2 px-3 w-full"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
