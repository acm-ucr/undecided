import Problem from "@/components/problems/Problem";
import Protected from "@/components/Protected";

const Page = ({ params }) => {
  return (
    <Protected>
      <div className="flex justify-center items-center h-[91vh] overflow-hidden">
        <Problem />
      </div>
    </Protected>
  );
};

export default Page;
