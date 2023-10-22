const Input = ({ submitHandler, name, placeholder, classes, type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form data: ${e.target[0].value}`);
    submitHandler(e.target[0].value);
  };

  return (
    <div className={`flex items-center w-1/2 text-white ${classes}`}>
      <p className="text-xs px-1 bg-code-black absolute ml-3 mb-[3%]">{name}</p>
      <form onSubmit={handleSubmit}>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          className="outline border-white rounded-md text-base bg-transparent py-2 px-3 w-full"
        />
      </form>
    </div>
  );
};

export default Input;
