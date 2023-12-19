import React from "react";
import MissionAndVision from "./components/MissionAndVision";
import PageIntro from "../components/PageIntro";
import BreadCrumb from "../components/BreadCrumb";
import OurBoard from "./components/OurBoard";
import WhyUs from "./components/WhyUs";

const About = () => {
  return (
    <div>
      <BreadCrumb />
      <PageIntro
        image="/handshake.jpg"
        title="We are here to help you thrive in an evolving world"
        descripton=""
      />
      <WhyUs />
      <MissionAndVision />
      <OurBoard />
    </div>
  );
};

export default About;
