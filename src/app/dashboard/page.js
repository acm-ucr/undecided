import Protected from "@/components/Protected";
import Table from "@/components/dashboard/Table";
import { promises as fs } from "fs";

const Page = async () => {
  const files = await fs.readdir(process.cwd() + `/src/problems`);

  files.forEach((file, index) => {
    const id = file.replace(".json", "");
    const [title, meta] = id.split("_");
    const [topics, difficulty] = meta.split("-");

    files[index] = {
      id: id,
      title: title.replace("-", " ").toUpperCase(),
      topics: [topics],
      difficulty: difficulty,
      saved: true,
      status: 1,
    };
  });

  return (
    <Protected>
      <div className="w-full flex flex-col justify-center items-center">
        <Table problems={files} empty="No Problems Found" />
      </div>
    </Protected>
  );
};

export default Page;
