"use client";
import Button from "@/components/Button";
import Input from "../Input";
import { useState } from "react";

const Account = ({ setState }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    console.log(username);
    setState(1);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-11/12 flex justify-between items-center">
        <div>
          <p className="text-white text-3xl mb-5">
            Hello <span className="text-[#dd8ab8]">{"SESSION USERNAME"}</span>,{" "}
            <br /> Create your username!
          </p>
          <Input
            name="Username"
            placeholder="Enter a username"
            value={username}
            setValue={(e) => setUsername(e.target.value)}
            background="bg-code-black"
          />
        </div>
        <Button text="Get Started" color="lime" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Account;
