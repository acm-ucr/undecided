import Problem from "@/components/problems/Problem";
import Protected from "@/components/Protected";
import { promises as fs } from "fs";

const Page = async ({ params }) => {
  const file = await fs.readFile(
    process.cwd() + `/src/problems/${params.id}.json`,
    "utf8"
  );

  const data = JSON.parse(file);

  return (
    <Protected>
      <div className="flex justify-center items-center h-[91vh] overflow-hidden">
        <Problem problem={data} />
      </div>
    </Protected>
  );
};

export default Page;
