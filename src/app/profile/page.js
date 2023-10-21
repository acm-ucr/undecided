import ProfileHeader from "@/components/profile/header";

const Page = () => {
  const profileInfo = {
    name: "Dummy McDumDum",
    username: "dummy",
    email: "email@ucr.edu",
    stars: 0,
  };

  return (
    <ProfileHeader
      name={profileInfo.name}
      username={profileInfo.username}
      email={profileInfo.email}
      stars={profileInfo.stars}
    />
  );
};

export default Page;
