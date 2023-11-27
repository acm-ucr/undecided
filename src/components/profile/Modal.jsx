"use client";
import Image from "next/image";
import Input from "../Input";
import { useRef, useState } from "react";
import { HiPencil } from "react-icons/hi";

const ProfileModal = ({ picture, setModal }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const saveProfile = () => {
    console.log("TODO: SAVE PROFILE TO SESSION");
  };

  const uploadPicture = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/2 h-3/5 rounded-xl">
      <div className="flex flex-col bg-code-darkgray rounded-xl h-fit text-code-white p-4">
        <div className="flex w-full justify-between text-sm">
          <button onClick={() => setModal(false)}>Close</button>
          <button onClick={() => saveProfile()}>Save</button>
        </div>
        <div
          className="mt-14 ml-14 relative w-fit h-fit hover:cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering && (
            <div
              className="bg-code-darkgray/50 w-36 h-36 absolute flex items-center justify-center rounded-full"
              onClick={() => fileRef.current.click()}
            >
              <input
                type="file"
                ref={fileRef}
                hidden
                accept="image/png, image/jpeg"
                onChange={uploadPicture}
              />
              <HiPencil className="text-code-white text-7xl absolute" />
            </div>
          )}
          <Image
            className="bg-code-white rounded-full w-36 h-36 hover:cursor-pointer"
            src={picture}
          />
        </div>
        <div className="pt-5 flex flex-col w-full bg-inherit gap-4">
          <div className="flex bg-inherit gap-4">
            <Input name="First Name" background="bg-code-darkgray" />
            <Input name="Last Name" background="bg-code-darkgray" />
          </div>
          <Input name="Username" background="bg-code-darkgray" />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
