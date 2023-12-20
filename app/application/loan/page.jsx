import BreadCrumb from "@/app/components/BreadCrumb";
import React from "react";
import PageIntro from "../components/PageIntro";
import ApplicationForm from "../components/ApplicationForm";

const page = () => {
  return (
    <div>
      <BreadCrumb plainTextPages={["application"]} />
      <PageIntro
        title={"Loan Application Form"}
        description={"Kindly fill out the Loan Application Form below"}
      />

      <ApplicationForm />
    </div>
  );
};

export default page;
