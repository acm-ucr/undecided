"use client";

import { BiSolidDownArrow } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const Toggle = ({ onClick, show, current, placeholder }) => {
  return (
    <button
      onClick={onClick}
      className="bg-code-darkgray text-code-white w-full py-2 rounded-lg flex items-center justify-between px-3 hover:bg-code-lightgray"
    >
      {current || placeholder}
      <BiSolidDownArrow
        className={`${
          show && "rotate-180"
        } duration-300 text-code-white text-xs`}
      />
    </button>
  );
};

const Select = ({
  current,
  setCurrent,
  placeholder,
  options,
  clear = true,
}) => {
  const [show, setShow] = useState(false);

  return (
    <Dropdown show={show} onToggle={() => setShow(!show)} autoClose={true}>
      <Dropdown.Toggle
        show={show}
        current={current}
        placeholder={placeholder}
        as={Toggle}
      />
      <Dropdown.Menu className="!bg-code-darkgray mt-2">
        {clear && (
          <Dropdown.Item
            className="hover:!bg-code-gray !text-code-white !flex !items-center"
            onClick={() => setCurrent(placeholder)}
          >
            Clear
          </Dropdown.Item>
        )}
        {options.map((option, index) => (
          <Dropdown.Item
            className="hover:!bg-code-gray !text-code-white !flex !items-center"
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
