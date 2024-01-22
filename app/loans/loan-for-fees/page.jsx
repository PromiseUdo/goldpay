import PageBanner from "@/app/components/PageBanner";
import React from "react";
import PageIntro from "../../components/PageIntro";
import BreadCrumb from "@/app/components/BreadCrumb";
import PageContent from "./components/PageContent";
import CTA from "../components/Cta";
import Testimonials from "../components/Testimonials";

const page = () => {
  return (
    <div>
      <BreadCrumb plainTextPages={["loans"]} />
      <PageIntro
        image="/loan-school-fees.jpg"
        title="School Fees Loan"
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
