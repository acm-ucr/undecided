const Input = ({ name, placeholder, type, value, setValue, background }) => {
  return (
    <div className="flex items-center w-full relative border-2 border-white rounded text-white">
      <p className={`text-xs absolute px-1 ml-3 mb-11 ${background}`}>{name}</p>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex border-white rounded-md text-base bg-transparent py-2 px-3 w-full outline-none"
      />
    </div>
  );
};

export default Input;
