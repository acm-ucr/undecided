"use client";

import { BiSolidDownArrow } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const Toggle = ({ onClick, show, currentOption, placeholder }) => {
  return (
    <button
      onClick={onClick}
      className="bg-code-darkgray text-code-white w-1/6 h-10 rounded-lg flex items-center justify-between px-2.5 py-3"
    >
      {currentOption || placeholder}
      <BiSolidDownArrow
        className={`${
          show && "rotate-180"
        } duration-300 text-code-white text-xs`}
      />
    </button>
  );
};

const Select = ({ currentOption, setCurrentOption, placeholder, options }) => {
  const [show, setShow] = useState(false);

  return (
    <Dropdown
      show={show}
      className="w-full m-0"
      onToggle={() => setShow(!show)}
      autoClose={true}
    >
      <Dropdown.Toggle
        show={show}
        currentOption={currentOption}
        placeholder={placeholder}
        as={Toggle}
      />
      <Dropdown.Menu className="!bg-code-darkgray w-1/6 pt-10">
        {options.map((option, index) => (
          <Dropdown.Item
            className="hover:!bg-code-lightgray !bg-code-darkgray !text-code-white !flex !flex-row !justify-between !items-center"
            key={index}
            onClick={() => setCurrentOption(option)}
          >
            {option}
            {option == currentOption && <BsDot className="text-3xl" />}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
