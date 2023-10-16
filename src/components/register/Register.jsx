import Button from "@/components/Button";
import Input from "../Input";

const Register = ({ name }) => {
  return (
    <div className="h-screen w-screen text-white text-3xl flex items-center">
      <div className="w-full flex flex-rows justify-between ml-[5%]">
        <div className="flex flex-col">
          <h1>
            Hello <span className="text-[#dd8ab8]">{name}</span>, <br /> Create
            your username!
          </h1>
          <Input label="Username" placeholder="Enter a username" />
        </div>
        <Button
          text="Get Started"
          color="lime"
          className="mr-[5%] h-[90%] my-auto"
        />
      </div>
    </div>
  );
};

export default Register;
