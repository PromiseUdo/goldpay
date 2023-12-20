import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import PageIntro from "./components/PageIntro";
import PageContent from "./components/PageContent";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <PageIntro title={"Job Openings"} description={""} /> <PageContent />
    </div>
  );
};

export default page;
