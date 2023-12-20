import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import PageIntro from "./components/PageIntro";
import PageContent from "./components/PageContent";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <PageIntro
        title={"Our Blog"}
        descripton={
          "More for you to read about Finances, Investment and improve your Financial culture "
        }
      />
      <PageContent />
    </div>
  );
};

export default page;
