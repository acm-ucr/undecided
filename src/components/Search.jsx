"use client";
import { BiSearch } from "react-icons/bi";

const Search = ({ value, onChange, placeholder, classes }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target[0].search.value;
    console.log(`Searched: ${searchText}`);
  };

  return (
    <div className={`m-[5%] flex flex-row bg-transparent text-base ${classes}`}>
      <BiSearch className="mt-[10px] ml-3 text-lg text-code-white fixed" />
      <input
        name="search"
        type="text"
        placeholder={placeholder}
        className="p-[6px] pl-10 bg-transparent text-code-white placeholder:text-code-white rounded-xl border-2"
        value={value}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Search;
