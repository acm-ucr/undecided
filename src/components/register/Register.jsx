"use client";
import Button from "@/components/Button";
import Input from "../Input";

const Register = ({ name }) => {
  return (
    <div className="h-screen flex items-center">
      <div className="w-full flex flex-row justify-between mx-[5%]">
        <div>
          <p className="text-white text-3xl mb-5">
            Hello <span className="text-[#dd8ab8]">{name}</span>, <br /> Create
            your username!
          </p>
          <Input
            name="Username"
            placeholder="Enter a username"
            onSubmit={(val) => console.log(val)}
          />
        </div>
        <div className="h-[90%] my-auto">
          <Button text="Get Started" color="lime" />
        </div>
      </div>
    </div>
  );
};

export default Register;
