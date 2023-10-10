import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const ProfileHeader = ({ picture, username, name, email, stars }) => {
  return (
    <div className="bg-code-darkgray rounded w-80 h-60 flex flex-col justify-center items-center relative font-semibold">
      <div className="pb-3.5 flex flex-row">
        <Image
          className="bg-code-white rounded-full w-20 h-20"
          src={picture}
          alt={name + "'s Profile Picture"}
        />
        <div className="absolute top-2.5 right-5">
          <IoSettingsSharp className="text-code-white text-xl" />
        </div>
      </div>
      <div className="text-code-white text-xl">{username}</div>
      <div className="text-code-lightgray text-xs">{name}</div>
      <div className="text-code-lightgray text-xs">{email}</div>
      <div className="flex flex-row pt-4 items-center">
        <FaStar className="text-code-yellow text-2xl" />
        <div className="text-code-lightgray text-xs pl-0.5 pt-0.5">{stars}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
