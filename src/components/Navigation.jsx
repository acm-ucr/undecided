import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import Nav from "react-bootstrap/Nav";

const Navigation = ({ profile }) => {
  return (
    <Navbar className="flex w-full pl-16 pt-3">
      <Nav className="brand">
        <Link className="flex no-underline items-center gap-2" href="/register">
          <RxCross1 className=" text-2xl text-code-black bg-code-white" />
          <p className="text-2xl pl-3 text-code-white font-semibold"> Apollo</p>
        </Link>
      </Nav>
      <Nav className="brand pl-12">
        <Link
          className="pt-1 no-underline flex items-center text-code-white"
          href="/dashboard"
        >
          <p>Problems</p>
        </Link>
      </Nav>
      <Nav className="brand pl-12 w-full justify-end pr-16">
        <Link
          className="pt-1 no-underline flex items-center text-code-white"
          href="/profile"
        >
          <Image
            className="bg-code-white rounded-full w-7 h-7"
            src={profile}
            alt={"profile"}
          />
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
