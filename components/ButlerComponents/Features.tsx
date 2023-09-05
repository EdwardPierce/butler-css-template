import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 z-2 h-full flex justify-center items-center ">
      <ul className="grid grid-cols-1 gap-x-4 sm:grid-cols-3 sm:gap-x-6 lg:gap-x-8">
        <li className="relative">
          <div
            className="w-full aspect-[16/11] object-cover object-center rounded-lg
           overflow-hidden shadow"
          >
            <Image
              className="w-full h-full object-cover object-center"
              src="/feature1.webp"
              alt="featureImage"
              width={768}
              height={768}
            />
          </div>
          <h2 className="text-lg text-white font-semibold tracking-tight mt-6 mb-4">
            Rightmove Integrated Website
          </h2>
          <div className="text-sm tracking-tight text-gray-400 mb-4">
            <p>
              Butler Sherborn use <strong>Vebra Alto</strong> property
              management software, which feeds properties directly to Rightmove,
              Zoopla and On the Market. Taking the feed produced by Vebra Alto
              allowed me to create an automatic solution to upload, update and
              remove properties directly on the Butler Sherborn website.
            </p>
          </div>
        </li>

        <li className="relative">
          <div
            className="w-full aspect-[16/11] object-cover object-center rounded-lg
           overflow-hidden shadow"
          >
            <Image
              className="w-full h-full object-cover object-center"
              src="/feature2.webp"
              alt="featureImage"
              width={768}
              height={768}
            />
          </div>
          <h2 className="text-lg text-white font-semibold tracking-tight mt-6 mb-4">
            Database Driven Property Search
          </h2>
          <div className="text-sm tracking-tight text-gray-400 mb-4">
            <p>
              Using a database driven approach, properties on the site are
              searchable by location and value, much like the large property
              listing platforms.
            </p>
          </div>
        </li>

        <li className="relative">
          <div
            className="w-full aspect-[16/11] object-cover object-center rounded-lg
           overflow-hidden shadow"
          >
            <Image
              className="w-full h-full object-cover object-center"
              src="/feature3.webp"
              alt="featureImage"
              width={768}
              height={768}
            />
          </div>
          <h2 className="text-lg text-white font-semibold tracking-tight mt-6 mb-4">
            Content Managed by Internal Team
          </h2>
          <div className="text-sm tracking-tight text-gray-400 mb-4">
            <p>
              Development using a CMS gives internal marketing teams the ability
              to fully manage site content while ensuring the design looks great
              and follows the existing brand identity.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Features;
