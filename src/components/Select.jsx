"use client";

import { BiSolidUpArrow } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const Toggle = ({ onClick, show, current, placeholder }) => {
  return (
    <button
      onClick={onClick}
      className="bg-code-darkgray text-code-white w-full py-2 rounded-lg flex items-center justify-between px-3"
    >
      {current || placeholder}
      <BiSolidUpArrow
        className={`${
          show && "rotate-180"
        } duration-300 text-code-white text-xs`}
      />
    </button>
  );
};

const Select = ({ current, setCurrent, placeholder, options }) => {
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
        current={current}
        placeholder={placeholder}
        as={Toggle}
      />
      <div className="p-1" />
      <Dropdown.Menu className="!bg-code-darkgray w-full pt-10">
        {options.map((option, index) => (
          <Dropdown.Item
            className="hover:!bg-code-gray !bg-code-darkgray !text-code-white !flex !flex-row !justify-between !items-center"
            key={index}
            onClick={() => setCurrent(option)}
          >
            {option}
            {option === current && <BsDot className="text-3xl" />}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Select;
