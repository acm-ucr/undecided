"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searched: ${value}`);
  };

  return (
    <div className={`flex flex-row rounded-xl border-2`}>
      <BiSearch className="mt-[10px] ml-3 text-lg text-code-white" />
      <form onSubmit={handleSubmit} className="w-full">
        <input
          name="search"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-[6px] bg-transparent placeholder:text-code-white text-code-white rounded-xl focus:outline-none w-full"
        />
      </form>
    </div>
  );
};

export default Search;
