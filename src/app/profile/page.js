import Profile from "@/components/profile/Profile";
import Protected from "@/components/Protected";

const Page = () => {
  return (
    <Protected>
      <Profile />
    </Protected>
  );
};

export default Page;
