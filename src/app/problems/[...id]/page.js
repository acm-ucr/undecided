import Problem from "@/components/problems/Problem";

const Page = ({ params }) => {
  return (
    <div className="flex justify-center items-center h-full overflow-hidden">
      <Problem />
    </div>
  );
};

export default Page;
