import Image from "next/image";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

const ProfileHeader = ({
  profilePicture,
  userName,
  fullName,
  email,
  stars,
}) => {
  return (
    <div className="bg-code-darkgray rounded w-80 h-60 flex flex-col justify-center items-center relative font-semibold">
      <div className="pb-3.5 flex flex-row">
        <Image
          className="bg-code-white rounded-full w-20 h-20"
          src={profilePicture}
          alt={fullName + "'s Profile Picture"}
        />
        <div className="absolute top-2.5 right-5">
          <IoSettingsSharp className="text-code-white text-xl" />
        </div>
      </div>
      <div className="text-code-white text-xl">{userName}</div>
      <div className="text-code-lightgray text-xs">{fullName}</div>
      <div className="text-code-lightgray text-xs">{email}</div>
      <div className="flex flex-row pt-4 items-center">
        <AiFillStar className="text-code-yellow text-2xl" />
        <div className="text-code-lightgray text-xs">{stars}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
