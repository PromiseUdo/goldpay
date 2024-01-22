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
        image="/salary.avif"
        title="Loan for Salary Earners"
        descripton="Empower your financial journey with our specialized Salary Earners Loan tailored to meet the unique needs of working professionals."
        button={true}
      />
      <PageContent />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default page;
