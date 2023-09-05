import Image from "next/image";
import React from "react";

const FullyFeature = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-32 relative">
      <div className="absolute inset-y-0 left-0 -z-10 w-full lg:w-1/2">
        <Image
          className="absolute opacity-20 top-[calc(100%-13rem)] -left-56 w-[72.1875rem]
           transform-gpu blur-3xl lg:top-[calc(15%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
          src="/background.jpg"
          alt="background"
          //   width={1100}
          //   height={700}
          fill
        />
      </div>
      <div className="gap-8 md:flex content-center">
        <div className="space-y-6 h-full max-w-lg flex flex-col self-center">
          <div>
            <div className="flex content-start mb-6">
              <div className="w-5 h-5 bg-orange-700 flex-shrink-0"></div>

              <div className="ml-4 flex-shrink">
                <h3 className="text-base lg:text-lg font-semibold mb-2">
                  Fully Featured Estate Agent Website
                </h3>
                <div className="text-sm text-gray-400">
                  <p className="mb-4">
                    On-page optimisation ensured the new site would be loved by
                    Google, while new features like a stamp-duty calculator,
                    recently viewed property and bookmarking system all aimed to
                    improve user engagement.
                  </p>
                  <p className="mb-4">
                    Following launch I have continued to provide digital support
                    and, together with their in-house team, achieved some
                    excellent results:
                  </p>

                  <ul className=" list-outside list-disc ml-8 mb-4">
                    <li>
                      Traffic levels increased significantly year-on-year, with
                      resultant increases in viewing requests and valuation
                      requests
                    </li>
                    <li>Engagement metrics improved significantly:</li>
                    <li> Bounce rate reduced by more than 50%</li>
                    <li>Average time-on-site doubled</li>
                    <li>
                      Average pages-per-session increased significantly as users
                      viewed more properties
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl max-h-[32rem]">
          <Image
            className="relative mx-auto max-w-full max-h-[32rem] object-contain object-center"
            src="/property-list.png"
            alt="property-list"
            width={2429}
            height={1599}
          />
        </div>
      </div>
    </div>
  );
};

export default FullyFeature;
