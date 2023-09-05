import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className=" max-w-xl text-center mx-auto m-24">
      <nav>
        <ol className=" capitalize text-xs inline-flex mb-4 relative text-gray-200">
          <li className=" inline-flex">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
            <span className="mx-2 w-4 h-4">|</span>
          </li>
          <li className=" inline-flex">
            <Link href="/" className="hover:text-orange-500">
              Projects
            </Link>
            <span className="mx-2 w-4 h-4">|</span>
          </li>
          <li className=" inline-flex">
            <span className="opacity-60">Butler Sherborn</span>
          </li>
        </ol>
      </nav>
      <div className="text-orange-600 text-2xl lg:text-3xl mb-4 font-bold">
        Bulter Sherborn
      </div>
      <h1 className="text-3xl font-bold mb-6">
        Property Listings Web Development and Digital Marketing
      </h1>
      <p className="mb-4 text-gray-400 text-base">
        Butler Sherborn is the Cotswolds property specialist and principal
        alternative to the national agents in the area.
      </p>
    </div>
  );
};

export default Intro;
