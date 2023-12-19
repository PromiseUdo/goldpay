import PageBanner from "@/app/components/PageBanner";
import React from "react";
import PageIntro from "../components/PageIntro";
import BreadCrumb from "@/app/components/BreadCrumb";
import PageContent from "./components/PageContent";
import CTA from "./components/Cta";
import Testimonials from "./components/Testimonials";

const page = () => {
  return (
    <div>
      {/* <PageBanner
        title="Get Loan For School Fees"
        description="Get to know us better"
      /> */}
      <BreadCrumb />
      <PageIntro />
      <PageContent />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default page;
