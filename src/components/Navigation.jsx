"use client";
import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import Nav from "react-bootstrap/Nav";
import { useSession } from "next-auth/react";

const Navigation = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full flex justify-center">
      <Navbar className="flex py-3 w-11/12 my-auto">
        <Nav className="brand">
          <Link
            className="flex no-underline items-center gap-2"
            href="/register"
          >
            <RxCross1 className=" text-2xl text-code-black bg-code-white" />
            <p className="text-2xl pl-3 text-code-white font-semibold mb-0">
              Apollo
            </p>
          </Link>
        </Nav>
        <Nav className="brand pl-12">
          <Link
            className="pt-1 no-underline flex items-center text-code-white"
            href="/dashboard"
          >
            <p className="pl-10 mb-0 hover:text-code-lightgray">Problems</p>
          </Link>
        </Nav>
        <Nav className="brand pl-12 w-full justify-end">
          <Link
            className="pt-1 no-underline flex items-center text-code-white"
            href="/profile"
          >
            <Image
              className="bg-code-white rounded-full"
              width={36}
              height={36}
              src={session.user.image}
              alt="profile"
            />
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
