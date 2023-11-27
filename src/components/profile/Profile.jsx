import React from "react";
import Header from "@/components/profile/Header";
import Kanban from "@/components/profile/kanban/Kanban";

const Profile = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-11/12">
        <Header />
        <Kanban />
      </div>
    </div>
  );
};

export default Profile;
