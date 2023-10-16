"use client";

import Select from "@/components/Select";
import { useState } from "react";

const Page = () => {
  const options = ["C++", "Python", "Java", "Javascript"];
  const [currentOption, setCurrentOption] = useState("");

  return (
    <Select
      options={options}
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
      placeholder={"Select"}
    />
  );
};

export default Page;
