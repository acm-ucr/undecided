"use client";
import Input from "../Input.jsx";

const Register = () => {
  const recordUserInfo = (submitEvent) => {
    submitEvent.preventDefault();
    const username = submitEvent.target[0].value;
    console.log(`Username: ${username}`);
  };

  return (
    <div>
      <form onSubmit={recordUserInfo}>
        <Input
          name={"Username"}
          placeholder={"Enter a username"}
          classes={"mt-5 w-[50%] ml-5"}
        />
      </form>
    </div>
  );
};

export default Register;
