"use client";
import { useSession } from "next-auth/react";
import Navigation from "./Navigation";

const Protected = ({ children, title }) => {
  const { status } = useSession();

  return (
    <>
      {status === "loading" && "loading"}
      {status === "authenticated" && (
        <>
          <title>{title}</title>
          <Navigation />
          <div className="flex justify-center items-center">
            <div className={`w-full h-full`}>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Protected;
