import ProfileHeader from "@/components/profile/Header";

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
