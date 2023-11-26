"use client";
import { useState } from "react";

const Input = ({ onSubmit, name, placeholder, type }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className="flex items-center w-full text-white">
      <p className="text-xs px-1 bg-code-black absolute ml-3 mb-11">{name}</p>
      <form onSubmit={handleSubmit}>
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="outline border-white rounded-md text-base bg-transparent py-2 px-3"
        />
      </form>
    </div>
  );
};

export default Input;
