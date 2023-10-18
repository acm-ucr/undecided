import Button from "@/components/Button";
import Input from "../Input";

const Register = ({ name }) => {
  return (
    <div className="h-screen w-screen text-white text-3xl flex items-center">
      <div className="w-full flex flex-row justify-between mx-[5%]">
        <div>
          <p>
            Hello <span className="text-[#dd8ab8]">{name}</span>, <br /> Create
            your username!
          </p>
          <Input label="Username" placeholder="Enter a username" />
        </div>
        <Button text="Get Started" color="lime" className="h-[90%] my-auto" />
      </div>
    </div>
  );
};

export default Register;
