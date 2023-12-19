import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import PageIntro from "../components/PageIntro";
import ContactFormMap from "./components/ContactFormMap";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <PageIntro
        image="/handshake.jpg"
        title="Get in touch"
        descripton="Learn more about Goldpay Investment Limited, our services  or any other enquiries"
        button={false}
      />
      <ContactFormMap />
    </div>
  );
};

export default page;
