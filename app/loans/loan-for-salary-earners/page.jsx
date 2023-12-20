import BreadCrumb from "@/app/components/BreadCrumb";
import React from "react";
import PageIntro from "../../components/PageIntro";
import PageContent from "./components/PageContent";
import CTA from "../components/Cta";
import Testimonials from "../components/Testimonials";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <PageIntro
        image="/salary.avif"
        title="Loan for Salary Earners"
        descripton="Get a loan for your education with ease. Flexible repayment
              options and competitive interest rates. Apply now to achieve your
              academic goals."
        button={true}
      />
      <PageContent />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default page;
