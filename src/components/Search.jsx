"use client";
import { BiSearch } from "react-icons/bi";

const Search = ({ placeholder }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target[0].value;
    console.log(`Searched: ${searchText}`);
  };

  return (
    <div className={`m-[5%] flex flex-row rounded-xl border-2`}>
      <BiSearch className="mt-[10px] ml-3 text-lg text-code-white" />
      <form onSubmit={handleSubmit} className="w-full">
        <input
          name="search"
          type="text"
          placeholder={placeholder}
          className="p-[6px] bg-transparent placeholder:text-code-white text-code-white rounded-xl focus:outline-none w-full"
        />
      </form>
    </div>
  );
};

export default Search;
