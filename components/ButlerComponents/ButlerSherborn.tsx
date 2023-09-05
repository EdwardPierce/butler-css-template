import Image from "next/image";
import React from "react";

const ButlerSherborn = () => {
  return (
    <div className="mb-36">
      <div className="relative pt-12 pb-16 overflow-hidden ">
        <div className="relative">
          <div
            className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense
           lg:gap-16"
          >
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="pulser">{/* image */}</div>
              </div>
              <div className="mt-6">
                <h2 className="text-2xl lg:text-4xl mb-4 font-semibold">
                  Butler Sherborn
                </h2>
                <h3 className="text-lg lg:text-2xl text-gray-300">
                  Rightmove integrated website, with map-based search, for the
                  Cotswolds&apos; principal independent estate agents
                </h3>
                <div className="my-6">
                  <div
                    className="px-2.5 py-0.5 mr-2 inline-flex items-center font-bold 
                    tracking-wide text-white text-sm rounded-full bg-gradient-to-tr 
                   from-orange-900 to-orange-800"
                  >
                    Web Development
                  </div>
                  <div
                    className="px-2.5 py-0.5 mr-2 inline-flex items-center font-bold 
                    tracking-wide text-white text-sm rounded-full bg-gradient-to-tr 
                   from-orange-900 to-orange-800"
                  >
                    UI
                  </div>
                  <div
                    className="px-2.5 py-0.5 mr-2 inline-flex items-center font-bold 
                    tracking-wide text-white text-sm rounded-full bg-gradient-to-tr 
                   from-orange-900 to-orange-800"
                  >
                    APIs
                  </div>
                </div>
                <p className="mt-4 text-base lg:text-lg text-gray-400">
                  Butler Sherborn is the Cotswolds property specialist and
                  principal alternative to the national agents in the area.
                </p>
              </div>

              <div className="grid grid-cols-2 mt-6 gap-y-12 gap-x-6">
                <div>
                  <dl>
                    <dt className=" order-1 text-3xl lg:text-4xl font-bold text-orange-500">
                      3110
                    </dt>
                    <dd className="order-2 text-sm font-medium text-gray-400">
                      Property listings synced with Rightmove & Vebra
                    </dd>
                  </dl>
                </div>

                <div>
                  <dl>
                    <dt className="order-1 text-3xl lg:text-4xl font-bold text-orange-500">
                      6X
                    </dt>
                    <dd className="order-2 text-sm font-medium text-gray-400">
                      More website traffic in 4 years post launch
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            {/* 1 */}
            <div className="mt-12  sm:mt-16 lg:mt-0 pb-16">
              <div
                className=" pl-4 -mr-48 sm:pl-6 md:-mr-16
               lg:px-0 lg:m-0 lg:relative lg:h-full"
              >
                <div>{/*!*/}</div>
                <Image
                  className="w-full shadow rounded-xl lg:h-full lg:absolute lg:left-0 lg:w-auto max-w-none"
                  src="/pic1.webp"
                  alt="screenshot"
                  width={1433}
                  height={814}
                />
              </div>
            </div>

            {/* 2 */}
          </div>
          {/* grid container */}
        </div>
      </div>
    </div>
  );
};

export default ButlerSherborn;
