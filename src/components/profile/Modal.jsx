"use client";
import Image from "next/image";
import Input from "../Input";
import { useRef, useState } from "react";
import { HiPencil } from "react-icons/hi";

const Modal = ({ picture, setModal, firstName, lastName, userName }) => {
  const [hover, setHover] = useState(true);
  const [info, setInfo] = useState({
    first: firstName,
    last: lastName,
    username: userName,
  });
  const [file, setFile] = useState(null);
  const fileRef = useRef(null);

  const saveProfile = () => {
    console.log("TODO: SAVE PROFILE TO SESSION");
    console.log(info);
    setModal(false);
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadPicture = async (e) => {
    const base64 = await readFileAsBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-1/2 h-3/5 rounded-xl">
      <div className="flex flex-col bg-code-darkgray rounded-xl h-fit text-code-white p-4">
        <div className="flex w-full justify-between">
          <button onClick={() => setModal(false)} className="hover:opacity-80">
            Close
          </button>
          <button onClick={saveProfile} className="hover:opacity-80">
            Save
          </button>
        </div>
        <div
          className="mt-14 ml-14 relative w-fit h-fit hover:cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover && (
            <div
              className="bg-code-darkgray/50 w-36 h-36 absolute flex items-center justify-center rounded-full"
              onClick={() => fileRef.current.click()}
            >
              <input
                type="file"
                ref={fileRef}
                hidden
                accept="image/png, image/jpeg"
                className="w-36 h-40 bg-code-black"
                onChange={uploadPicture}
              />
              <HiPencil className="text-code-white text-7xl absolute" />
            </div>
          )}
          <Image
            className="bg-code-white rounded-full hover:cursor-pointer"
            width={144}
            height={144}
            src={file || picture}
          />
        </div>
        <div className="pt-5 flex flex-col w-full gap-4">
          <div className="flex gap-4">
            <Input
              name="First Name"
              background="bg-code-darkgray"
              value={info.first}
              onChange={(e) => setInfo({ ...info, first: e.target.value })}
            />
            <Input
              name="Last Name"
              background="bg-code-darkgray"
              value={info.last}
              onChange={(e) => setInfo({ ...info, last: e.target.value })}
            />
          </div>
          <Input
            name="Username"
            background="bg-code-darkgray"
            value={info.username}
            onChange={(e) => setInfo({ ...info, username: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
