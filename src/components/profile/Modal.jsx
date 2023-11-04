import Image from "next/image";
import Input from "../Input";

const ProfileModal = ({ picture, setModal }) => {
  const saveProfile = () => {
    console.log("TODO: SAVE PROFILE TO SESSION");
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/2 h-3/5 rounded-xl">
      <div className="flex flex-col bg-code-darkgray rounded-xl h-full text-code-white p-4">
        <div className="flex w-full justify-between text-sm">
          <button onClick={() => setModal(false)}>Close</button>
          <button onClick={() => saveProfile()}>Save</button>
        </div>
        <div className="pt-14 pl-14">
          <div className="text-xs font-semibold pb-3">Photo</div>
          <Image
            className="bg-code-white rounded-full w-36 h-36"
            src={picture}
          />
        </div>
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default ProfileModal;
