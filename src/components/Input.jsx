"use client";
import { useState } from "react";

const Input = ({ onSubmit, name, placeholder, type }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className="flex items-center text-white w-full relative bg-inherit">
      <p className="text-xs absolute px-1 ml-3 mb-11 bg-inherit">{name}</p>
      <form onSubmit={handleSubmit} className="w-full">
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex outline border-white rounded-md text-base bg-transparent py-2 px-3 w-full"
        />
      </form>
    </div>
  );
};

export default Input;
