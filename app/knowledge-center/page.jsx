import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// import PageIntro from "./components/PageIntro";
import FAQ from "./components/FAQ";
import PageIntro from "../components/PageIntro";

const page = () => {
  return (
    <div>
      <BreadCrumb />

      <PageIntro
        image="/thinking.jpg"
        title="Knowledge Center"
        descripton="Get answers to commonly asked questions"
        button={false}
      />
      <FAQ />
    </div>
  );
};

export default page;
