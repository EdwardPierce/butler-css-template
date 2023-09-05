import { Fragment } from "react";

import AddInfo from "@/components/ButlerComponents/AddInfo";
import ButlerSherborn from "@/components/ButlerComponents/ButlerSherborn";
import Features from "@/components/ButlerComponents/Features";
import FullyFeature from "@/components/ButlerComponents/FullyFeature";
import Intro from "@/components/ButlerComponents/Intro";
import Navbar from "@/components/ButlerComponents/Navbar";

const Page = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="overflow-x-hidden">
        <Fragment>
          <Intro />
          <ButlerSherborn />
          <Features />
          <FullyFeature />
          <AddInfo />
        </Fragment>
      </main>
    </Fragment>
  );
};

export default Page;
