import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl"></span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-around">
          <Link className="mx-5" href={"/"}>Doctor AI</Link>
          <Link className="mx-5" href={"/asad"}>Dev Info</Link>
        </nav>
      </div>
    </header>
  );
};
