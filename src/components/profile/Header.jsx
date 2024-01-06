"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { RiSettings3Fill } from "react-icons/ri";
// import Modal from "./Modal";

const ProfileHeader = () => {
  const { data: session } = useSession();

  // const [modal, setModal] = useState(false);

  return (
    <div>
      {/* {modal && <Modal picture={picture} setModal={setModal} />} */}
      <div className="bg-code-darkgray rounded w-1/4 flex flex-col justify-center items-center relative font-semibold py-5">
        <div className="flex flex-row mb-1.5">
          <Image
            className="bg-code-white rounded-full w-20 h-20"
            width={75}
            height={75}
            src={session.user.image}
            alt={session.user.name + "'s Profile Picture"}
          />
          {/* <RiSettings3Fill
            className="text-code-white text-2xl absolute top-3 right-3 hover:cursor-pointer hover:opacity-80"
            onClick={() => setModal(true)}
          /> */}
        </div>
        {/* <div className="text-code-white text-2xl">{username}</div> */}
        <div className="text-code-lightgray text-2xl">{session.user.name}</div>
        <div className="text-code-lightgray text-sm">{session.user.email}</div>
        {/* <div className="flex flex-row mt-2.5 items-center">
          <FaStar className="text-code-lightorange text-2xl mr-2" />
          <div className="text-code-lightgray text-md">{stars}</div>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileHeader;
