"use client";
import Input from "../Input.jsx";

const USERNAME_FIELD = "Username";

const Register = () => {
  const usernameSubmitHandler = (userInput) => {
    console.log(`Username in register: ${userInput}`);
  };
  return (
    <div>
      <Input
        name={USERNAME_FIELD}
        placeholder="Enter a username"
        onSubmit={usernameSubmitHandler}
      />
    </div>
  );
};

export default Register;
