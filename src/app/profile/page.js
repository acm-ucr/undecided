import ProfileHeader from "@/components/profile/Header";
import Kanban from "@/components/profile/kanban/Kanban";

const Page = () => {
  const profileInfo = {
    name: "Dummy McDumDum",
    username: "dummy",
    email: "email@ucr.edu",
    stars: 0,
  };

  return (
    <div>
      <ProfileHeader
        name={profileInfo.name}
        username={profileInfo.username}
        email={profileInfo.email}
        stars={profileInfo.stars}
      />
      <Kanban />
    </div>
  );
};

export default Page;
