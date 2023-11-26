import Problem from "@/components/problems/Problem";

const Page = ({ params }) => {
  console.log(params);
  return (
    <div className="flex justify-center items-center h-full">
      <Problem />
    </div>
  );
};

export default Page;
