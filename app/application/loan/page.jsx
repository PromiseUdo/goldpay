import BreadCrumb from "@/app/components/BreadCrumb";
import React from "react";
import PageIntro from "../components/PageIntro";
import ApplicationForm from "../components/ApplicationForm";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <PageIntro
        title={"Loan Application Form"}
        description={"Tailored to your needs"}
      />

      <ApplicationForm />
    </div>
  );
};

export default page;
