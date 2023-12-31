"use client";
import Link from "@/components/Link";
import { signIn } from "next-auth/react";

const Landing = () => {
  return (
    <div className="grid items-center h-screen w-screen text-center grid-cols-5 justify-items-end">
      <div className="w-3/4 text-4xl inline-block text-left text-code-white col-span-3">
        Hello World!
        <div className="text-8xl font-bold py-5 leading-normal">
          Introducing Apollo
        </div>
        An educational tool for
        <span className="text-code-pink"> beginners </span> in computer science
        to practice their fundamentals!
      </div>
      <Link text="Get Started" color="lime" link="/dashboard" />
      <button className="text-white" onClick={() => signIn("google")}>
        CLICK ME
      </button>
    </div>
  );
};

export default Landing;
