"use client";
import Input from "../Input.jsx";
import { useState } from "react";

const USERNAME_FIELD = "Username";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form data: ${JSON.stringify(data)}`);
  };
  const [data, setData] = useState({ [USERNAME_FIELD]: "" });

  const handleChange = (event, fieldName) => {
    setData({ ...data, [fieldName]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name={USERNAME_FIELD}
          placeholder="Enter a username"
          classes="mt-5 w-1/2 ml-5"
          value={data[USERNAME_FIELD]}
          onChange={(e) => handleChange(e, USERNAME_FIELD)}
        />
      </form>
    </div>
  );
};

export default Register;
