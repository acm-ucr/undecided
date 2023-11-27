"use client";

import Image from "next/image";
import { RiSettings3Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";

const ProfileHeader = () => {
  const user = {
    name: "Dummy McDumDum",
    username: "dummy",
    email: "email@ucr.edu",
    stars: 0,
  };

  const { picture, username, name, email, stars } = user;

  const [modal, setModal] = useState(false);

  return (
    <div>
      {modal && <Modal picture={picture} setModal={setModal} />}
      <div className="bg-code-darkgray rounded w-1/5 flex flex-col justify-center items-center relative font-semibold py-3.5">
        <div className="flex flex-row mb-1.5">
          <Image
            className="bg-code-white rounded-full w-20 h-20"
            src={picture}
            alt={name + "'s Profile Picture"}
          />
          <RiSettings3Fill
            className="text-code-white text-xl absolute top-3 right-3 hover:cursor-pointer hover:opacity-80"
            onClick={() => setModal(true)}
          />
        </div>
        <div className="text-code-white text-xl">{username}</div>
        <div className="text-code-lightgray text-xs">{name}</div>
        <div className="text-code-lightgray text-xs">{email}</div>
        <div className="flex flex-row mt-2.5 items-center">
          <FaStar className="text-code-lightorange text-2xl mr-2" />
          <div className="text-code-lightgray text-xs">{stars}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
