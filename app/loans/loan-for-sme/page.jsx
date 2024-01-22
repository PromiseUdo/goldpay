import BreadCrumb from "@/app/components/BreadCrumb";
import React from "react";
import PageIntro from "../../components/PageIntro";
import PageContent from "./components/PageContent";
import CTA from "../components/Cta";
import Testimonials from "../components/Testimonials";

const page = () => {
  return (
    <div>
      <BreadCrumb plainTextPages={["loans"]} />
      <PageIntro
        image="/sme.jpg"
        title="Loan for SMEs"
        descripton="Fuel the growth of your small or medium-sized enterprise with our tailored SME Loan solutions"
        button={true}
      />
      <PageContent />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default page;
