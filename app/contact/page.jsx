import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ContactFormMap from "./components/ContactFormMap";
import CommunicationChannels from "./components/CommunicationChannels";
import PageIntro from "./components/PageIntro";

const page = () => {
  return (
    <div>
      <BreadCrumb />
      <PageIntro
        title="Get in touch"
        descripton="Learn more about Goldpay Investment Limited, our services  or any other enquiries"
        button={false}
      />

      <CommunicationChannels />
      <ContactFormMap />
    </div>
  );
};

export default page;
