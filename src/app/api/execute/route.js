import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { code, language } = await req.json();

  const response = await axios.post(
    `${process.env.BASE_URL}/submissions?fields=*&wait=true`,
    {
      source_code: code,
      language_id: language,
      number_of_runs: null,
      // stdin: req.body.stdin,
      expected_output: null,
      cpu_time_limit: null,
      cpu_extra_time: null,
      wall_time_limit: null,
      memory_limit: null,
      stack_limit: null,
      max_processes_and_or_threads: null,
      enable_per_process_and_thread_time_limit: null,
      enable_per_process_and_thread_memory_limit: null,
      max_file_size: null,
      enable_network: null,
    }
  );

  console.log(response.data);

  return NextResponse.json({ message: `nice!` }, { status: 200 });
};
