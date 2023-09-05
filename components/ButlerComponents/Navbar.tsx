import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav
        className=" bg-slate-900 lg:bg-opacity-50 bg-opacity-80
     backdrop-blur-lg z-50 sticky top-0 transition duration-500 ease-in-out"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 border-b border-white border-opacity-20">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link
                  href="/"
                  className="flex items-center opacity-100 hover:opacity-90 tracking-tight focus:outline-none"
                >
                  <div
                    className="w-[15px] h-[15px] rounded-full bg-orange-500 ring-2 ring-orange-500
                   ring-offset-2 ring-offset-slate-900"
                  ></div>

                  <span className=" self-center ml-3 font-bold text-sm md:text-base">
                    Mr Donny Johnson
                  </span>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center">
              <div className="relative">
                <button
                  type="button"
                  className="text-gray-300 hover:bg-opacity-40 hover:text-white
               flex items-center focus:outline-none px-4 py-2 rounded-full text-sm font-medium"
                >
                  <span>Websites</span>
                  <span className="w-[6px] h-[6px] ml-1 bg-gray-300 rounded-full"></span>
                </button>
              </div>
              <div className="relative ml-6">
                <button
                  type="button"
                  className="text-gray-300 hover:bg-opacity-40 hover:text-white
               flex items-center focus:outline-none px-4 py-2 rounded-full text-sm font-medium"
                >
                  <span>Web Apps</span>
                  <span className="w-[6px] h-[6px] ml-1 bg-gray-300 rounded-full"></span>
                </button>
              </div>
              <div className="relative ml-6">
                <button
                  type="button"
                  className="text-gray-300 hover:bg-opacity-40 hover:text-white
               flex items-center focus:outline-none px-4 py-2 rounded-full text-sm font-medium"
                >
                  <span>Digital</span>
                  <span className="w-[6px] h-[6px] ml-1 bg-gray-300 rounded-full"></span>
                </button>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:item-center lg:space-x-4">
                <Link
                  href="/projects"
                  className="text-gray-300 hover:bg-opacity-40 hover:text-white
               flex items-center focus:outline-none px-4 py-2 rounded-full text-sm font-medium"
                >
                  Projects
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div className="hidden lg:flex flex-shrink-0">
                <Link
                  href="/contact"
                  className="relative inline-flex items-center rounded-full border border-transparent 
                px-4 py-2 bg-orange-700 text-sm text-white shadow-sm hover:bg-opacity-70 
                focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 
                focus:ring-offset-slate-900"
                >
                  <span>Contact</span>
                </Link>
              </div>
              <div className="flex items-center lg:hidden"> {/* TODO  */}</div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
