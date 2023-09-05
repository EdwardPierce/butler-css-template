import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddInfo = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center 
    mb-12 relative"
    >
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-12 lg:col-span-4">
          <h3 className="text-3xl mb-4">
            Do you want to create and implement a{" "}
            <span className="text-orange-700">
              {" "}
              compelling digital strategy
            </span>
            for your business?
          </h3>

          <div className=" border-y border-slate-900 mb-3">
            <ul className=" divide-y divide-slate-900">
              <li className="flex py-4">
                <Image
                  src="/avatar.jpg"
                  className="rounded-full"
                  alt="avatar"
                  width={48}
                  height={48}
                />
                <div className="ml-3 flex flex-col">
                  <span className="text-base font-bold text-white">Edward</span>
                  <Link
                    href="/"
                    className="text-gray-400 text-sm hover:text-white"
                  >
                    address@co.uk
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="py-5 gap-5">
            <Link
              href="/"
              className="bg-orange-700 px-2 lg:px-4 py-3 text-sm lg:text-base 
              text-center rounded-md text-white font-medium shadow
               hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-orange-700
                focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Book a call
            </Link>
          </div>
        </div>

        <div className="lg:col-start-6 lg:col-span-7 col-span-12 grid grid-cols-2 gap-4">
          <div className="flex content-start mb-4">
            <div className="w-5 h-5 rounded-full bg-orange-700 flex-shrink-0 "></div>
            <div className="ml-4">
              <p className="text-sm md:text-base text-gray-400">
                More than 15 years in marketing, ecommerce and digital product
                development.
              </p>
            </div>
          </div>
          <div className="flex content-start mb-4">
            <div className="w-5 h-5 rounded-full bg-orange-700 flex-shrink-0 "></div>
            <div className="ml-4">
              <p className="text-sm md:text-base text-gray-400">
                Chartered Institute of Marketing (CIM) Chartered Marketer and
                Prince 2 project management practitioner.
              </p>
            </div>
          </div>
          <div className="flex content-start mb-4">
            <div className="w-5 h-5 rounded-full bg-orange-700 flex-shrink-0 "></div>
            <div className="ml-4">
              <p className="text-sm md:text-base text-gray-400">
                3M+ in page views across client websites in 2022, £6M+ in online
                payments processed.
              </p>
            </div>
          </div>
          <div className="flex content-start mb-4">
            <div className="w-5 h-5 rounded-full bg-orange-700 flex-shrink-0 "></div>
            <div className="ml-4">
              <p className="text-sm md:text-base text-gray-400">
                10 years working as a freelance developer in industries like
                tech, energy, healthcare and on self-started projects.
              </p>
            </div>
          </div>
          <div className="flex content-start mb-4">
            <div className="w-5 h-5 rounded-full bg-orange-700 flex-shrink-0 "></div>
            <div className="ml-4">
              <p className="text-sm md:text-base text-gray-400">
                Technical skills across a range of areas like Javascript, Nuxt,
                Wordpress, Shopify, Astro, Tailwind, Sanity, Stripe, Medusa,
                Supabase and more.
              </p>
            </div>
          </div>
          <div className="flex content-start mb-4">
            <div className="w-5 h-5 rounded-full bg-orange-700 flex-shrink-0 "></div>
            <div className="ml-4">
              <p className="text-sm md:text-base text-gray-400">
                Extensive portfolio of websites, web apps and digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfo;
